<template>
  <div id="base-list-layout">
    <header
      class="home-hero"
      :style="{backgroundImage: 'url(' + $themeConfig.heroImage + ')'}"
    >
      <h1 class="font-dancing">{{ $site.title }}</h1>
      <h2>{{ $site.description }}</h2>
    </header>
    <featured-posts class="mb-5 mx-3 d-none d-md-block"></featured-posts>
    <div class="row container-fluid flex-row m-0 p-3 justify-content-center">

      <div class="about-section col-12 py-5 px-3">
        <h1>{{ $themeConfig.about.fullName }}</h1>
        <p class="pt-2">{{ $themeConfig.about.bio }}</p>
      </div>

      <div class="col-sm-12 col-lg-9">

        <PostsList
          :posts="pages"
          title="Latest Posts"
        />

        <div class="d-flex w-100 align-items-center justify-content-center">
          <component
            v-if="$pagination.length > 1 && paginationComponent"
            :is="paginationComponent"
          ></component>
        </div>
      </div>
      <aside class="col-sm-12 col-lg-3 py-3 my-2 flex-column">
        <div>
          <h3>Categories</h3>
          <ul class="list-unstyled">
            <li
              v-for="tag in tags"
              :key="tag.name"
              class="d-inline-block mr-3 my-2"
            >
              <el-badge
                :value="tag.pages.length"
                type="primary"
                class="item"
              >
                <router-link
                  :to="tag.path"
                  class="el-button el-button--small text-decoration-none"
                >
                  {{tag.name}}
                </router-link>
              </el-badge>
            </li>
          </ul>
        </div>

        <div class="py-3">
          <h3>Newsletter</h3>
          <p class="py-2">Subscribe to get instant updates and notification about new content (Spam-Free)</p>
          <Subscribe />
        </div>
      </aside>

    </div>

  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import PostsList from "@theme/components/PostsList.vue";
import Subscribe from "@theme/components/Subscribe.vue";
import FeaturedPosts from "@theme/components/FeaturedPosts";
import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { PostsList, Pagination, FeaturedPosts, Subscribe },
  created () {
    this.paginationComponent = this.getPaginationComponent()
  },
  computed: {
    pages () {
      return this.$pagination.pages;
    },
    tags () {
      return this.$tag.list
    }
  },
  methods: {
    getPaginationComponent () {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }
      if (n === 'SimplePagination') {
        return SimplePagination
      }
      return Vue.component(n) || Pagination
    },
  }
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

