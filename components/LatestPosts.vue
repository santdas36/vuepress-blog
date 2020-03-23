<template>
    <div class="latest-posts row col-12 d-flex justify-content-around align-items-center">
      <div
        v-for="(post, index) in posts"
        v-if="index < 5"
        :key="post.key"
        class="cursor-pointer col-sm-12 col-lg-5 py-4 px-2 card m-3 mx-lg-0 my-lg-3"
        @click="go(post.path)"
        shadow="hover"
        >
          <div
            class="col-12"
            v-if="post.frontmatter.image"
          >
            <img
              :src="post.frontmatter.image"
              :alt="post.title"
              class="w-100 rounded"
            >
          </div>
          <div class="col-12 pt-4">
            <h3>
              <router-link
                :to="post.path"
                class="text-decoration-none"
              >
                {{ post.title }}
              </router-link>
            </h3>
            <div
              class="text-secondary my-2"
              v-if="post.summary"
            ><span class="space-tab"></span>
              {{ post.summary }}
              <router-link
                :to="post.path"
                class="read-more"
              >Read more</router-link>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'latest-posts',
  methods: {
    go (path) {
      this.$router.push(path)
    }
  },
  computed: {
    posts () {
      return this.$site.pages.filter(page => page.frontmatter.featured == true)
    }
  }
};
</script>

<style lang="stylus">
.cursor-pointer {
  cursor: pointer;
}
</style>