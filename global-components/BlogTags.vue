<template>
  <main class="col-12 py-5 px-3 px-lg-5 blog-tag-container">
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </main>
</template>

<script>
export default {
  props: ["tags"]
};
</script>

<style lang="stylus">
.blog-tag-container {
  max-width: calc(750px + 6rem);
}
</style>
