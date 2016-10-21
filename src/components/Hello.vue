<template>

  <div class="hello">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
//    TableContent
  },
  data () {
    return {
      msg: 'Hello!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #b91513;
}
</style>
