// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
import 'lib-flexible/flexible.js'
import utils from './js/utils'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from '@/store/index.js'
import { Select, Option, Input } from 'element-ui'

Vue.use(less)
Vue.use(mavonEditor)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.config.productionTip = false
Vue.prototype.utils = utils

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
