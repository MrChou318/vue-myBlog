<template>
  <div>
    <Hello class="hello"></Hello>
    <div class="content-wrapper" id="content">
      <div class="content">
        <div class="article-list-wrapper">
          <ArticleBrief></ArticleBrief>
          <ArticleBrief style="margin-top: .5rem"></ArticleBrief>
        </div>
        <div class="blog-info-wrapper"></div>
      </div>
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
  .content-wrapper {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    animation: animate-content-merge .8s linear;
    @keyframes animate-content-merge {
      0% {transform: translateY(0);opacity: 0;}
      1% {transform: translateY(8%);opacity: 0;}
      50% {transform: translateY(3.5%);opacity: 0.5;}
      100% {transform: translateY(0);opacity: 1;}
    }
    .content {
      display: flex;
      justify-content: space-between;
      width: 100vw;
      max-width: 22rem;
      border: 1px solid red;
      padding: .5rem .2rem;
      .article-list-wrapper {
        width: 72%;
      }
      .blog-info-wrapper {
        width: 25%;
        border: 1px solid black;
      }
      @media screen and (max-width: 900px) {
        .article-list-wrapper {
          width: 100%;
        }
        .blog-info-wrapper {
          display: none;
        }
      }
    }
  }
</style>
