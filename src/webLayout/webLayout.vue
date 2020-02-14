<template>
    <div>
        <web-nav></web-nav>
        <router-view></router-view>
        <web-footer></web-footer>
    </div>
</template>

<script>
import webNav from './webNav'
import webFooter from './webFooter'

export default {
  name: 'webLayout',
  components: {
    webFooter,
    webNav
  }
}
</script>

<style lang="scss">

</style>
