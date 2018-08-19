import Vue from 'vue'
import VueRouter1 from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wangdexing from "../components/wangdexing.vue"
import chenyujie from "../components/chenyujie.vue"

Vue.use(VueRouter1)

export default new VueRouter1({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/wangdexing', component: wangdexing },
    { path: '/chenyujie', component: chenyujie },
    { path: '/hello', component: HelloWorld }
  ]
})
