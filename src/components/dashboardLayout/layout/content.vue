<template>
    <div class="content-page">
        <router-view/>
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