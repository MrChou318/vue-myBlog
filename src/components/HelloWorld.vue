<template>
  <div class="page">
    <div class="header-img">
      <div style="width: 93%;height: 100%;border: 1px solid red;">
        <div class="scroll-down">
          <i class="scroll-down-icon"></i>
        </div>
        <div class="animate-bounce-up" @click="clickScrollTo"></div>
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
      .scroll-down {
        position: absolute;
        bottom: 0;
        width: 100%;
        cursor: pointer;
        .scroll-down-icon:before {
          content: "\f107";
        }
        .scroll-down-icon {
          color: #eee;
          text-align: center;
          text-shadow: 0.1rem 0.1rem 0.2rem rgba(0,0,0,.15);
          line-height: 1.5;
          font-weight: 900;
          font-family: "Font Awesome 5 Free";
        }
      }
    }
  }

  @keyframes bounce-up {
    25% {transform: translateY(10px);}
    50%, 100% {transform: translateY(0);}
    75% {transform: translateY(-10px);}
  }

  .animate-bounce-up{
    background:#ddd;
    width: 100px;
    height: 100px;
    margin:100px auto;
    animation: bounce-up 2s linear infinite;
    cursor: pointer;
  }
</style>
