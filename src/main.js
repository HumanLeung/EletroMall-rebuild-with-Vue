// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {eventBus} from './common/eventBus'
import {store} from './common/store/store.js'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 500
    })
  },
  store,
  eventBus,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
