<template>
    <div class="latest-posts row col-12 d-flex flex-row justify-content-around">
      <el-card
        v-for="(post, index) in posts"
        v-if="index < 5"
        :key="post.key"
        class="mb-4 cursor-pointer col-sm-12 col-md-8 col-lg-6"
        shadow="hover"
      >
        <div
          class="row p-2"
          @click="go(post.path)"
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
      </el-card>
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