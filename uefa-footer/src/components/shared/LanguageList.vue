<script setup>
const props = defineProps([
 'languageCode',
 'language'
])
</script>
<template>
 <a class="langSelection js-tracking-link" :data-langid="props.languageCode" :title="props.language">{{
   props.language }}</a>
</template>