<template>
    <div id="app" class="">
<!--       <web-nav ></web-nav>-->
        <router-view />
<!--      <web-footer ></web-footer>-->
    </div>
</template>
<script>
    import {mapState, mapActions, mapMutations} from 'vuex'
    import {
        isLoggedIn,
        getLoggedInUser
    } from './components/shared/service/authService'
    import webNav from "./webNav.vue"
    import webFooter from './webFooter.vue'
    export default {
        components:{
            webNav,
            webFooter
        }
    }
</script>
<style lang="scss">
    @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
