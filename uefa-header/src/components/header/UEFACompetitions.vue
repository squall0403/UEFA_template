<script setup>
import CompetitionItem from './CompetitionItem.vue'
const props = defineProps(['uefaCompetitions'])
</script>
<template>
 <div class="uefa-competitions-wrapper">
  <div class="title font-medium">
   {{ uefaCompetitions.text }}
  </div>
  <div class="competiton-items" v-for="items in uefaCompetitions.menuItems">
   <CompetitionItem :items="items" />
  </div>
 </div>
</template>
<style scoped>
.uefa-competitions-wrapper {
 padding-bottom: 24px;
}

.uefa-competitions-wrapper .title {
 font-size: 32px;
 margin-bottom: 24px;
}

@media screen and (max-width: 990px) {
 .uefa-competitions-wrapper .title {
  font-size: 24px;
 }
}
</style>