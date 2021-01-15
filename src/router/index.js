import router from 'sky-engine/router'

const component = {
  render(h) {
    return h('router-view');
  }
};

/**
 * noAuth:true                    不受权限控制的
 * parentPath:'/app'              父级路由
 * hidden: true                   如果hidden:true ，在左侧菜单中不展示此项，非必须，模式是显示
 * redirect: noredirect           如果 `redirect:noredirect` 在面包屑导航中，不会高亮此项且不具备路由功能，非必须
 * name:'router-name'             <keep-alive>需要此配置，必须有 而且是唯一的
 * meta : {
    role: ['admin','editor']     权限控制，可以配置多个，如果什么都没有配，默认所有角色都可见的
    title: 'title'               在菜单,面包屑显示的名称
    icon: 'svg-name'             在菜单中显示的svg图标
    noCache: true                页面是否需要缓存，默认是false
  }
 **/
/** 不需要权限控制的菜单 */
export const constantMenuRouterMap = [
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'dashboard',
    meta: {
      title: 'dashboard',
      icon: 'home',
      noCache: true
    }
  },
  {
    path: '/image-manage',
    component: component,
    name: 'imageManage',
    redirect: 'image-files',
    meta: {
      title: 'imageManage',
      icon: 'image',
      noCache: true
    },
    children: [
      {
        path: 'image-files',
        component: () => import('sky-engine/views/ViewManager'),
        name: 'imageFiles',
        meta: {
          title: 'imageFiles',
          icon: 'dot'
        }
      }
    ]
  },
  {
    path: '/system-maintenance',
    component: component,
    name: 'systemMaintenance',
    redirect: 'audit-logs',
    meta: {
      title: 'systemMaintenance',
      icon: 'maintain',
      noCache: true
    },
    children: [
      {
        path: 'audit-logs',
        component: () => import('sky-engine/views/ViewManager'),
        name: 'auditLogs',
        meta: {
          title: 'auditLogs',
          icon: 'dot'
        }
      }
    ]
  }
];

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
    name: 'login'
  },
  {
    path: '/',
    redirect: 'app'
  },
  {
    path: '/app',
    component: () => import('../views/layout'),
    redirect: 'dashboard',
    children: constantMenuRouterMap
  },
  {
    path: '*',
    name: '*',
    redirect: '/app',
    noAuth: true,
    hidden: true
  }
];

router.addRoutes(constantRouterMap);

/** 需要权限控制的菜单*/
export const asyncMenuRouterMap = [
];

