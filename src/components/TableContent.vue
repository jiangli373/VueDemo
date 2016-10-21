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
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
    <el-table
      :data="tableData3"
      height=""
      border
      style="width: 100%">
      <el-table-column
        property="columnId"
        label="栏目"
        width="180">
      </el-table-column>
      <el-table-column
        property="dateString"
        label="统计时间"
        width="180">
      </el-table-column>
      <el-table-column
        sortable
        property="readCount"
        label="阅读量"
        width="180">
      </el-table-column>
      <el-table-column
        sortable
        property="collectCount"
        label="收藏量">
      </el-table-column>
      <el-table-column
        sortable
        property="shareCount"
        label="转发量">
      </el-table-column>
      <el-table-column
        sortable
        property="subscribeCount"
        label="订阅量">
      </el-table-column>
      <el-table-column
        sortable
        property="fagaoCount"
        label="发稿量">
      </el-table-column>
      <el-table-column
        inline-template
        label="查看">
        <el-button type="primary" @click.native.prevent="toDetail" v-bind:columnId="row.columnId">查看</el-button>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>

  </div>

</template>

<script>
  import * as types from '../store/mutation-types';
  export default {
    data() {
      return {
        tableData3: [],
        language:this.$route.params.language,
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
    methods: {
      toDetail(event){
        console.log('ddddddddd----',event.target.getAttribute('columnId'));
        let columnId = event.target.getAttribute('columnId');
        this.$router.push(`/colunmDetail/${this.language}/${columnId}`);
      },
      formatter(row, column) {
      },
      search(){
        this.loading = true;
        let language = this.$route.params.language;
        this.$store.dispatch(types.GET_COLUMN_DATA_LIST,
          {
            language:language,
            appID:'chinaApp',
            columnId:[],
            startDate:new Date(this.timerange[0]).getTime(),
            endDate:new Date(this.timerange[1]).getTime()
          }
        ).then(() => {
          console.log('===this.$store.state.dataList=====',this.$store.state.columnDataList);
          this.tableData3 = this.$store.state.columnDataList;
          this.loading = false;
          this.showError = false;
        }).catch( err => {
          this.loading = false;
          this.showError = true;
          this.errorText = err;
        });
      }
    }
  }
</script>
<style>
  .pagination{
    margin-top: 20px;
    float: right;
  }
</style>
