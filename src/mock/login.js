// import { param2Obj } from 'sky-engine/utils'

export default {
  loginByUsername: config => {
    // const { username } = JSON.parse(config.body)
    return {
      status: 'SUCCESS',
      content: {
        'id': 'jsjsjsjsj'
      },
      msg: ''
    }
  },
  getUserInfo: config => {
    var data = {
      'status': 'SUCCESS',
      'content': {
        'id': 'jsjsjsjsj',
        'roleArr': [
          {
            'id': 'b2162e5e-82bf-4a95-9414-434c498cc766',
            'label': '默认角色'
          },
          {
            'id': '33673447-301a-4278-90c6-f2a0564c844e',
            'label': 'userGroup'
          }
        ],
        // SUPER_ADMIN超级管理员，NORMAL_ADMIN普通管理员
        'userName': 'admin' // 登录用户名
      }
    }
    var flag = true;
    return flag ? data : `<html> <script>window.top.location.href = "main.html?action=logout"; </script></html>`
  },
  validateAdminPwd: config => {
    return {
      status: 'ERROR',
      content: null,
      msg: '密码验证出错'
    }
  },
  logout: () => {
    return {
      code: 0
    }
  },
  addCustomer: () => {
    return {
      code: 0,
      msg: ''
    }
  },
  checkMe: () => {
    return {
      code: 0,
      msg: '',
      data: '323234324'
    }
  },
  getNotice: () => {
    return {
      code: 0,
      msg: '',
      data: {
        noticeList: [{
          text: '云办公3.3版本升级啦，小伙伴速速体验，快来快来',
          image: 'sad'
        }, {
          text: '云办公3.2版本升级啦',
          image: 'sad'
        }, {
          text: '云办公3.1版本升级啦',
          image: 'sad'
        }]
      }
    }
  },
  getAlarmAndTipCount: () => {
    return {
      code: 0,
      msg: '',
      data: {
        count: 6,
        level: 'SLIGHT'
      }
    }
  },
  springSeCheck: () => {
    return `<html><script  id="action=login">window.top.location.href = "main.html"; </script></html>`
  }
}
