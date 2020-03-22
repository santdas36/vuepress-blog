<template>
    <div class="row container-fluid flex-row m-0 p-3 justify-content-center">

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
        <div class="mr-lg-3">
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