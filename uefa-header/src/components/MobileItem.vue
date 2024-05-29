<script setup>
import { reactive } from 'vue'
const props = defineProps(['data'])
const state = reactive({
    show: false
})
</script>
<template>
    <div :class="['item', (data.menuItems && (['has-submenu'])), data.tag]"
        @click="data.menuItems && (state.show = !state.show)">
        <a :href="data.href" v-if="!data.menuItems">{{ data.text }}
        </a>
        <a v-if="data.menuItems" :class="[(state.show && (['open']))]">{{ data.text }}
            <span :class="['material-symbols-outlined', (state.show && (['rotate_arrow']))]">expand_more</span>
        </a>
        <Transition>
            <div class="m-lvl1-container" v-if="data.menuItems" v-show="state.show">
                <div class="m-lvl1-item" v-for="item in data.menuItems">
                    <a :href="item.href">{{ item.text }}</a>
                </div>
            </div>
        </Transition>
    </div>
</template>