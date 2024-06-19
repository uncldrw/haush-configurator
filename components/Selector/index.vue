<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

defineProps({
  option: Object,
});

const animAccordion = ref({
  duration: 300,
  name: "accordion",
});

const accordionRefs = ref([]);

let contentHeight = ref("0px");

onMounted(() => {
  contentHeight.value =
    accordionRefs.value.$el.parentElement.clientHeight + "px";
});
</script>

<template>
  <section class="step-item">
    <div class="step-card">
      <Accordion
        :activeIndex="0"
        expandIcon="i-mdi-plus"
        collapseIcon="i-mdi-minus"
      >
        <AccordionTab :pt="{ transition: animAccordion }" ref="accordionRefs">
          <template #header
            ><h3 class="title">
              <span>{{ option.node.title }}</span>
            </h3></template
          >
          <SelectorGrid :options="option.node.variants.edges" />
          <!-- <SelectorAccordion /> -->
        </AccordionTab>
      </Accordion>
    </div>
  </section>
</template>

<style lang="scss">
section.step-item {
  .step-card {
    @apply bg-white rounded-[15.8687px] px-4 py-3 grid gap-8 overflow-hidden;

    & > [data-pc-name="accordion"] {
      & > [data-pc-name="accordiontab"] {
        & > [data-pc-section="header"] {
          & > a {
            @apply flex items-center flex-row-reverse justify-between rounded py-3 px-1;
            .title {
              span {
                @apply text-2xl px-1 inline leading-[0];
              }
            }
            & > [data-pc-section="headericon"] {
              @apply mx-2 text-2xl;
            }
            &:hover {
              @apply bg-gray-50 transition-all duration-300;
            }
            &[data-pc-section="headericon"] {
              @apply transition-all;
            }
          }
          & [aria-expanded="true"] {
            [data-pc-section="headericon"] {
              @apply transform rotate-180;
            }
          }
        }
      }
    }
  }
}
.accordion-enter-active {
  animation: forwards accrodionOpen 0.3s ease-out;
}

.accordion-leave-active {
  animation: forwards accordionClose 0.3s ease-out;
}
.accordion-leave-to {
  opacity: 0;
  height: 0;
}

@keyframes accrodionOpen {
  0% {
    opacity: 0;
    height: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    height: v-bind(contentHeight);
  }
}

@keyframes accordionClose {
  0% {
    opacity: 1;
    height: v-bind(contentHeight);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    height: 0;
  }
}
</style>
