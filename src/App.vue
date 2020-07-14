<template>
  <div id="app">
<!--    标题栏-->
    <div class="title-bar"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  watch: {
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
  /*背景图*/
  background-image: url('./assets/backImg.jpg');
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  .title-bar {
    width: 100%;
    height: 1rem;
    background-color: #e1e3e8;
    opacity: .7;
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
