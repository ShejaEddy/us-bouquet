import Vue from 'vue'
import Vuex from 'vuex'
import {
    encryptUser
} from './components/shared/service/authService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth:{
            token: null,
            user: {}
        },
        cartProducts: [],
        orderProducts: [],
        loggedUser: {}
    },
    getters: {
        auth: state => state.auth,
        cartProducts: state => state.cartProducts,
        orderProducts: state => state.orderProducts,
        getLoggedUser: state => state.loggedUser
    },
    mutations: {
        ADD_CART_LOCAL: (state, product) => {
            state.cartProducts.push(product)
            localStorage.setItem('iki-cart', JSON.stringify(state.cartProducts))
        },
        ADD_ORDER_LOCAL: (state, product) => {
            state.orderProducts.push(product)
            localStorage.setItem('iki-order', JSON.stringify(state.orderProducts))
        },

        ADD_LOGGED_USER: (state, user) => {
            state.loggedUser = user
            localStorage.setItem('_auth', encryptUser(user))
        },

        SET_CART_PRODUCTS: (state, products) => {
            state.cartProducts = []
            state.cartProducts = products
        },
        SET_ORDER_PRODUCTS: (state, products) => {
            state.orderProducts = []
            state.orderProducts = products
        }
    },
    actions: {

    }
})