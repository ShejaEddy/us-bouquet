<template>
    <div class="content-page">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "dashboard-content",
        data(){
          return{
            }
        },
        components: {
        },
        computed: {
            pro() {
                this.$store.getters.views;
            }
        },
        methods: {

        }
    };
</script>

<style scoped>
</style>