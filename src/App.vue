<template>
  <div id="app">
<!--标题栏-->
    <div class="menu" :class="{'menu-top': scrollHeight === 0, 'menu-down': scrollMode === 'down', 'menu-up': scrollMode === 'up'}">
      <div class="menu-left">
        <div class="menu-blog-name">Butterfly</div>
      </div>
      <div class="menu-right">
        <div class="menu-label"><span class='home-icon'>&#xe619;</span>首页</div>
        <div class="menu-label"><span class='home-icon'>&#xe63e;</span>归档</div>
        <div class="menu-label"><span class='home-icon'>&#xe612;</span>标签</div>
        <div class="menu-label"><span class='home-icon'>&#xe610;</span>分类</div>
        <div class="menu-label"><span class='home-icon'>&#xf0064;</span>音乐</div>
        <div class="menu-label"><span class='home-icon'>&#xe69f;</span>留言板</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import './css/main.css'
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
      // 因为页面初始化有个向下滚动的动画，此时oldVal=0，但刷新还是要显示menu顶部菜单栏
      if (newVal > oldVal) {
        // 往下滚动...
        if (oldVal === 0) {
          this.scrollMode = ''
        } else {
          this.scrollMode = 'down'
        }
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
    color: #4c4948;
    .menu-left {
      font-size: .34rem;
      font-weight: bold;
    }
    .menu-right {
      display: flex;
      .menu-label {
        font-size: .3rem;
        font-weight: 600;
        margin-right: .7rem;
        position: relative;
        cursor: pointer;
        &:before {
          content: '';
          display: block;
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 4px;
          background: rgb(128, 200, 248);
          transition: all .3s linear;
        }
        .home-icon {
          font-family: "iconfont" !important;
          font-size: .32rem;
          font-style: normal;
          margin-right: .2rem;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
      .menu-label:hover {
        &:before {
          width: 100%;
          transition: all .3s linear;
        }
      }
    }
  }
  .menu-down {
    opacity: 0.7;
    transform: translateY(-1rem);
    transition: .5s;
  }
  .menu-up {
    opacity: 0.7;
    transform: translateY(0);
    transition: .5s;
  }
  .menu-top {
    background-color: rgba(255, 255, 255, 0);
    transition: 0.6s;
    color: #ffffff;
  }
}
</style>
