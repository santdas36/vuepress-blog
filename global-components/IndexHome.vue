<template>
  <div id="base-list-layout">
    <header
      class="home-hero p-3"
      :style="{backgroundImage: 'url(' + $themeConfig.heroImage + ')'}"
    >
      <img class="w-100 p-3 d-md-none :src="$themeConfig.heroImage" />
      <h2 class="col-12 col-md-10 col-lg-8 py-5 px-3 px-lg-5">{{ $site.description }}</h2>
      <el-button type="primary" :to="/post/">Get Started</el-button>
    </header>
    <featured-posts class="d-none d-md-block"></featured-posts>
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
  height: calc(100vh - 10rem);
  background-size: cover;
  background-color: #fff;
  background-position: 100% 100%;

  @media (max-width: $MQMobileNarrow) {
    height: 100%;
    baclground-image: none;
    background: #fff;
  }

  h2 {
    color: $accentColor;
    max-width: 720px;
    width: 100%;
    font-weight: 500;
    font-size: 1.5rem;
    text-shadow: none;
  }
}
</style>


<style src="prismjs/themes/prism-okaidia.css"></style>

