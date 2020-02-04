export default {
    auth: state => state.auth,
    cartProducts: state => state.cartProducts,
    orderProducts: state => state.orderProducts,
    getLoggedUser: state => state.loggedUser,
    route: state => state.router.status
}