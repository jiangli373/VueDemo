/**
 * Created by li.jiang on 2016/10/13.
 * 同步操作,改变状态
 */

import * as types from './mutation-types'

// mutations
export default {
  [types.GET_DATA_LIST] (state,  dataList ) {
    // console.log('===dataList=====',dataList);
    state.dataList = dataList
  },
  [types.GET_COLUMN_DATA_LIST] (state,  dataList ) {
    // console.log('===dataList=====',dataList);
    state.columnDataList = dataList;
  },
  [types.GET_COLUMN_DETAIL_DATA_LIST] (state,  dataList ) {
    // console.log('===dataList=====',dataList);
    state.columnDetailDataList = dataList;
  },
  [types.CHANGE_TAB_VALUE] (state,  tabValue ) {
    // console.log('===dataList=====',dataList);
    state.searchType = tabValue.value;
  }
}




