<template>
  <div>
    <div class="wrapper">
      <div class='text'>
        {{pageText}}
        <span ref='cursor' class='cursorBlink'>|</span>
      </div>
      <div class='arrow' @click='scrollTo'></div>
    </div>
    <div id='content' style='border: 1px solid red;width: 90%;height: 120vh;'></div>
  </div>
</template>

<script>
import utils from '../js/utils.js'
export default {
  data () {
    return {
      text: ['今日事，今日毕。', '人之进学在于思，思则能知是与非。', '床前明月光，疑是地上霜。', '路漫漫其修远兮,吾将上下而求索。'],
      pageText: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.initPageText()
    }, 1500)
    // this.$nextTick(function () {
    //   this.initPageText()
    // })
  },
  methods: {
    initPageText () {
      let random = Math.floor(Math.random() * this.text.length)
      while (this.textRandom === random) {
        random = Math.floor(Math.random() * this.text.length)
      }
      this.textRandom = random
      let text = this.text[random]
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          this.pageText += text[i]
          if (i === text.length - 1) {
            setTimeout(() => {
              this.delPageText()
            }, 2200)
          }
        }, i * 200)
      }
    },
    delPageText () {
      // let i = 0
      for (let i = 0; i < this.pageText.length; i++) {
        setTimeout(() => {
          this.pageText = this.pageText.substring(0, this.pageText.length - 1)
          if (this.pageText.length === 0) {
            setTimeout(() => {
              this.initPageText()
            }, 1500)
          }
        }, i * 70)
      }
    },
    scrollTo () {
      console.log('scrollTo===')
      const STEP = 50
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let targetOffsetTop = document.getElementById('content').offsetTop
      if (targetOffsetTop > scrollTop) {
        utils.smoothScrollDown(STEP, targetOffsetTop)
      } else {
        utils.smoothScrollUp(STEP, targetOffsetTop)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    background-image: url('../assets/index.jpg');
    height: 100vh;
    background-attachment: fixed;
    background-position: center center;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    animation: animate-wraper-down .8s linear;
    @keyframes animate-wraper-down {
      0% {transform: translateY(-8%);opacity: 0;}
      50% {transform: translateY(-3.5%);opacity: 0.5;}
      100% {transform: translateY(0);opacity: 1;}
    }
    .text {
      position: absolute;
      top: 38%;
      max-width: 70%;
      font-size: .5rem;
      color: #fff;
      .cursorBlink {
        animation: animate-blink 1s infinite steps(1);
        @keyframes animate-blink {
          50% {color: transparent;}
        }
      }
    }
    .arrow {
      background-image: ~"url(/static/arrow_down.png)";
      background-repeat: no-repeat;
      background-size: 40% 40%;
      background-position: center center;
      width: 1.5rem;
      height: 1.5rem;
      opacity: .5;
      cursor: pointer;
      position: absolute;
      bottom: 0;
      animation: animate-bounce-up 1.5s linear infinite;
      @keyframes animate-bounce-up {
        25% {transform: translateY(-10%);}
        50% {transform: translateY(-30%);opacity: 1;}
        75% {transform: translateY(-10%);}
        100% {transform: translateY(0);opacity: .5;}
      }
    }
  }
</style>
