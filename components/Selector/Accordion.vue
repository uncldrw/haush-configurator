<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

const { type } = defineProps({
  type: {
    type: String,
    default: "image",
  },
});

const animAccordionSelector = ref({
  duration: 0,
  name: "accordionSelector",
});

const accordionSelectorRefs = ref([]);

let contentHeight = ref("0px");

onMounted(() => {
  let elements = accordionSelectorRefs.value.$el.children;
  contentHeight.value = elements[0].clientHeight + "px";
});
</script>

<template>
  <div class="card-ctn accordion-ctn">
    <Accordion
      expandIcon="i-mdi-plus"
      collapseIcon="i-mdi-minus"
      :activeIndex="0"
      ref="accordionSelectorRefs"
    >
      <AccordionTab
        v-for="(n, index) in 4"
        :pt="{ transition: animAccordionSelector }"
      >
        <template #header>
          <h4 class="title"><span>CMYK</span></h4>
        </template>
        <div class="ctn-wrapper category-ctn">
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            <div class="color-item" v-for="(n, index) in 4">
              <div class="bg-cyan-500 h-8 rounded" />
              <div class="p-1 px-2">
                <p>Indigo</p>
              </div>
            </div>
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style lang="scss">
.card-ctn.accordion-ctn {
  & > [data-pc-name="accordion"] {
    & > [data-pc-name="accordiontab"] {
      &:not(:last-child) {
        & > [data-pc-section="header"] {
          a {
            @apply border-b border-gray-100;
          }
        }
      }
      & > [data-pc-section="header"] {
        @apply rounded;
        a {
          @apply flex items-center flex-row-reverse justify-between rounded py-3 mx-1;
          .title {
            span {
              @apply text-lg  inline leading-[0] px-1;
            }
          }
          & > [data-pc-section="headericon"] {
            @apply mx-2 text-2xl transition-all;
          }
          &[aria-expanded="false"] {
            [data-pc-section="headericon"] {
              @apply rotate-0;
            }
          }

          &[aria-expanded="true"] {
            [data-pc-section="headericon"] {
              @apply rotate-90;
            }
          }
        }
        &[data-p-highlight="true"] {
          @apply border-transparent;
        }
        &:hover {
          @apply bg-gray-50 transition-all duration-300;
        }
      }
      & > [data-pc-section="accordiontab.transition"] {
        @apply px-2 py-4;
      }
    }
  }
}

.accordionSelector-enter-active {
  animation: forwards accrodionSelectorOpen 0.2s ease-out;
}

.accordionSelector-leave-active {
  display: none;
}

@keyframes accrodionSelectorOpen {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
