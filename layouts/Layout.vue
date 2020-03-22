<template>
  <div>
    <BaseListLayout v-if="$page.frontmatter.home" />
    <Content v-else />
  </div>
</template>


<style src="prismjs/themes/prism-okaidia.css"></style>
