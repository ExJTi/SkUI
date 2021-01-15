import { getUserInfo, loginByUsername, logout } from '@/api/login'
import CookieUtil from 'sky-engine/utils/auth'
import { bcryptEncryption } from 'sky-engine/utils'

const user = {
  state: {
    status: CookieUtil.getStatus(), // 标致用户是否登录过
    name: ''
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },

  actions: {
    async LoginByUsername({ commit }, userInfo) {
      const userName = userInfo.userName;
      const password = userInfo.password;
      const bcryptjs = await import('bcryptjs');
      await loginByUsername(userName, bcryptEncryption(bcryptjs, password)).then(response => {
        // 标致已登录
        CookieUtil.setStatus(true);
        commit('SET_STATUS', true)
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return getUserInfo().then(response => {
        if (response.data !== null && typeof response.data === 'object' && response.data.status === 'SUCCESS') { // 由于mockjs 不支持自定义状态码只能这样hack
          const data = response.data.content
          commit('SET_NAME', data.userName)
          return response
        }
        return Promise.reject(response)
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return logout().then(response => {
        // 标致退出登录
        this.dispatch('FedLogOut')
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_STATUS', false)
        commit('SET_NAME', '')
        CookieUtil.removeStatus();
        resolve()
      })
    }

  },
  getters: {
    token: state => state.token,
    name: state => state.name,
    status: state => state.status
  }
}

export default user
