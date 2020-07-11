<template>
  <div id="app">
    <div class='menu' :class="{'menu-top': scrollHeight === 0, 'menu-down': scrollMode === 'down', 'menu-up': scrollMode === 'up'}">
      <span style="font-size: 40px;" class="">12d123231233</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      scrollHeight: 0,
      scrollMode: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandle)
  },
  methods: {
    scrollHandle (e) {
      // 获取页面滚动高度
      this.scrollHeight = e.srcElement.scrollingElement.scrollTop
    }
  },
  watch: {
    scrollHeight (newVal, oldVal) {
      if (newVal > oldVal) {
        // 往下滚动...
        this.scrollMode = 'down'
      } else {
        // 往上滚动...
        this.scrollMode = 'up'
      }
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  /*自带的*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*顶部目录*/
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    background-color: #e1e3e8;
    z-index: 999;
    opacity: 0.7;
  }
  .menu-down {
    display: none;
  }
  .menu-up {
    opacity: 0.7;
    animation: animate-menu-up 1s linear;
  }
  @keyframes animate-menu-up {
    0% {transform: translateY(-50px);}
    50% {transform: translateY(-25px);}
    100% {transform: translateY(0px);}
  }
  .menu-top {
    transition: 0.6s;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
