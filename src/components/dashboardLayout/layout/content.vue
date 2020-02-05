<template>
    <div class="content-page">
    </div>
</template>

<script>
    // import store from "vuex"
    import productManagement from "../pages/product/add-product";
    import orders from "../pages/orderManagement/order";
    export default {
        name: "content",
        data(){
          return{
            }
        },
        components: {
            productManagement,
            orders
        },
        computed: {},

        methods: {
            pro() {
                this.$store.getters.views;
            }
        }
    }
</script>

<style scoped>
</style>