<template>
  <header
    id="header"
    class="border-bottom"
  >
    <div class="p-4 row align-items-center justify-content-between">
      <router-link
        to="/"
        class="text-decoration-none pt-3 pl-3 pl-lg-5"
      >
        <h2>
          {{ $site.title }}
        </h2>
      </router-link>
      <SearchBox class="pr-3 pr-lg-5"/>
    </div>
    <nav class="navFixed">
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

export default {
  components: { SearchBox },
  data () {	
    return {
      activeIndex: '0',
    }
  }
};
</script>

<style lang="stylus">
#header {
  box-shadow: 0 5px 10px white;
}
.el-menu-item.is-active {
  border-bottom: 3px solid $accentColor !important;
}
.search-box {
  input {
    border-radius: 5px;
  }
 .suggestions {
    z-index: 999;
    right: 2rem !important;
    left: auto !important;
    top: 2.5rem !important;
    box-shadow: 0 3px 5px rgba(0,0,0,0.2);
  }
}
.navItem-text {
  display: inline;

  @media (max-width: $MQMobileNarrow) {
    display: none;
  }
}
.navFixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;
}
</style>
