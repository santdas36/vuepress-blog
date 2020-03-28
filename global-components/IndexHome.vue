<template>
  <div id="base-list-layout">
    <header
      class="home-hero"
      :style="{backgroundImage: 'url(' + $themeConfig.heroImage + ')'}"
    >
      <h1 class="font-dancing">{{ $site.title }}</h1>
      <h2>{{ $site.description }}</h2>
    </header>
    <div class="row justify-content-center mb-5 mx-3 d-none d-md-block">
      <featured-posts></featured-posts>
    </div>
    <div class="row container-fluid m-0 p-3">

    <div class="col-12 py-5 px-3 px-lg-5">
        <div class="about-section">
          <h1>{{ $themeConfig.about.fullName }}</h1>
          <p class="py-2">{{ $themeConfig.about.bio }}</p>
        </div>
      <h2 class="pt-2 mb-4">Latest Articles</h2>

      <latest-posts></latest-posts>

          <el-button
            :to="/post/"
            @click="go()"
            type="primary"
            class="mt-4"
          >Browse Articles</el-button>

    </div>

      <aside class="col-12 py-5 px-3 px-lg-5 py-3 my-2 flex-column">
        <div class="py-3">
          <h2>Newsletter</h2>
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
  methods: {
    go () {
      this.$router.push('/article/')
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

