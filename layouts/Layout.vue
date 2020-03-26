<template>
  <div>
    <BaseListLayout v-if="$pagination" class="fade-in-up"/>
    <Content v-else class="fade-in-up"/>
  </div>
</template>


<style src="prismjs/themes/prism-okaidia.css"></style>
