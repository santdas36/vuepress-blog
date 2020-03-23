<template>
  <div id="base-list-layout">
    <header
      class="home-hero"
      :style="{backgroundImage: 'url(' + $themeConfig.heroImage + ')'}"
    >
      <h1 class="font-dancing">{{ $site.title }}</h1>
      <h2>{{ $site.description }}</h2>
    </header>
    <featured-posts class="mb-5 mx-3 d-none "></featured-posts>
    <div class="row container-fluid flex-row m-0 p-3 justify-content-center">

    <div class="col-12 py-5 px-3 px-lg-5">
        <div class="about-section">
          <h1>{{ $themeConfig.about.fullName }}</h1>
          <p class="pt-2">{{ $themeConfig.about.bio }}</p>
        </div>

      <div class="row col-12 flex-row justify-content-space-around">
        <h2>Latest Articles</h2>
        <LatestPosts
          :posts="pages"
          class="col-sm-12 col-md-8 col-lg-6"
        />
      </div>

          <el-button
            :to="/post/"
            @click="go()"
            type="primary"
          >Browse Articles</el-button>

    </div>

      <aside class="col-sm-12 col-lg-8 offset-lg-2 py-3 my-2 flex-column">
        <div class="py-3 mr-lg-3">
          <h3>Newsletter</h3>
          <p class="py-2">Subscribe to get instant updates and notification about new content (Spam-Free)</p>
          <Subscribe />
        </div>
      </aside>

  </div>
</template>

<script>
import Vue from "vue";
import LatestPosts from "@theme/components/LatestPosts.vue";
import Subscribe from "@theme/components/Subscribe.vue";
import FeaturedPosts from "@theme/components/FeaturedPosts";

export default {
  components: { LatestPosts, FeaturedPosts, Subscribe },
  computed: {
    pages () {
      return this.$site.pages
    },
  },
  methods: {
    go () {
      this.$router.push('/post/')
    }
  },
  
};
</script>

<style lang="stylus">
.common-layout {
  .content-wrapper {
    padding-bottom: 80px;
  }
}
header.home-hero {
  height: 420px;
  background-size: cover;
  background-color: #eee;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    margin: 0;
    font-size: 4em;
    text-align: center;
    text-shadow: 3px 3px 4px rgba(0,0,0,0.25);

    @media (max-width: 600px) {
      font-size: 2em;
    }
  }

  h2 {
    color: darken(white, 9%);
    margin-top: 0;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    font-weight: 300;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.25);
  }
}
</style>


<style src="prismjs/themes/prism-okaidia.css"></style>

