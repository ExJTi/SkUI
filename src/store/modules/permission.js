import { asyncMenuRouterMap, constantMenuRouterMap } from '@/router';
import { hasPermission } from 'sky-engine/utils';
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncMenuRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncMenuRouterMap, menus, isRouter = true) {
  const accessedRouters = asyncMenuRouterMap.filter(route => {
    if (menus && hasPermission(menus, route)) {
      // 具备路由菜单功能
      if (isRouter ? route.path : !isRouter) {
        if (!route.noAuth && route.children && route.children.length) {
          route.children = filterAsyncRouter(route.children, menus);
        }
        return true;
      }
    }
    return false;
  });
  return accessedRouters;
}

/**
 * 递归过滤路由表，根据是否为超级管理员来控制菜单(后续权限控制具体设计以后可删除)
 */
function controlConstantRouter(constantMenuRouterMap, hasSuperPrivilege) {
  constantMenuRouterMap.map(route => {
    if (route.control) {
      route.hidden = !hasSuperPrivilege;
    }

    if (route.children && route.children.length > 0) {
      controlConstantRouter(route.children, hasSuperPrivilege);
    }
  });
}

const permission = {
  state: {
    routers: constantMenuRouterMap,
    addRouters: []

  },
  mutations: {
    SET_ROUTERS: (state, auth) => {
      state.addRouters = auth.routers;
      state.routers = constantMenuRouterMap.concat(auth.menus);
    },
    UPDATE_MENUS: (state, menus) => {
      state.routers = menus;
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { menu, hasSuperPrivilege } = data;
        const accessedRouters = filterAsyncRouter(asyncMenuRouterMap, menu);
        const menus = filterAsyncRouter(asyncMenuRouterMap, menu, false);
        commit('SET_ROUTERS', { routers: accessedRouters, menus });
        // 递归过滤路由表，根据是否为超级管理员来控制菜单(后续权限控制具体设计以后可删除)
        controlConstantRouter(constantMenuRouterMap, hasSuperPrivilege);
        resolve();
      });
    },
    UpdateMenus({ commit }, data) {
      const menus = filterAsyncRouter(asyncMenuRouterMap, data, false);
      commit('UPDATE_MENUS', menus);
    }
  },
  getters: {
    permission_routers: state => state.routers,
    addRouters: state => state.addRouters
  }
};

export default permission;
