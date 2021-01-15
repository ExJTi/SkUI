import Mock from 'mockjs';
// import mockHelper from './mockHelper';

import data from './data';
Mock.setup({ timeout: '350-600' });
import loginAPI from './login';

// import serverManage from './mockModules/serverManage'
// import home from './mockModules/home'

// 登录相关
Mock.mock(/\/rcdc\/rco\/admin\/loginAdmin/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/rcdc\/base\/admin\/logoutAdmin/, 'post', loginAPI.logout)
Mock.mock(/\/rcdc\/base\/admin\/validateAdminPwd/, 'post', loginAPI.validateAdminPwd)
Mock.mock(/\/rcdc\/base\/admin\/getCurrentUserInfo/, 'post', loginAPI.getUserInfo)
Mock.mock(/\/rcdc\/noAuth\/login\/getNotice/, 'get', loginAPI.getNotice);
Mock.mock(/\/userManage\/list/, 'post', data.fetch);

export default Mock;
