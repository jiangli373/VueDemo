<template>

  <div class="slidebar">
    <el-menu  default-active="colunmzh" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" :router="true">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>栏目统计</template>
          <el-menu-item index="colunmzh" :route="{ name: 'Colunm', params: { language: 'zh' }}">中文</el-menu-item>
          <el-menu-item index="colunmen" :route="{ name: 'Colunm', params: { language: 'en' }}">英文</el-menu-item>
          <el-menu-item index="colunmar" :route="{ name: 'Colunm', params: { language: 'ar' }}">阿拉伯文</el-menu-item>
          <el-menu-item index="colunmsp" :route="{ name: 'Colunm', params: { language: 'sp' }}">西班牙文</el-menu-item>
          <el-menu-item index="colunmko" :route="{ name: 'Colunm', params: { language: 'ko' }}">韩文</el-menu-item>
          <el-menu-item index="colunmja" :route="{ name: 'Colunm', params: { language: 'ja' }}">日文</el-menu-item>
          <el-menu-item index="colunmfr" :route="{ name: 'Colunm', params: { language: 'fr' }}">法文</el-menu-item>
          <el-menu-item index="colunmge" :route="{ name: 'Colunm', params: { language: 'ge' }}">德文</el-menu-item>
          <el-menu-item index="colunmru" :route="{ name: 'Colunm', params: { language: 'ru' }}">俄文</el-menu-item>
      </el-submenu>
      <el-menu-item index="live" :route="{ name: 'Live'}"><i class="el-icon-menu"></i>live</el-menu-item>
      <el-menu-item index="third" :route="{ name: 'Third'}"><i class="el-icon-setting"></i>Third</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello!',
      }
    },
    methods: {
      handleopen: function (event) {
        // `this` inside methods points to the Vue instance
      },
      handleclose: function (event) {
        // `this` inside methods points to the Vue instance
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slidebar {

  }
</style>
