<template>
    <div id="wrapper">
        <navbar/>
        <sidebar/>
        <content-view/>
    </div>
</template>
<script>
    import navbar from './navbar';
    import sidebar from "./sidebar";
    import contentView from "./content";

    export default {
        components: {
            navbar,
            sidebar,
            contentView
        }
    }
</script>
<style>
    .dropdown-toggle::after {
        display: none !important;
    }
</style>