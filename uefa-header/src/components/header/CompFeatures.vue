<script setup>
const props = defineProps(['compFeatures'])
</script>
<template>
 <div class="features-wrapper">
  <div class="title">
   {{ compFeatures.text }}
  </div>
  <div class="items-wrapper">
   <div class="menu-item" v-for="item in compFeatures.menuItems">
    <a :href="item.href" target="_blank" class="font-medium">{{ item.text }}</a>
   </div>
  </div>

 </div>
</template>
<style scoped>
.features-wrapper {
 background-color: #ffffff19;
 padding: 24px;
 border-radius: 8px;
 display: flex;
 flex-direction: column;
}

.features-wrapper .title {
 font-size: 20px;
 color: #ffffffb2;
 margin-bottom: 16px;
 line-height: 26px;
}

.features-wrapper .items-wrapper {
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
}

.features-wrapper .items-wrapper .menu-item {
 width: 50%;
 padding: 8px 0px;
}

.features-wrapper .items-wrapper .menu-item a {
 color: #fff;
 font-size: 14px;
 line-height: 21px;
}
</style>