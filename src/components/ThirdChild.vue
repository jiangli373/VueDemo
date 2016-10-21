<template>
  <div class="hello">
    <h2>{{message}}</h2>
    <button v-on:click="addChild">{{count}}</button>
  </div>
</template>

<script>

  export default {
    props:['message'],
    components: {
    },
    data () {
      return {
        count: 0
      }
    },
    methods:{
      addChild(){
        this.count++;
        this.$emit('addChild');
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
