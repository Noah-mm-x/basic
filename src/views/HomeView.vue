<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  async mounted () {
    console.log(11, this.$post)
    const params = {
      a: 1
    }
    const data = await this.$post('baid', params)
    console.log(data)
  }
}
</script>
