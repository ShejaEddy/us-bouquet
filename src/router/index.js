import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import toastr from '../components/shared/service/ErrorHandler'
import adminDashboard from '@/components/dashboardLayout/layout/Dashboard.vue'
import webLayout from '../webLayout/webLayout'
import {
  isLoggedIn
} from '../components/shared/service/authService'

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'web layout view',
      redirect: '/',
      component: webLayout,
      children: [
        {
          path: '/',
          name: 'Home',
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
        }

      ]
    },
    {
      path: '/admin',
      component: adminDashboard,
      children: [
        {
          name: 'Add product',
          path: 'add-product',
          component: () => import('../components/dashboardLayout/pages/product/create-product.vue')
        },
        {
          path: 'orders',
          name: 'All orders',
          component: () => import('../components/dashboardLayout/pages/orderManagement/order.vue')
        },
        {
          path: 'seller',
          name: 'All sellers',
          component: () => import('../components/dashboardLayout/pages/orderManagement/seller.vue')
        },
        {
          path: 'logo',
          name: 'Logo management',
          component: () => import('../components/dashboardLayout/pages/logoManagement/logo-manage.vue')
        },
        {
          name: 'Image slides',
          path: 'slides',
          component: () => import('../components/dashboardLayout/pages/sliderImage/slider-image-manage.vue')
        },
        {
          name: 'slider image management',
          path: 'slider-image',
          component: () => import('../components/dashboardLayout/pages/sliderImage/slider-image-manage')
        },
        {
          name: 'category list management',
          path: 'category-list',
          component: () => import('../components/dashboardLayout/pages/categoryManagement/category-list')
        },
        {
          name: 'sub category management',
          path: 'sub-category-list',
          component: () => import('../components/dashboardLayout/pages/categoryManagement/sub-category-list')
        },
        {
          name: 'product-list-management',
          path: 'product-list',
          component: () => import('../components/dashboardLayout/pages/product/product-list')
        },
        {
          name:"admin profile",
          path:"profile",
          component: () => import('../components/dashboardLayout/pages/profile')
        }
      ]
    },
    {
      path: '*',
      name: '404-page',
      component: () => import('../404-page')
    }
  ]
})
