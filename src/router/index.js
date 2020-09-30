import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/page/home/Home')
const Archive = () => import('@/page/archive/Archive')
const Details = () => import('@/page/details/Details')
const MD = () => import('@/page/md/MD')
// test
const Alphabet = () => import('@/page/test/Alphabet')
const Btn = () => import('@/page/test/Btn')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/md',
      name: 'MD',
      component: MD
    },
    // test
    {
      path: '/alphabet',
      name: 'Alphabet',
      component: Alphabet
    },
    {
      path: '/btn',
      name: 'Btn',
      component: Btn
    }
  ]
})
