<template>
  <div>
    <Hello class="hello"></Hello>
    <div class="content" id="content">
      <div class="article-list-wrapper">
        <ArticleBrief></ArticleBrief>
      </div>
      <div class="blog-info-wrapper"></div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ArticleBrief from './components/ArticleBrief'
export default {
  name: 'Home',
  components: {
    Hello,
    ArticleBrief
  }
}
</script>

<style lang="less" scoped>
  .hello {
    animation: animate-wrapper-merge .8s linear;
    @keyframes animate-wrapper-merge {
      // 之所以是1%不是0%是因为防止每刷新页面一次，页面就往下滚动一点；添加0%是防止双闪
      0% {transform: translateY(0);opacity: 0;}
      1% {transform: translateY(-8%);opacity: 0;}
      50% {transform: translateY(-3.5%);opacity: 0.5;}
      100% {transform: translateY(0);opacity: 1;}
    }
  }
  .content {
    padding: 3% 12%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    animation: animate-content-merge .8s linear;
    @keyframes animate-content-merge {
      0% {transform: translateY(0);opacity: 0;}
      1% {transform: translateY(8%);opacity: 0;}
      50% {transform: translateY(3.5%);opacity: 0.5;}
      100% {transform: translateY(0);opacity: 1;}
    }
    .article-list-wrapper {
      border: 1px solid red;
      width: 73%;
    }
    .blog-info-wrapper {
      flex: 1;
      border: 1px solid black;
    }
  }
</style>
