<template>
    <div class="left-side-menu">

        <div class="slimscroll-menu">
            <div id="sidebar-menu">

                <ul class="metismenu" id="side-menu">

                    <li >
                        <a v-click="expand=true" style="cursor: pointer">
                            <i class="fe-shopping-cart"></i>
                            <span> eCommerce </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" v-show="expand">
                            <li>
                                <router-link to="/product-manage">Product Edit</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "sidebar",
        data() {
            return{
                expand:false
            }
        }
    }
</script>

<style scoped>
</style>