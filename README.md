# vue-myBlog
我的博客前端工程  

## 0. 响应式布局
```
npm i lib-flexible --save
import 'lib-flexible/flexible.js'
```
## 1. vue监听页面上下滚动、vue监听页面滚动到顶部
```
data () {
    return {
      scrollHeight: 0
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
      if (newVal > oldVal) {
        // 往下滚动...
        this.scrollMode = 'down'
      } else {
        // 往上滚动...
        this.scrollMode = 'up'
      }
    }
  }
```
## 3. 头部菜单栏显示隐藏动画效果、往上滚动头部下拉显示效果、菜单栏固定在头部
```
<div class='menu' :class="{'menu-top': scrollHeight === 0, 'menu-down': scrollMode === 'down', 'menu-up': scrollMode === 'up'}"></div>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  background-color: #e1e3e8;
  z-index: 999;
  opacity: 0.7;
}
.menu-down {
  opacity: 0.7;
  height: 0;
  transition: 1s;
}
.menu-up {
  opacity: 0.7;
  height: 100px;
  transition: 1s;
}
.menu-top {
  opacity: 0;
  transition: 0.6s;
}
```
## 5. 尺寸问题，响应式布局
## 6. 跳转按钮颜色随时间渐变
```
@keyframes bounce-up {
  25% {transform: translateY(-4px);}
  50% {transform: translateY(-10px);opacity: 1;}
  75% {transform: translateY(-4px);;}
  100% {transform: translateY(0px);opacity: .5;}
}

.animate-bounce-up{
  background-image: ~"url(/static/index.jpg)";
  width: 100px;
  height: 100px;
  animation: bounce-up 2s linear infinite;
  opacity: .5;
  cursor: pointer;
  position: fixed;
  left: calc(50% - 50px);
  bottom: 0;
}
```
## 7. 下划线效果
```
.active:hover {
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 4px;
    background: red;
    animation: animate-active-hover .3s linear;
  }
  @keyframes animate-active-hover {
    0% {width: 0;}
  }
}
```
## 8. 鼠标悬浮图标向四周变大
```
.img-test:hover {
  transform: scale(1.1);
  transition: .5s;
}
```
## 9. element 卡片效果 如果直接使用elment 组件是否还会响应式
算了，还是自己实现吧，又不复杂
```
.box {
  width: 400px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
  box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
}
.box:hover {
  box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
  transition: .3s;
}
```
## 10. 文章详情上下合拢动画效果

## 11. 文章详情目录
https://juejin.im/post/5d785ecef265da03e369ac26
## 12. 文章详情代码收起隐藏，代码复制

## 13. 音乐播放

## 14. 首页文字打印效果
```
<div style='font-size: 26px;'>
  {{pageText}}
  <span ref='cursor' class='cursorBlink'>|</span>
</div>
mounted () {
  this.$nextTick(function () {
    this.initPageText()
  })
},
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
.cursorBlink {
  animation: animate-blink 1s infinite steps(1);
}
@keyframes animate-blink {
  50% {color: transparent;}
}
```

## 15. px换成rem

## 16. 图片懒加载

## 17. 平滑滚动
```
scrollTo () {
  const STEP = 50
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  let targetOffsetTop = document.getElementById('production').offsetTop
  if (targetOffsetTop > scrollTop) {
    this.smoothScrollDown(STEP, targetOffsetTop)
  } else {
    this.smoothScrollUp(STEP, targetOffsetTop)
  }
},
// 向下平滑滚动
smoothScrollDown (STEP, targetOffsetTop) {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (targetOffsetTop - scrollTop >= STEP) {
    scrollTop += STEP
  } else {
    scrollTop = targetOffsetTop
  }
  document.body.scrollTop = scrollTop
  document.documentElement.scrollTop = scrollTop
  if (targetOffsetTop > scrollTop) {
    requestAnimationFrame(() => { this.smoothScrollDown(STEP, targetOffsetTop) })
  }
},
// 向上平滑滚动
smoothScrollUp (STEP, targetOffsetTop) {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > targetOffsetTop) {
    if (scrollTop - targetOffsetTop >= STEP) {
      scrollTop -= STEP
    } else {
      scrollTop = targetOffsetTop
    }
    document.body.scrollTop = scrollTop
    document.documentElement.scrollTop = scrollTop
    if (scrollTop > targetOffsetTop) {
      requestAnimationFrame(() => { this.smoothScrollUp(STEP, targetOffsetTop) })
    }
  }
},
```
## 监听销毁
```
beforeDestroy(){
  window.removeEventListener("scroll", this.handleScroll);
}
```
## 页面优化
https://blog.csdn.net/weixin_42604828/article/details/93324751?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase
## 其他
https://blog.csdn.net/weixin_42406046

https://blog.csdn.net/hsany330/article/details/17024277?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase
