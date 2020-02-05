<template>
    <div class="left-side-menu">

        <div class="silkscreen-menu">
            <div id="sidebar-menu">

                <ul class="metismenu" id="side-menu">
                    <li >
                        <a style="cursor: pointer">
                            <i class="fe-shopping-cart"></i>
                            <span>Pro Management</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" >
                            <li @click="productEdit()">
                                <a style="cursor: pointer">Product Edit</a>
                            </li>
                            <li>
                                <a>Product Detail</a>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <a style="cursor: pointer">
                            <i class="fe-shopping-cart"></i>
                            <span>Logo Management</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" >
                            <li>
                                <span>Logo Manage</span>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <a style="cursor: pointer">
                            <i class="fe-shopping-cart"></i>
                            <span>Slider Image</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" >
                            <li>
                                <span>Manage Slider Image</span>
                            </li>
                        </ul>
                        <ul class="nav-second-level" >
                            <li>
                                <span>Manage Banner Image</span>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <a style="cursor: pointer">
                            <i class="fe-shopping-cart"></i>
                            <span>Category Management</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" >
                            <li>
                                <span>Category List</span>
                            </li>
                        </ul>
                        <ul class="nav-second-level" >
                            <li>
                                <span>Sub Category List</span>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <a style="cursor: pointer">
                            <i class="fe-shopping-cart"></i>
                            <span>Order Management</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" >
                            <li>
                                <span>Orders</span>
                            </li>
                        </ul>
                        <ul class="nav-second-level" >
                            <li>
                                <span>Sellers</span>
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
            }
        },
        computed:{
        },
        methods:{
            productEdit(){
                this.$store.dispatch("productManagement")
                console.log(this.$store.getters.views)
            }
        }
    }
</script>

<style scoped>
</style>