<template>
  <div id="app">
<!--标题栏-->
    <div class="menu" :class="{'menu-top': scrollHeight === 0, 'menu-down': scrollMode === 'down', 'menu-up': scrollMode === 'up'}"></div>
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
    // window.addEventListener('scroll', this.scrollHandle)
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
  /*背景图*/
  // background-image: url('./assets/backImg.jpg');
  background-color: rgb(247, 246, 242);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  // background-position: center center;
  // background-size: cover;
  // background-repeat: no-repeat;
  .menu {
    width: 100%;
    height: 1rem;
    background-color: #e1e3e8;
    opacity: .7;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  .menu-down {
    opacity: 0.7;
    height: 0;
    transition: 1s;
  }
  .menu-up {
    opacity: 0.7;
    height: 1rem;
    transition: 1s;
  }
  .menu-top {
    opacity: 0;
    transition: 0.6s;
  }
}
</style>
