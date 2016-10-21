<template>
  <div id="app">
    <NavBar></NavBar>
    <el-row :gutter="10" class="content">
        <el-col :span="4" class="slidebarwrap">
          <div class="grid-content bg-purple">
            <SlideBar></SlideBar>
          </div>
        </el-col>
        <el-col :span="20" :offset="4">
          <div class="grid-content bg-purple">
              <hello></hello>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Hello from './components/Hello'
import NavBar from './components/NavBar'
import SlideBar from './components/SlideBar'
export default {
  components: {
    Hello,
    NavBar,
    SlideBar
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
}

#app {
  color: #2c3e50;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  height: 100%;
}
.navbar{
  height: 60px;
  position: fixed;
  top:0;
  width: 100%;
  z-index: 1000;
}
#app a {
  color: #42b983;
  text-decoration: none;
}
.content{
  position: relative;
  height: 100%;
  margin-top: 60px;
}

.slidebarwrap{
  position: fixed;
  bottom: 0;
  top:60px;
  background-color: #eff2f7;
}
</style>
