<template>
  <div>
    <div class='back-wrapper'>
      <div class='back-text'>归档</div>
    </div>
    <div class="content-wrapper" id="content">
      <div class="content">
        <div class="timeline-wrapper">
          <TimeLine></TimeLine>
        </div>
        <div class="blog-info-wrapper">
          <BlogInfo></BlogInfo>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogInfo from '@/page/components/BlogInfo'
import TimeLine from './components/TimeLine'
export default {
  name: 'Archive',
  components: {
    BlogInfo,
    TimeLine
  }
}
</script>
<style lang='less' scoped>
  .back-wrapper {
    background-image: ~"url(~@/assets/archive.jpg)";
    height: 40vh;
    background-attachment: fixed;
    background-position: center center;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    animation: animate-wrapper-merge-down .8s ease-out;
    position: relative;
    display: flex;
    justify-content: center;
    .back-text {
      position: absolute;
      top: 50%;
      font-size: .8rem;
      color: #fff;
      font-weight: 600;
      animation: animate-text-show .8s ease-out;
    }
    @keyframes animate-text-show {
      0% {font-size: .7rem;}
      100% {font-size: .8rem;}
    }
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
      .timeline-wrapper {
        width: 72%;
      }
      .blog-info-wrapper {
        width: 25%;
      }
      @media screen and (max-width: 900px) {
        .timeline-wrapper {
          width: 100%;
        }
        .blog-info-wrapper {
          display: none;
        }
      }
    }
  }
</style>
