/**
 * Created by li.jiang on 2016/10/13.
 */

const URL = 'http://backup.hangdali.com/getDataList';
const CHINAURL = 'http://ch.dev.selcome.com/stats/web/'

export default {
  getDatalist (searchObj,cb) {

    let body = `startDate=${searchObj.startDate}&endDate=${searchObj.endDate}&keywords=`;
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    }).then(function(res) {
      return res.json()

    }).then(function (json) {
      return cb(null,json);
    }).catch(function (err) {
      return cb(err);
    })
  },
  getColumnDatalist (searchObj,cb) {

    let cooo = JSON.stringify(["39","3"]);
    let body = `columnId=[]&startDate=${searchObj.startDate}&endDate=${searchObj.endDate}&appID=${searchObj.appID}&language=${searchObj.language}`;
    let params = {
      columnId:cooo,
      startDate:searchObj.startDate,
      endDate:searchObj.endDate,
      appID:searchObj.appID,
      language:searchObj.language
    };
    fetch(CHINAURL+'columnStats', {
      method: "POST",
      headers: {
        // "Content-Type": "application/json"
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    }).then(function(res) {
      return res.json()

    }).then(function (json) {
      return cb(null,json);
    }).catch(function (err) {
      return cb(err);
    })
  },
  getColumnDetailDatalist (searchObj,cb) {

    let body = `columnId=${searchObj.columnId}&startDate=${searchObj.startDate}&endDate=${searchObj.endDate}&appID=${searchObj.appID}&language=${searchObj.language}&searchType=${searchObj.searchType}`;

    fetch(CHINAURL+'articleStats', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    }).then(function(res) {
      return res.json()

    }).then(function (json) {
      return cb(null,json);
    }).catch(function (err) {
      return cb(err);
    })
  }
}
