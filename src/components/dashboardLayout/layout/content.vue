<template>
    <div class="content-page">
        <router-link></router-link>
    </div>
</template>

<script>
    export default {
        name: "content",
        data(){
          return{
            }
        },
        components: {

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