<template>
  <div class="brief">
    <div class="img-wrapper">
      <img src="static/index.jpg">
    </div>
    <div class="ar-brief">
      <div class="brief-title">Butterfly安装文档（一）快速开始</div>
      <div class="brief-info"><span class="iconfont">&#xe60a;</span>2020-05-28 | <span class="iconfont">&#xe61e;</span>2020-06-25 | <span class="iconfont">&#xe610;</span>分类 | <span class="iconfont">&#xe612;</span>教程·Hexo·主题·butterfly</div>
      <div class="brief-content">在Butterfly-安裝文檔-三-主題配置中已經介紹了如何使用自定義代碼配色。 這篇文章是使用自定義代碼配色的實例教程。 以使用Kimbie dark主題配色為。在Butterfly-安裝文檔-三-主題配置中已經介紹了如何使用自定義代碼配色。 這篇文章是使用自定義代碼配色的實例教程。 以使用Kimbie dark主題配色為。以使用Kimbie dark主題配色為。在Butterfly-安裝文檔-三-主題配置中已經介紹了如何使用自定義代碼配色。 這篇文章是使用自定義代碼配色的實例教程。 以使用Kimbie dark主題配色為。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleBrief'
}
</script>

<style lang="less" scoped>
  .brief:hover {
    box-shadow: 0 4px 10px 10px rgba(7,17,27,.2);
    img {
      transform: scale(1.2);
    }
  }
  .brief {
    transition: all .8s;
    background-color: #fff;
    display: flex;
    align-items: center;
    width: 100%;
    height: 6rem;
    box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
    border-radius: 8px;
    .img-wrapper {
      width: 45%;
      height: 100%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        object-fit: cover;
        transition: all .8s;
      }
    }
    .ar-brief {
      // width: 50%;
      flex: 1;
      // height: 65%;
      padding: 0 .8rem;
      color: #4c4948;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: center;
      .brief-title {
        font-size: .45rem;
        font-weight: 600;
        cursor: pointer;
      }
      .brief-title:hover {
        color: #49b1f5;
      }
      .brief-info {
        color: #858585;
        font-size: .24rem;
        margin: .2rem 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        .iconfont {
          font-family: "iconfont",serif !important;
          margin-right: .06rem;
        }
      }
      .brief-content {
        width: 100%;
        line-height: .5rem;
        font-size: .27rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .brief {
      display: block;
      background-color: #fff;
      width: 100%;
      height: auto;
      box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
      border-radius: 8px;
      .img-wrapper {
        width: 100%;
        height: 4.4rem;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 0;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          border-bottom-left-radius: 0;
          object-fit: cover;
          transition: all .8s;
        }
      }
      .ar-brief {
        width: 100%;
        padding: .2rem .4rem;
        box-sizing: border-box;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        color: #4c4948;
        display: block;
        .brief-title {
          font-size: .45rem;
          font-weight: 600;
          cursor: pointer;
        }
        .brief-title:hover {
          color: #49b1f5;
        }
        .brief-info {
          color: #858585;
          font-size: .24rem;
          margin: .2rem 0;
          font-family: "iconfont",serif !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-weight: 400;
          .iconfont {
            font-family: "iconfont",serif !important;
          }
        }
        .brief-content {
          width: 100%;
          line-height: 1.8;
          font-size: .27rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }
</style>
