import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import toastr from '../components/shared/service/ErrorHandler'
import {
  isLoggedIn
} from '../components/shared/service/authService'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/products/:id',
      name: 'productDetails',
      component: () => import('../components/products/ProductDetail.vue')
    },
    {
      path: '/Me',
      name: 'MyAccount',
      component: () => import('../views/User-Profile.vue')
    },
    {
      path: '/ContactUs',
      name: 'Contact Us',
      component: () => import('../views/contactUs.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/products/cart/CartProducts.vue')
      // beforeEnter: (to, from, next) => {
      //     if (!!store.state.auth.token) {
      //         next()
      //     } else {
      //         next({
      //             name: 'login',
      //             query: {
      //                 from: to.name
      //             }
      //         })
      //     }
      // }
    },
    {
      path: '/payments',
      name: 'payments',
      component: () => import('../components/products/payments/paymentSelector.vue')
      // beforeEnter: (to, from, next) => {
      //     if (!!store.state.auth.token) {
      //         next()
      //     } else {
      //         next({
      //             name: 'login',
      //             query: {
      //                 from: to.name
      //             }
      //         })
      //     }
      // }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../components/products/cart/Checkout.vue')
      // beforeEnter: (to, from, next) => {
      //     if (isLoggedIn()) {
      //         next()
      //     } else {
      //         next({
      //             name: 'login',
      //             query: {
      //                 from: to.name
      //             }
      //         })
      //     }
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path:"/admin",
      component: () => import('../components/dashboardLayout/layout/Dashboard.vue'),
      children:[
        {
          name: "manage product",
          path:"/product-manage",
          components: () =>import('../components/dashboardLayout/pages/product/add-product'),
        },
      ]
    }
  ]
})
