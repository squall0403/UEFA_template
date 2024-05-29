<script setup>
import { reactive } from 'vue'
import Lvl1Item from './Lvl1Item.vue';

const props = defineProps(['data', 'menuOn', 'menuOff'])
const state = reactive({
    show: false
})
</script>

<template>
    <div :class="['menu-item', (data.menuItems&&(['has-subitem', data.tag]))]" :id="data.id"
        @mouseover="data.menuItems && (state.show = true, menuOn())"
        @mouseout="data.menuItems && (state.show = false, menuOff())">
        <a :href="data.href" target="_blank" v-if="!data.menuItems">{{ data.text }}</a>
        <template v-if="data.menuItems">
            {{ data.text }}
            <span class="material-symbols-outlined  drop_down">arrow_drop_down</span>
            <div class="lvl1-container" v-show="state.show">
                <Lvl1Item :data="lvl1_item" v-for="lvl1_item in data.menuItems" :key="lvl1_item.id" />
            </div>
        </template>
    </div>
</template>