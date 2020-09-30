<template>
  <div class='wrapper'>
    <div ref='catalog' class='catalog-wrapper'>
      <div class='catalog'>
        <div class='content'>
          <div class='title'>目录</div>
          <CatalogItem :data='catalogData' @click='cataLogClickHandle' :activeHId='activeHId'></CatalogItem>
        </div>
      </div>
    </div>
    <div ref='noneCatalog' class='none-catalog-wrapper'></div>
    <div class='content-wrapper'>
      <div class='back-wrapper'>
        <div class='back'></div>
      </div>
      <div class='article-card-wrapper'>
        <div class='article-card'>
          <mavon-editor ref="md" v-model="mdValue"
            style='font-size: .28rem;width: 100%;min-width: 0;z-index: 9;border: 0;'
            :boxShadow='false'
            :toolbarsFlag='false'
            :shortCut='false'
            :subfield='false'
            :ishljs="true"
            codeStyle='monokai-sublime'
            defaultOpen='preview'
            previewBackground='rgb(255, 255, 255)'
            @save='save' />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line
import CatalogItem from './components/CatalogItem'
import { mapState } from 'vuex'
export default {
  components: {
    CatalogItem
  },
  data () {
    return {
      // eslint-disable-next-line
      mdValue: '```<div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br><div class=></div> <br>``` \n 粗体 \n **粗体** \n __粗体__ \n 斜体 \n *斜体* \n _斜体_ \n 标题 \n # 一级标题 \n aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \n ## 二级标题 \n aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \n ### 三级标题 \n aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \n #### 四级标题 \n aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \n ##### 五级标题 \n ###### 六级标题 \n ## 二级标题 \n ### 三级标题 \n ### 三级标题 \n #### 四级标题 \n # 一级标题 \n ## 二级标题 \n 分割线 \n *** \n --- \n 上角下标 \n 上角标 x^2^ \n 下角标 H~2~0 \n 下划线 中划线 \n ++下划线++ \n ~~中划线~~ \n 标记 \n ==标记== \n 段落引用 \n > 一级 \n >> 二级 \n >>> 三级 \n 列表 \n 有序列表 \n 1. \n 2. \n 3. \n - \n - \n ... \n 任务列表 \n  已完成任务 \n  未完成任务 \n - [x] 已完成任务 \n - [ ] 未完成任务 \n 链接 \n [链接](www.baidu.com) \n ![图片描述](static/index.jpg) \n 代码段落 \n ``` type \n 代码段落 \n ``` \n ` 代码块 ` \n int main() \n { \n     printf("hello world!"); \n } \n code \n 表格(table) \n | 标题1 | 标题2 | 标题3 | \n | :--  | :--: | ----: | \n | 左对齐 | 居中 | 右对齐 | \n | ---------------------- | ------------- | ----------------- | \n 标题1	标题2	标题3 \n 左对齐	居中	右对齐 \n ----------------------	-------------	----------------- \n 脚注(footnote) \n hello[^hello] \n 见底部脚注[1] \n 表情(emoji) \n 参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/ \n :laughing: \n :blush: \n :smiley: \n :) \n ...',
      catalogData: [],
      activeHId: '',
      HActualTopList: []// 所有H标签的绝对高度
    }
  },
  computed: {
    ...mapState({
      scrollHeight: state => state.scrollHeight
    })
  },
  mounted () {
    this.$nextTick(function () {
      this.getHLabel()
      // 目录数据渲染完成后渲染目录页面
      this.renderCatalog()
      this.HActualTopList = []
      this.getHTagHeight(this.catalogData)
    })
  },
  methods: {
    getHLabel () {
      let arrObj = document.getElementsByTagName('a')
      let arr = Array.prototype.slice.call(arrObj)
      arr = arr.slice(0, arr.length / 2)
      this.catalogData = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].attributes.id === undefined) {
          continue
        }
        let id = arr[i].attributes.id.value
        let element = arr[i].parentElement.localName
        let text = arr[i].nextSibling.textContent.replace(/\s+/g, '')
        this.renderCatalogData(Number(element.replace('h', '')), id, text, this.catalogData)
      }
    },
    renderCatalogData (layer, id, text, renderData) {
      if (layer === 1) {
        let item = { id, text, children: [] }
        renderData.push(item)
      } else {
        layer -= 1
        this.renderCatalogData(layer, id, text, renderData[renderData.length - 1].children)
      }
    },
    renderCatalog () {
      this.$refs.catalog.style.display = 'block'
      this.$refs.noneCatalog.style.display = 'block'
    },
    // 获取所有H标签的绝对高度
    getHTagHeight (arr) {
      for (let i = 0; i < arr.length; i++) {
        let item = {}
        let id = arr[i].id
        let targetOffsetTop = this.utils.getElementTop(document.getElementById(id))
        item[id] = targetOffsetTop
        this.HActualTopList.push(item)
        this.getHTagHeight(arr[i].children)
      }
    },
    cataLogClickHandle (id) {
      this.activeHId = id
      this.scrollTo(id)
    },
    scrollTo (id) {
      const STEP = 50
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let targetOffsetTop = 0
      for (let i = 0; i < this.HActualTopList.length; i++) {
        let item = this.HActualTopList[i]
        if (Object.keys(item)[0] === id) {
          targetOffsetTop = item[id]
        }
      }
      if (targetOffsetTop > scrollTop) {
        this.utils.smoothScrollDown(STEP, targetOffsetTop)
      } else {
        this.utils.smoothScrollUp(STEP, targetOffsetTop)
      }
    },
    save (value, render) {
      console.log(value)
      console.log(render)
    }
  },
  watch: {
    scrollHeight (val) {
      for (let i = 0; i < this.HActualTopList.length; i++) {
        let item = this.HActualTopList[i]
        let height = Object.values(item)[0]
        // 滚动高度 < 该元素高度
        if (val < height) {
          // 取上一个元素id
          if (i > 0) {
            this.activeHId = Object.keys(this.HActualTopList[i - 1])[0]
          } else {
            this.activeHId = Object.keys(this.HActualTopList[0])[0]
          }
          break
        }
      }
    }
  }
}
</script>
<style lang='less' scoped>
  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    .content-wrapper {
      width: calc(100% - 6.5rem);
      .back-wrapper {
        position: relative;
        .back:before {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.5);
          content: '';
        }
        .back {
          background-image: ~"url(~@/assets/hexo-theme-butterfly-doc-cover.jpg)";
          height: 45vh;
          // background-attachment: fixed;
          background-position: center center;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      .article-card-wrapper {
        width: 100%;
        padding: 1rem .2rem;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        .article-card:hover {
          box-shadow: 0 4px 10px 10px rgba(7,17,27,.2);
        }
        .article-card {
          width: 100%;
          max-width: 18rem;
          box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
          border-radius: 8px;
          padding: .2rem 0;
          transition: all .8s;
          background: rgb(255, 255, 255);
        }
      }
    }
    @media screen and (max-width: 1050px) {
      .content-wrapper {
        width: 100%;
      }
      .catalog-wrapper {
        display: none;
        width: 0;
      }
      .none-catalog-wrapper {
        display: none;
      }
    }
    @media screen and (min-width: 1050px) {
      .catalog-wrapper {
        position: fixed;
        z-index: 9;
        background-color: rgba(239, 239, 239, .9);
        display: none;
        height: 100%;
        width: 6.5rem;
        overflow-x: hidden;
        display: flex;
        justify-content: center;
        animation: animate-catalog-show .6s linear;
        @keyframes animate-catalog-show {
          0% {width: 0}
          100% {width: 6.5rem}
        }
        .catalog {
          padding: 1rem .5rem;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          .content {
            width: 100%;
            height:100%;
            .title {
              width: 100%;
              height: 1rem;
              text-align: center;
              line-height: 1rem;
              font-size: .36rem;
              border-bottom: 1px solid rgb(26, 202, 189);
              margin-bottom: .3rem;
              overflow:hidden; //超出的文本隐藏
              text-overflow:ellipsis; //溢出用省略号显示
              white-space:nowrap; //溢出不换行
            }
          }
        }
      }
      .none-catalog-wrapper {
        display: none;
        width: 6.5rem;
        animation: animate-catalog-none .6s linear;
        @keyframes animate-catalog-none {
          0% {width: 0}
          100% {width: 6.5rem}
        }
      }
    }
  }
</style>
