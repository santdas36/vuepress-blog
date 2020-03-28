<template>
<div class="featured-posts-container">
  <div class="featured-posts">
    <el-carousel
      :interval="5000"
      type="card"
      height="300px"
    >
      <el-carousel-item
        v-for="post in posts"
        :key="post.key"
        class="bg-light"
      >
        <div class="carousel-card-content d-flex justify-content-center align-items-center flex-column h-100">
          <h2 class="story-title text-light text-center h3 mb-3">{{ post.title }}</h2>
          <router-link
            :to="post.path"
            class="el-button el-button--primary"
          >Read this Post <i class="el-icon-arrow-right"></i></router-link>
        </div>

        <div class="carousel-card-bg" :style="{'background-image': post.frontmatter.image ? `url(${post.frontmatter.image})`: 'none'}"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
export default {
  name: 'featured-posts',
  computed: {
    posts () {
      return this.$site.pages.filter(page => page.frontmatter.featured == true)
    }
  }
};
</script>

<style lang="stylus" scoped>
.featured-posts-container {
  position: relative;
  width: calc(100vw - 3rem);
  height: 400px;
  margin: 0 1.5rem 3rem 1.5rem ;
}
.featured-posts {
  margin-top: 2rem;
  max-width: 960px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-carousel__item {
  border-radius: 10px;
  &.is-active {
    box-shadow: 0 0.25rem 1rem 2px rgba(0,0,0,0.2);
  }
}
.carousel-card-content {
position: relative;
z-index: 33;
text-shadow: 2px 2px 3px rgba(0,0,0,0.15);
}
.el-carousel__mask {
display: none;
}
.carousel-card-bg {
width: 125%;
height: 125%;
position:absolute;
background-size: cover;
top: 0;
bottom: 0;
left: 0;
filter: grayscale(50%) brightness(50%);
transition: filter 0.3s;
}
.el-carousel__item.is-active .carousel-card-bg {
animation: bg-slide 4s 1 ease forwards;
filter: grayscale(0%) brightness(100%)
}
@keyframes bg-slide {
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(-25px, -25px);
  }
}
</style>