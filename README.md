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
