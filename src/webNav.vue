<template>
    <main class="main">
        <div class="top-nav navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item auth" @click="$router.push('/login')">
                        <i class="fas fa-lock"></i>&nbsp; <span>Login</span> or
                        <i class="fas fa-sign-in-alt"></i>&nbsp; <span>Register</span>
                    </li>
                    <li class="nav-item auth" @click="$router.push('/Me')">
                        <i class="fas fa-user-circle"></i>&nbsp; <span>MyAccount</span>
                    </li>
                    <li class="nav-item auth" @click="loc_logout">
                        <i class="fas fa-sign-in-alt"></i>&nbsp; <span>Logout</span>
                    </li>
                    <li class="nav-item" @click="$router.push('/cart')">
                        <i class="fas fa-cart-plus mt-1 " style="font-size:20px;"></i>&nbsp; <span
                            class="badge badge-primary" style="position: absolute;right: 8px;">{{this.$store.getters.cartProducts.length}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light" id="nav">
            <span class="brand mr-3"></span>
            <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auton nav-top">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/products" class="nav-link">Products</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/ContactUs" class="nav-link">Contact</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0" id="search-bar">
                    <div class="input-group">
                        <input type="search" class="form-control" placeholder="search" aria-label="search"
                               aria-describedby="search-btn">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="search-btn"><i class="fas fa-search"></i></span>
                        </div>
                    </div>
                </form>

            </div>
        </nav>
    </main>

</template>
<script>
    import {mapState, mapActions, mapMutations} from 'vuex'
    import {getLoggedInUser, isLoggedIn} from "./components/shared/service/authService";

    export default {
        data() {
            return {
                cartValue: 0
            }
        },
        computed: mapState(['cartProducts', 'loggedUser']),
        methods: {
            /* Initially loading the cart products from local storage */

            ...mapMutations(['SET_CART_PRODUCTS', 'ADD_LOGGED_USER']),

            getLocalProducts() {
                const products = JSON.parse(localStorage.getItem('iki-cart'))

                if (products) {
                    this.SET_CART_PRODUCTS(products)
                }
            },

            isLogged() {
                return isLoggedIn()
            },

            loc_logout() {
                localStorage.removeItem('_auth')
                this.$router.push('/')
                location.reload()
            }
        },
        created() {
            this.getLocalProducts()

            const loggedUser = getLoggedInUser()

            this.ADD_LOGGED_USER(loggedUser)

            console.log(process.env.NODE_ENV)
            console.log(process.env.VUE_APP_BASE_URL)
        }
    }

</script>
<style lang="scss">
    @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
    @import "./assets/style/webNav.scss";
</style>
