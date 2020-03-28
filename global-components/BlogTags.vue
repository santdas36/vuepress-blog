<template>
  <main class="col-12 py-5 px-3 px-lg-5">
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </main>
</template>

<script>
export default {
  props: ["tags"]
};
</script>

<style lang="stylus">
</style>
