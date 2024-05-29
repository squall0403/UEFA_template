<script setup>
import { reactive } from 'vue'
import Lvl2Item from './Lvl2Item.vue';

const props = defineProps(['data'])
const state = reactive({
  show: false
})

</script>

<template>
  <div :class="['lvl1-item', data.tag, (data.menuItems && (['has-subitem'])), (state.show && (['rotate_arrow']))]"
    @click="data.menuItems && (state.show = !state.show, menuOn)" @mouseleave="state.show = false">
    <a :href="data.href" target="_blank" v-if="!data.menuItems">{{ data.text }}</a>
    <template v-if="data.menuItems">
      <div class="lvl1-item-text">
        {{ data.text }}
        <span class="sub_menu_icon">
          <span class="material-symbols-outlined">expand_more</span>
        </span>
      </div>
      <div class="lvl2-container" v-show="state.show">
          <Lvl2Item :data="lvl2_item" :key="lvl2_item.id" v-for="lvl2_item in data.menuItems">
          </Lvl2Item>
      </div>
    </template>
  </div>
</template>
<style>
html[lang="de"] #about .lvl1-container {
  width: 300px !important;
}

.sub_menu_icon {
  display: flex;
  align-items: center;
}
</style>