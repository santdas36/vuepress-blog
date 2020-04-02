<template>
  <div id="base-list-layout">
    <div class="home-hero"></div>
      <div class="header-div pt-3 pt-lg-5 px-3 px-lg-5">
        <h2 class="p-3">{{ $site.description }}</h2>
        <div class="buttons p-3">
          <el-button type="primary" to="/post/">Get Started</el-button>   
          <el-button :to="/post/">Know More</el-button>
        </div>
      </div>
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
.home-hero {
  height: calc(100vh - 10rem);
  width: 100vw;
  background-position: 100% 100%, 0% 100%;
  background-image: url('/images/hero.png'), url('/images/bush.png');
  background-size: contain;
  background-repeat: no-repeat;

  @media (orientation: portrait) and (max-width: $MQMobile), (max-width: $MQMobile) {
    background-position: 50% 50%;
    background-image: url('/images/hero.png');
    background-size: contain;
    background-repeat: no-repeat;
    height: 100vw;
  }
  @media only screen and (min-width: $MQMobile) and (min-height: 800px) {
    background-position: 100% 100%, 0% 100%;
    background-image: url('/images/hero.png'), url('/images/bush.png');
    background-size: auto !important;
    background-repeat: no-repeat;
  }
}
.header-div {
  color: $accentColor;
  max-width: $MQMobile;
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  position: absolute;
  top: 10rem;
  left: 0;

  h2 {
    line-height: 1.5;
  }
  @media (min-width: $MQNarrow) {
    margin-left: 5rem;
  }

  @media (orientation: portrait) and (max-width: $MQMobile) , (max-width: $MQMobile) {
    position: relative;
    font-size: 0.8rem;
    top: 0;

    .el-button {
      width: 100%;
      margin: 0.5rem 0;
    }
  }
}

</style>


<style src="prismjs/themes/prism-okaidia.css"></style>

