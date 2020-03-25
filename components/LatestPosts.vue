<template>
    <div class="latest-posts row no-gutters">
      <el-card
        v-for="(post, index) in posts"
        v-if="index < 6"
        :key="post.key"
        class="cursor-pointer el-card-latest"
        @click="go(post.path)"
        shadow="hover"
        >
          <div
            v-if="post.frontmatter.image"
            class="post-image-container"
          >
            <img
              :src="post.frontmatter.image"
              :alt="post.title"
            >
          </div>
          <div class="p-3">
            <h3 class="pt-2">
              <router-link
                :to="post.path"
                class="text-decoration-none"
              >
                {{ post.title }}
              </router-link>
            </h3>
            <div
              class="text-secondary py-2"
              v-if="post.summary"
            ><span class="space-tab"></span>
              {{ post.summary }}
              <router-link
                :to="post.path"
                class="read-more"
              >Read more</router-link>
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
      return this.$site.pages.filter(page => page.frontmatter.isArticle == true)
    }
  }
};
</script>

<style lang="stylus">
.cursor-pointer {
  cursor: pointer;
}
.latest-posts {
  @media (min-width: 600px) {
    margin: -0.5rem;
  }
  @media (min-width: 900px) {
    margin: -1rem;
  }
}
.el-card-latest {
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 10px;

  @media (min-width: 600px) {
    width: calc(50% - 1rem);
    margin: 0.5rem;
  }
  @media (min-width: 900px) {
    width: calc(33% - 2rem);
    margin: 1rem;
  }

  .el-card__body {
    padding: 0;

    .post-image-container {
      overflow: hidden;
    }
    img {
      border-radius: 10px 10px 0 0;
      width: 100%;
      transition: transform 0.3s;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>