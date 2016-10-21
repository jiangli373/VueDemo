<template>
  <div>
    <el-tabs type="border-card" @tab-click="handleClick" active-name="1">
      <el-tab-pane label="按文章" name="1">
        <ColumDetail :searchType="searchType"/>
      </el-tab-pane>
      <el-tab-pane label="按时间" name="2">
        <ColumDetail :searchType="searchType"/>
      </el-tab-pane>
    </el-tabs>
    <!--<router-view></router-view>-->
  </div>
</template>
<script>
  import * as types from '../store/mutation-types';
  import ColumDetail from './ColumDetail';
  export default {
    components: {
      ColumDetail
    },
    data(){
      return {
        language : this.$route.params.language,
        columnId : this.$route.params.columnId,
        searchType:1
      }
    },
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab) {
        console.log(tab);
        this.searchType = tab;
//        this.$router.push(`/colunmDetail/${this.language}/${this.columnId}/searchType/${tab}`);
      }
    }
  };
</script>
<style>
  .el-tabs {
    display: inline-block;
    width: 100%;
    margin: 20px 0 0;

  }
  .el-tabs__content{
    min-height: 400px;
  }
</style>
