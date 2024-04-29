export default defineNuxtConfig({
  runtimeConfig: {
    SHOPIFY_STOREFRONT_ENDPOINT: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  ssr: false,
  modules: ["@pinia/nuxt", , "nuxt-primevue", "nuxt-swiper"],
  css: ["~/assets/css/main.css", "vue-final-modal/style.css"],
  primevue: {
    options: {
      unstyled: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
});
