import { Message } from 'element-ui';
import 'nprogress/nprogress.css'; // Progress 进度条样式
import { getStatus } from 'sky-engine/utils/auth'; // 验权
import NProgress from 'nprogress'; // Progress 进度条
import router from 'sky-engine/router';
import store from '@/store';

const whiteList = ['/login', '/authredirect', 'protocol']; // 不重定向白名单
const configurationWizardEntryNames = []; // 配置向导入口地址名称
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (getStatus() === 'true') { // 判断用户是否登录
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    } else {
      if (store.getters.name === '') {
        // 判断当前用户是否已拉取完user_info信息
        // 拉取user_info,同时拉取配置向导信息
        store.dispatch('InitLoading', true);
        Promise.all([
          store.dispatch('GetUserInfo')
        ]).then(results => {
          store.dispatch('InitLoading', false);
          const userInfo = results[0].data.content;
          // const menu = res.data.content.menu //  可访问的菜单
          // 递归过滤路由表，根据是否为超级管理员来控制菜单(后续权限控制具体设计以后可删除)
          if (shouldRedirectToConfiguration(to, from, next)) { return; }

          const hasSuperPrivilege = userInfo.hasSuperPrivilege || false;
          store.dispatch('GenerateRoutes', { hasSuperPrivilege }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters);
            // 判断是否认证过`
            next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,replace: true so the navigation will not leave a
          });
        }).catch((e) => {
          console.error(e);
          /**
           * 此处可能是获取用户信息失败
           * 或者或者配置向导信息失败
           */
          store.dispatch('InitLoading', false);
          store.dispatch('FedLogOut').then(() => {
            Message.error('验证失败,请重新登录');
            store.dispatch('LogOut').then(() => {});
            next({ name: 'login' });
            NProgress.done();
          });
        });
      } else {
        if (shouldRedirectToConfiguration(to, from, next)) { return; }
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ,这边有bug,当动态：id 参数path 地址，判断出问题
        if (router.matcher.getCurPath(to.path)) {
          next();
        } else {
          next({
            path: '/login',
            query: {
              noGoBack: true
            }
          });
          NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
      NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
});

router.afterEach((to) => {
  NProgress.done();
});

function shouldRedirectToConfiguration(to, from, next) {
  // debugger
  if (store.getters.configurationWizardVisible) {
    if (configurationWizardEntryNames.indexOf(to.name) >= 0) {
      next();
    } else {
      /**
       * 登陆成功路由到dashbord
       * 配置信息show = true时
       * 走此流程，to.name = dashbord；
       *
       * 配置信息show = true时，
       * 手动输入切换路由/dashbord，通过程序跳转判断
       */
      const toName = store.getters.configurationWizardStep === 0 ? configurationWizardEntryNames[0] : configurationWizardEntryNames[1];
      next({ name: toName });
      /**
       * 配置向导欢迎页手动输入/dashbord
       * 通过程序重新跳回配置向导欢迎页导致NProgress不会关闭问题
       */
      if (toName === from.name) {
        NProgress.done();
      }
    }
    return true;
  } else if (configurationWizardEntryNames.indexOf(to.name) >= 0) {
    /**
     * 配置信息show = false
     * 手动切换路由到配置向导相关路由，直接返回首页，不做其他处理
     */
    next({ path: '/', replace: true });
    if (from.name === 'dashboard') {
      NProgress.done();
    }
    return true;
  }
  return false;
}
