<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
</script>

<template>
  <section class="step-item">
    <div class="step-card">
      <Accordion expandIcon="i-mdi-plus" collapseIcon="i-mdi-minus">
        <AccordionTab>
          <template #header
            ><h3 class="title"><span>color</span></h3></template
          >
          <div class="card-ctn color-ctn"></div>
        </AccordionTab>
      </Accordion>
    </div>
  </section>
</template>

<style lang="scss">
.card-ctn.color-ctn {
}
</style>
