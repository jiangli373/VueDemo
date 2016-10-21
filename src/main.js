import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import TableContent from './components/TableContent';
import ColumDetail from './components/ColumDetail';
import ColumDetailTab from './components/ColumDetailTab';
import LiveContent from './components/LiveContent';
import Thrid from './components/Thrid'
import store from './store';



Vue.use(VueRouter)
Vue.use(Element)


const routes = [

  {
    path: '/colunm/:language',
    name: 'Colunm',
    component: TableContent
  },
  {
    path: '/colunmDetail/:language/:columnId',
    name: 'ColunmDetail',
    component: ColumDetailTab
  },
  {
    path: '/live',
    name:'Live',
    component: LiveContent
  },
  {
    path:'/third',
    name:'Third',
    component:Thrid
  }
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
