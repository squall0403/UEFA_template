<script setup>
import CompFeatures from './CompFeatures.vue';
import QuickLinks from './QuickLinks.vue';
import UefaCompetitions from './UEFACompetitions.vue';

const props = defineProps(['data'])
const compFeatures = props.data.menu[0]
const quickLinks = props.data.menu[1]
const uefaCompetitions = props.data.menu[2]
</script>
<template>
 <div slot="body" class="all-sections-dialog__body">
  <div class="all-section-wrapper">
   <div class="left-flex">
    <CompFeatures :compFeatures="compFeatures" class="comp-features" />
    <QuickLinks :quickLinks="quickLinks" class="quick-links" />
   </div>
   <div class="right-flex">
    <UefaCompetitions :uefaCompetitions="uefaCompetitions" class="uefa-competitions" />
   </div>
   <div class="mobile-view">
    <CompFeatures :compFeatures="compFeatures" class="comp-features" />
    <UefaCompetitions :uefaCompetitions="uefaCompetitions" class="uefa-competitions" />
    <QuickLinks :quickLinks="quickLinks" class="quick-links" />
   </div>
  </div>
 </div>
</template>
<style scoped>
.mobile-view {
 display: none;
}

.all-sections-dialog__body {
 padding: 48px 16px 16px 16px;
}

.all-sections-dialog__body .all-section-wrapper {
 display: flex;
 max-width: 1392px;
 margin-left: auto;
 margin-right: auto;
 flex-direction: row;
 column-gap: 72px;
 flex-wrap: wrap;
}

.left-flex {
 flex-basis: 31%;
}

.left-flex .comp-features {
 margin-bottom: 48px;
}

.right-flex {
 flex-basis: 58%;
}

@media screen and (max-width: 990px) {
 .all-sections-dialog__body,
 .left-flex,
 .right-flex {
  display: none !important;
 }

 .mobile-view {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 }

 .mobile-view .comp-features{
  margin-bottom: 48px;
 }
}
</style>