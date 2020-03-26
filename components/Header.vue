<template>
  <header
    id="header"
  >
    <div class="p-4 title-bar row align-items-center justify-content-between">
      <div class="row pl-5 ml-lg-5">
      <router-link
        to="/"
        class="text-decoration-none pt-3"
      >
        <h2>
          {{ $site.title }}
        </h2>
      </router-link>
      </div>
      <div class="row pr-5 mr-lg-5">
        <SearchBox class="pr-3 pr-lg-2"/>
        <AuthLink class="pr-1">
      </div>
    </div>
    <nav class="sticky">
      <el-menu
        v-if="$themeConfig.nav"
        :default-active="activeIndex"
        mode="horizontal"
        class="d-flex justify-content-center border-0"
      >
        <el-menu-item
          v-for="(item, index) in $themeConfig.nav"
          :index="index.toString()"
          :key="item.text"
          @click="$router.push(item.link)"
        >
          <router-link
            :to="item.link"
            class="text-decoration-none d-block h-100 w-100"
          >
            <i
              v-if="item.icon"
              :class="item.icon"
            ></i>
            <span class="navItem-text">{{ item.text }}</span>
          </router-link>
        </el-menu-item>
      </el-menu>
    </nav>
  </header>
</template>

<script>
import SearchBox from "@SearchBox";
import AuthLink from "./AuthLink.vue";

export default {
  components: { SearchBox, AuthLink },
  data () {	
    return {
      activeIndex: '0',
    }
  }
};
</script>

<style lang="stylus">
.el-menu-item {
  border-bottom: none !important;
  position: relative;
}

.el-menu-item:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background: lighten($accentColor, 15%);
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.3s;
}
.el-menu-item.is-active:before{
  transform: scaleX(1);
  transform-origin: left center;
  border-radius: 3px 3px 0 0;
}
.navItem-text {
  display: inline;

  @media (max-width: $MQMobileNarrow) {
    display: none;
  }
}
.navFixed .sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
.search-box
  display inline-block
  margin-right 1rem
  input
    cursor text
    width 15rem
    height 2rem
    color lighten($textColor, 25%)
    display inline-block
    border 1px solid rgba(0,0,0,0.25)
    border-radius 5px
    font-size 0.9rem
    line-height 2rem
    padding 0 0.5rem 0 2rem
    outline none
    transition all .2s ease
    background url(search.svg) 0.3rem 0.3rem no-repeat
    &:focus
      cursor auto
      border-color $accentColor
  .suggestions
    background #fff
    width calc(100vw - 4rem)
    margin 2rem
    max-width 20rem
    z-index 999
    border 1px solid darken($borderColor, 50%)
    box-shadow 0 3px 5px rgba(0,0,0,0.2)
    border-radius 6px
    padding 0.4rem
    list-style-type none
    top 3rem 
    right 0 !important
  .suggestion
    line-height 1.4
    padding 0.4rem 0.6rem
    border-radius 4px
    cursor pointer
    a
      white-space normal
      color lighten($textColor, 35%)
      &:hover
        color darken($textColor, 70%)
      .page-title
        font-weight 600
      .header
        font-size 0.9em
        margin-left 0.25em
    &.focused
      background-color #f3f4f5
      a
        color $accentColor

@media (max-width: $MQNarrow)
  .search-box
    input
      cursor pointer
      width 0
      border-color transparent
      &:focus
        cursor text
        left 0
        width 12rem

// Match IE11
@media all and (-ms-high-contrast: none)
  .search-box input
    height 2rem

@media (max-width: $MQMobile)
  .search-box
    margin-right 0
    input
      left 1rem
    .suggestions
      right 0

@media (max-width: $MQMobileNarrow)
  .title-bar
    display flex
    justify-content center
  .title-bar > .row
    width 100%
    text-align center
  .search-box
    input
      margin-left: 3rem
      &:focus
        width 100%
  .search-box
    position static !important
    input
      position static !important
  #header
    position relative
    .suggestions
      position absolute
      top 5rem
      right 0
</style>
