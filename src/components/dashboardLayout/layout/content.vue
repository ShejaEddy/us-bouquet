<template>
    <div class="content-page">
        <transition name="fade" mode="out-in">
            <router-view>
            </router-view>
        </transition>
    </div>
</template>

<script>
    import getters from "../../../store/getters";

    export default {
        name: "content"
    }
    computed:{

    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>