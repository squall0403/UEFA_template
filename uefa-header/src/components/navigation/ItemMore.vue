<script setup>
const currentLang = import.meta.env.VITE_TARGET_LANG 
const lbl_more = {
    en:"More",
    de:"Mehr",
    fr:"Plus",
    es:"Más",
    pt:"Mais",
    ru:"Еще",
    it:"Altro"
}
</script>
<template>
    <div class="menu-item item-more">{{ lbl_more[currentLang] }}<span class="material-symbols-outlined">menu</span></div>
</template>