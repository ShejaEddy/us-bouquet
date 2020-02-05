import {encryptUser} from "../components/shared/service/authService";

export default {
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
    },
    PRODUCT_EDIT:(state) => {
        state.pages.productEdit = true
    }
}
