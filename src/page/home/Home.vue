<template>
  <div>
    <Hello class="hello"></Hello>
    <div class="content-wrapper" id="content">
      <div class="content">
        <div class="article-list-wrapper">
          <ArticleBrief></ArticleBrief>
          <ArticleBrief style="margin-top: .5rem"></ArticleBrief>
          <ArticleBrief style="margin-top: .5rem"></ArticleBrief>
        </div>
        <div class="blog-info-wrapper">
          <BlogInfo></BlogInfo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ArticleBrief from './components/ArticleBrief'
import BlogInfo from '@/page/components/BlogInfo'
export default {
  name: 'Home',
  components: {
    Hello,
    ArticleBrief,
    BlogInfo
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .hello {
    animation: animate-wrapper-merge-down .8s ease-out;
  }
  .content-wrapper {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    animation: animate-content-merge-up .8s ease-out;
    .content {
      display: flex;
      justify-content: space-between;
      width: 100vw;
      max-width: 22rem;
      padding: .5rem .2rem;
      .article-list-wrapper {
        width: 72%;
      }
      .blog-info-wrapper {
        width: 25%;
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
