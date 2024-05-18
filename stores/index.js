import { defineStore } from "pinia";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const publicUrl = "https://21d353-2c.myshopify.com/api/2024-04/graphql.json";
const publicToken = "a6d898657f08aaf157d2e53e17a97cfd";

const client = createStorefrontApiClient({
  storeDomain: publicUrl,
  apiVersion: "2024-04",
  publicAccessToken: publicToken,
});

const query = `
query {
  products(first: 10) {
    edges {
      node {
        id
        title
        images(first: 5) {
          edges {
            node {
              src
            }
          }
        }
        variants(first: 5) {
          edges {
            node {
              id
              title
              image {
                originalSrc
              }
            }
          }
        }
        options(first: 5) {
          id
          name
          values
        }
      }
    }
  }
}
`;

export const useBuilderStore = defineStore("builder", {
  state: () => {
    return {
      data: {},
      selectedOptions: [],
    };
  },
  getters: {
    options: (state) => state.data.product?.options || [],
    images: (state) => state.data.product?.images?.edges || [],
    matchingVariants: (state) => {
      return (
        state.data.product?.variants.edges.filter((variant) => {
          return state.selectedOptions.every((selectedOption) => {
            return variant.node.title.includes(selectedOption.option);
          });
        }) || []
      );
    },
    selectedVariant: (getters) => getters.matchingVariants[0]?.node,
  },
  actions: {
    toggleOption(option, category) {
      const index = this.selectedOptions.findIndex(
        (selectedOption) => selectedOption.category === category
      );

      if (index === -1) {
        this.selectedOptions.push({ category, option });
      } else {
        this.selectedOptions.splice(index, 1, { category, option });
      }
    },

    isSelected(option) {
      return this.selectedOptions.some(
        (selectedOption) => selectedOption.option === option
      );
    },
    async fetchGraphQLData() {
      this.data = (
        await client.request(query, {
          variables: {
            id: "gid://shopify/Product/9000783380823",
          },
        })
      ).data.products.edges;
    },
  },
});
