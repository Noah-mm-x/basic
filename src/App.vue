<template>
  <div id="app">
    <App-Header />
    <router-view />
    <App-Footer />
  </div>
</template>
<script>
import AppHeader from '@components/common/AppHeader.vue'
import AppFooter from '@components/common/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss">
#app {
}
</style>
