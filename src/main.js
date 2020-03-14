import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import NProgress from 'nprogress'
import axios from './config/axios.config'
import bootstrapVue from 'bootstrap-vue'
import './registerServiceWorker'
import '../node_modules/toastr/build/toastr.css'
import 'swiper/dist/css/swiper.css'
import '../node_modules/nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAwesomeSwiper)
Vue.use(bootstrapVue)
Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

let vm = new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
