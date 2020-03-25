<template>
  <div class="featured-posts">
    <el-carousel
      :interval="4000"
      type="card"
      height="300px"
    >
      <el-carousel-item
        v-for="post in posts"
        :key="post.key"
        class="bg-light"
      >
        <div class="carousel-card-bg" :style="{'background-image': post.frontmatter.image ? `url(${post.frontmatter.image})`: 'none'}"></div>
        <div class="carousel-card-content d-flex justify-content-center align-items-center flex-column h-100">
          <h2 class="story-title text-light text-center h3 mb-3">{{ post.title }}</h2>
          <router-link
            :to="post.path"
            class="el-button el-button--primary"
          >Read this Post <i class="el-icon-arrow-right"></i></router-link>
        </div>
      </el-carousel-item>
    </el-carousel>
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
.featured-posts {
  margin-top: 2rem;
}
.el-carousel__item {
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.2);
  border-radius: 10px;
}
.carousel-card-bg {
width: 150%;
width: 150%;
position:absolute;
top: 0;
bottom: 0;
left: 0;
background-size: cover;
}
.el-carousel__item.is-active .carousel-card-bg {
animation: bg-slide 4s linear infinite;
}
@keyframes bg-slide {
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(-50%, -50%);
  }
}
</style>