import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import history from '@/components/history'
import templeexplore from '@/components/temple_explore'
import HelloWorld2 from '@/components/HelloWorld2'
import chiayi from '@/components/chiayi'
import mytabs from '@/components/mytabs'
import mychats from '@/components/mychats'
import hamburger from '@/components/hamburger'

Vue.use(Router)
// Router.replace('/index')
export default new Router({
  routes: [
    {
      path: '/',
      // redirect: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/HelloWorld2/:id',
      name: 'HelloWorld2',
      props: true,
      component: HelloWorld2
    },
    {
      path: '/chiayi',
      name: 'chiayi',
      component: chiayi
    },
    {
      path: '/temple_explore',
      name: 'temple_explore',
      component: templeexplore
    },
    {
      path: '/mytabs',
      name: 'mytabs',
      component: mytabs
    },
    {
      path: '/mychats',
      name: 'mychats',
      component: mychats
    },
    {
      path: '/hamburger',
      name: 'hamburger',
      component: hamburger
    }
  ]
})
