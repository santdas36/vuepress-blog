<template>
  <div>
    <div class="preload-container" id="loading">
        <div id="loading-center-absolute">
          <div class="object" id="object_one"></div>
          <div class="object" id="object_two"></div>
          <div class="object" id="object_three"></div>
          <div class="object" id="object_four"></div>
        </div>
    </div>
    <Header />
      <DefaultGlobalLayout />
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer
  },

  data () {
    return {
      isMobileHeaderOpen: false
    };
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  }
};
</script>
<style>
#loading{
	background-color: #fff;
	height: 100vh;
	width: 100vw;
	position: fixed;
	z-index: 99999;
	margin-top: 0px;
	top: 0px;
}
#loading-center-absolute {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.object{
	width: 60px;
	height: 10px;
     border-radius: 5px;
	margin-bottom:15px;
	background-color: #2c3e50;
	-webkit-animation: loaderAnim 0.8s infinite;
	animation: loaderAnim 0.8s infinite;
	transform: translate(-25%,0);
	}
#object_two, #object_four { 
	-webkit-animation-delay: 0.3s; 
    animation-delay: 0.3s;
    background-color: #4e6e8e;
	}
@keyframes loaderAnim {
  0% {
	-ms-transform: translate(-25%,0); 
   	-webkit-transform: translate(-25%,0); 
    transform: translate(-25%,0); 
	  }
  50% {
	-ms-transform: translate(25%,0); 
   	-webkit-transform: translate(25%,0); 
    transform: translate(25%,0); 
	  }
  100% {
	-ms-transform: translate(-25%,0); 
   	-webkit-transform: translate(-25%,0); 
    transform: translate(-25%,0); 

	  }
}
</style>
