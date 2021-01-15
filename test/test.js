/**
 * Created by wqw on 2018/1/25.
 */
// var str = 'notifyWarn("\u65B0\u589E\u78C1\u76D8\u5B8C\u62101111");';
//
// console.log(str.match(/\S*\(/)[0].replace('(',''));
var t = '/terminal/ota/otaServerManage.jsf?flag=3';
var url = t.replace(/^(\/)(.*)/,RegExp.$2)
console.log(RegExp.$2 || t);
