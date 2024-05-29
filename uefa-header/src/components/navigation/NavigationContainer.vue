<script setup>
import ItemMoreVue from './ItemMore.vue';
import MenuItemsVue from './MenuItems.vue';
import MobileItem from '../MobileItem.vue';
import { inject } from 'vue';
const props = defineProps(['toggleMobile', 'data'])
const menuOn = inject('menuOn')
const menuOff = inject('menuOff')
const toggleMobile = inject('toggleMobile')

</script>
<template>
    <div class="content-wrap">
        <div class="navigation navigation--sticky d3-plugin" data-plugin="sticky" data-inview-id="_inview_638">
            <!--UEFA.com navigation starts-->
            <div class="nav-container">
                <div class="nav-logo"><a :href="data.trnItem.href" :title="data.trnItem.text"></a>
                </div>
                <div class="nav-items">
                    <MenuItemsVue v-for="item in data.items" :data="item" :menuOn="menuOn" :menuOff="menuOff">
                    </MenuItemsVue>
                </div>
                <ItemMoreVue @click="toggleMobile"></ItemMoreVue>
            </div>
            <!--UEFA.com navigation ends-->
        </div>
    </div>
    <div class="mobile-menu">
        <div class="header">
            <div class="nav-logo"><a :href="data.trnItem.href" :title="data.trnItem.text"></a>
            </div>
            <h3>{{ data.trnItem.text }}</h3>
            <button class="btn-close" @click="toggleMobile"><span class="material-symbols-outlined">
                    close
                </span></button>
        </div>
        <div class="item-container">
            <div class="item"><a>{{ data.trnItem.text }}</a></div>
            <MobileItem v-for="menu_item in data.items" :key="menu_item.id" :data="menu_item" />
        </div>
    </div>
</template>