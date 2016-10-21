/**
 * Created by li.jiang on 2016/10/13.
 * 异步操作,调用,mutations
 */
import Api from '../api/api'
import * as types from './mutation-types'

export default {
  [types.GET_DATA_LIST] ({ commit },payload){

    return new Promise((resolve, reject) => {
      Api.getDatalist(payload,(err, data) => {

        if (err) return reject(err);
        commit(types.GET_DATA_LIST, data.data)
        resolve();
      })
    })
  },
  //获取column数据
  [types.GET_COLUMN_DATA_LIST] ({ commit },payload){

    return new Promise((resolve, reject) => {
      Api.getColumnDatalist(payload,(err, data) => {

        if (err) return reject(err);
        if(data.code!==0){
          reject(data.msg);
        }
        commit(types.GET_COLUMN_DATA_LIST, data.result)
        resolve();
      })
    })
  },
  //获取column详细数据
  [types.GET_COLUMN_DETAIL_DATA_LIST] ({ commit },payload){

    return new Promise((resolve, reject) => {
      Api.getColumnDetailDatalist(payload,(err, data) => {

        if (err) return reject(err);
        if(data.code!==0){
          reject(data.msg);
        }
        commit(types.GET_COLUMN_DETAIL_DATA_LIST, data.result)
        resolve();
      })
    })
  },
}
