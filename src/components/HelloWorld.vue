<template>
  <div class="page">
    <div class="header-img">
      <div style="width: 93%;height: 100%;border: 1px solid red;">
        <div class="bounce-up" @click="clickScrollTo"></div>
      </div>
    </div>
    <div ref="main" id="main" style="width: 100%;height: 1024px;">
      <div style="width: 90%;height: 300px;border: 1px solid red;">123456</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    clickScrollTo () {
      document.getElementById('main').scrollIntoView({behavior: 'smooth'})
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    background-image: ~"url(/static/backImg.jpg)";
    height: 100%;
    background-attachment: fixed;
    background-position: center center;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    .header-img {
      background-image: ~"url(/static/index.jpg)";
      height: 100vh;
      background-attachment: fixed;
      background-position: center center;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      .bounce-up{
        background-image: ~"url(/static/arrow_down.png)";
        background-repeat: no-repeat;
        background-size: 60% 60%;
        background-position: center center;
        width: 50px;
        height: 50px;
        animation: animate-bounce-up 2s linear infinite;
        opacity: .5;
        cursor: pointer;
        position: absolute;
        left: calc(50% - 50px);
        bottom: 0;
      }
      @keyframes animate-bounce-up {
        25% {transform: translateY(-4px);}
        50% {transform: translateY(-10px);opacity: 1;}
        75% {transform: translateY(-4px);;}
        100% {transform: translateY(0px);opacity: .5;}
      }
    }
  }
</style>
