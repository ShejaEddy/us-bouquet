<template>
    <div id="wrapper">
        <navbar/>
        <sidebar/>
        <content-view/>
    </div>
</template>
<script>
import navbar from './navbar.vue'
import sidebar from './sidebar.vue'
import contentView from './content.vue'
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
