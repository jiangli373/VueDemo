
<template>
  <div>
    <div class="block" style="margin-top:20px;margin-bottom:20px;float: left ">
      <el-form ref="form"  label-width="80px">
        <el-form-item label="时间区间">
          <el-date-picker
            v-model="timerange"
            type="daterange"
            align="right"
            placeholder="选择日期范围"
            :picker-options="pickerOptions2"
            style="width: 220px"
            >
          </el-date-picker>
          <el-button type="primary" icon="search" @click.native.prevent="search" :loading="loading">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-alert :title="errorText" type="error" v-show="showError"></el-alert>
    <el-table
      :data="tableData3"
      height=""
      border
      style="width: 100%">

      <el-table-column
        property="title"
        label="文章标题"
        width="180">
      </el-table-column>
      <el-table-column
        property="publish_date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        property="target_user"
        label="送达人数">
      </el-table-column>
      <el-table-column
        property="int_page_read_user"
        label="图文阅读人数">
      </el-table-column>
      <el-table-column
        property="share_user"
        label="分享人数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as types from '../store/mutation-types';
  export default {
    data() {
      return {
        tableData3: [],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        timerange: '',
        loading:false,
        showError:false,
        errorText:''
      }
    },
    beforeMount () {

    },
    methods: {
      search(){
        console.log('timerange========',this.timerange);
        this.loading = true;
        this.$store.dispatch(types.GET_DATA_LIST,
          {
            startDate:this.timerange[0],
            endDate:this.timerange[1]
          }
        ).then(() => {
          console.log('===this.$store.state.dataList=====',this.$store.state.dataList);
          this.tableData3 = this.$store.state.dataList;
          this.loading = false;
          this.showError = true;
          this.errorText = 'error';
        }).catch( err => {
          this.loading = false;
          this.showError = true;
          this.errorText = err;
        });
      }
    }
  }
</script>
