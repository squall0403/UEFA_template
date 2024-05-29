<script setup>
const props = defineProps(['data'])
</script>
<template>
    <div :class="['lvl2-item', data.tag]">
        <a :href="data.href" target="_blank">
            {{ data.text }}
        </a>
    </div>
</template>