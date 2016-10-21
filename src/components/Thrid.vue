<template>
  <div class="hello">
    <h2>Third test</h2>
    <input v-model="parentMsg">
    <br>

    <p>总数:{{count}}</p>
    <h3>Demo1</h3>
    <ThirdChild :message="parentMsg" v-on:addChild="addTotal"></ThirdChild>
    <br>

    <h3>Demo2</h3>
    <ThirdChild :message="parentMsg" v-on:addChild="addTotal"></ThirdChild>

    <br>

    <button v-on:click="show = !show">
      Toggle
    </button>

    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>

  </div>
</template>

<script>
  import ThirdChild from './ThirdChild';
  export default {
    components: {
      ThirdChild
    },
    data () {
      return {
        count:0,
        parentMsg: 1,
        show:true
      }
    },
    methods:{
      addTotal(){
        this.count++;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #b91513;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    padding-left: 10px;
    opacity: 0;
  }
</style>
