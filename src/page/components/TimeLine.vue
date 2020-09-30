<template>
  <div class='wrapper'>
    <div class='timeline-wrapper'>
      <div class='items'>
        <div v-for='(item, index) in articles'
            :key='index'
            :style="{animationDelay: index * 200 + 800 + 'ms'}"
            class='item-wrapper delay'
            :class="item.key === 'year' ? 'topLeft' : 'topIn'" >
          <div v-if="item.key === 'year'">
            <div class="bigBall"></div>
            <div class='item-year'>{{item.value}}</div>
          </div>
          <div v-else>
            <div class="smallBall"></div>
            <div class='item'>
              <div class='img-wrapper'>
                <img src='static/index.jpg' />
              </div>
              <div class='item-info'>
                <div class='info-date'>2020-05-28</div>
                <div class='info-title'>Butterfly 安裝文档（七）更新日志更新日志</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination></Pagination>
  </div>
</template>
<script>
import Pagination from '@/page/components/Pagination'
export default {
  name: 'TimeLine',
  components: {
    Pagination
  },
  data () {
    return {
      articles: [
        {key: 'year', value: '2020'},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'year', value: '2019'},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}},
        {key: 'article', value: {aa: 'aa', bb: 'bb'}}
      ]
    }
  },
  computed: {
    delayStyle () {
      return function (index) {
        return 'delay' + index * 200
      }
    }
  }
}
</script>
<style lang='less' scoped>
  .wrapper:hover {
    box-shadow: 0 4px 10px 10px rgba(7,17,27,.2);
  }
  .wrapper {
    transition: all .8s;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
    border-radius: 8px;
    padding: .5rem .5rem .5rem 1.2rem;
    box-sizing: border-box;
    .timeline-wrapper {
      width: 100%;
      height: 100%;
      .items::before {
        content: ' ';
        height: calc(100% - .5rem);
        width: 2px;
        background-color: rgb(170, 218, 250);
        position: absolute;
        top: .5rem;
        left: -.6rem;
      }
      @keyframes delayShow {
        from { display: none; }
        to { display: none; }
      }
      .items {
        position: relative;
        width: 100%;
        @keyframes topIn {
          from { transform: translateY(-.4rem); opacity: 0;}
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes topLeft {
          from { transform: translateX(-.2rem); opacity: 0;}
          to { transform: translateX(0); opacity: 1; }
        }
        .topIn {
          animation-name: topIn;
          animation-duration: .6s;
        }
        .topLeft {
          animation-name: topLeft;
          animation-duration: .6s;
        }
        .item-wrapper:hover .smallBall {
          border: .08rem solid rgb(255, 114, 66);
        }
        .item-wrapper {
          width: 100%;
          position: relative;
          margin-bottom: .5rem;
          .bigBall {
            position: absolute;
            top: 30%;
            left: -.8rem;
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            background: #fff;
            border: .1rem solid rgb(255, 114, 66);
            box-sizing: border-box;
          }
          .smallBall {
            position: absolute;
            top: 40%;
            left: -.75rem;
            width: .3rem;
            height: .3rem;
            border-radius: 50%;
            background: #fff;
            border: .08rem solid rgb(73, 177, 245);
            box-sizing: border-box;
          }
          .item-year {
            width: 100%;
            height: 1rem;
            display: flex;
            align-items: center;
            font-size: .34rem;
            font-weight: 600;
          }
          .item {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            .img-wrapper {
              width: 80px;
              height: 80px;
              overflow: hidden;
              img:hover {
                transform: scale(1.2);
                cursor: pointer;
              }
              img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                transition: all .8s;
              }
            }
            .item-info {
              width: calc(100% - 80px);
              min-height: 100%;
              display: flex;
              flex-wrap: wrap;
              align-content: space-around;
              padding-left: .3rem;
              box-sizing: border-box;
              .info-date {
                width: 100%;
                color: #858585;
                font-size: .28rem;
              }
              .info-title:hover {
                cursor: pointer;
                color: rgb(73, 177, 245);
                transform: translateX(.2rem)
              }
              .info-title {
                width: 100%;
                font-size: .3rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                transition: all .2s linear;
              }
            }
          }
        }
      }
    }
  }
</style>
