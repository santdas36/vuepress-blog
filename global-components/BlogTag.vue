<template>
  <div @click="go(tag.path)" class="blog-tag">
    <h2>
      <router-link :to="tag.path" href='#'>{{ tag.name }}</router-link>
    <h2>
    <span>No. of articles: {{ tag.pages.length }}</span>
  </div>
</template>

<script>
  export default {
    props: ['tag'],
    methods: {
      go (path) {
        this.$router.push(path)
      }
    },
  }
</script>

<style lang="stylus">
.blog-tag {
  height: 250px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a47d5 100%);
  border-radius: 10px;
  transition: all 0.3s;
  position: relative;
  width: calc(100% - 2rem);
  margin: 1rem;
  z-index: 2;
  border: none;

  @media (min-width: $MQMobileNarrow) {
    width: calc(50% - 2rem);
  }
  @media (min-width: $MQMobile) {
    width: calc(33% - 2rem);
  }
  span, a {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .3s;
    width: 100%;
    text-align: center;
    display:block;
    text-transform: capitalize;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.15);
  }
  span {
    font-size: 1rem;
    top: 120%;
    font-weight: 400;
  }
}
.blog-tag:hover {
  background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
  box-shadow: 0 5px 1rem 5px rgba(0,0,0,0.25);
  transform: scale(1.1);

  span {
    top: 60%;
  }
  a {
    top: 40%;
    font-size: 1.5rem;
  }
}
</style>
