<template>
    <div class="left-side-menu">

        <div class="silkscreen-menu">
            <div id="sidebar-menu">

                <ul class="metismenu" id="side-menu">
                    <li>
                        <a style="cursor: pointer" @click="productOpt = true">
                            <i class="fe-shopping-cart"></i>
                            <span >Product Management</span>
                            <span>
                              <i class="menu-arrow" ></i>
                            </span>
                        </a>
                        <ul class="nav-second-level" v-if="productOpt">
                            <li >
                                <router-link :to="{name:'Add product'}" style="cursor: pointer">Product Edit</router-link>
                            </li>
                            <li >
                                <router-link to="#">Product Detail</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a style="cursor: pointer" @click="logoOption = true">
                            <i class="fe-shopping-cart"></i>
                            <span>Logo Management</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <ul class="nav-second-level" v-if="logoOption">
                            <li>
                                <router-link :to="{name:'Logo management'}" style="cursor:pointer;">Logo Manage</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a style="cursor: pointer" @click="sliderOption = true">
                            <i class="fe-shopping-cart"></i>
                            <span>Slider Image</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" v-if="sliderOption">
                            <li>
                                <router-link to="#">Manage Slider Image</router-link>
                            </li>
                            <li>
                                <router-link to="#">Manage Banner Image</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a style="cursor: pointer" @click="categoryOption = true">
                            <i class="fe-shopping-cart"></i>
                            <span>Category Management</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <ul class="nav-second-level" v-if="categoryOption">
                            <li>
                                <router-link to="#">Category List</router-link>
                            </li>
                            <li>
                                <router-link to="#">Sub Category List</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a style="cursor: pointer" @click="orderOption = true">
                            <i class="fe-shopping-cart"></i>
                            <span>Order Management</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <ul class="nav-second-level" v-if="orderOption">
                            <li>
                                <router-link :to="{name:'All orders'}">Orders</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'All sellers'}">Sellers</router-link>
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
            return {
                productOpt:false,
                logoOption:false,
                sliderOption:false,
                categoryOption:false,
                orderOption:false
            }
        },
        computed: {},
        methods: {
            productEdit() {
                this.$store.dispatch("productManagement")
                console.log(this.$store.getters.views)
            }
        }
    };
</script>

<style scoped>
</style>