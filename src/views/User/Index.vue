<template>
  <div id="user">
    <div class="container">
      <side></side>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Side from './Side'

export default {
  components: {
    Side
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
// @import '@css/var.scss';
.container {
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  min-height: 765px;
}
</style>
