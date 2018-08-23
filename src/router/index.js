import Vue from 'vue'
import VueRouter1 from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wangdexing from "../components/wangdexing.vue"
import chenyujie from "../components/chenyujie.vue"
import user from "../components/user.vue"
import useradd from "../components/user/useradd.vue"
import userdelete from "../components/user/userdelete.vue"

Vue.use(VueRouter1)

export default new VueRouter1({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '*', component: wangdexing },
    { path: '/chenyujie', component: chenyujie },
    { path: '/user', component:user,
      children:[
        {path:'/user/useradd', component:useradd},
        {path:'/user/userdelete', component:userdelete}
      ]
    }
  ]
})
