// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/rem'
import App from './App'
import Vue from 'vue'
import router from './router'
import {Button,Row,Col,Search,Swipe,SwipeItem,Tab,
  Tabs,Grid,GridItem,Tabbar, TabbarItem,Sticky} from 'vant'

Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem)
.use(Tab).use(Tabs).use(Grid).use(GridItem).use(Tabbar)
.use(TabbarItem).use(Sticky);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
