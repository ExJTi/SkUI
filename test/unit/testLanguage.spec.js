// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import { opt } from '@/main'

describe('国际化单元测试', () => {
  it('单元测试国际化切换后 language值 及 css 样式兼容性处理 根节点样式', () => {
    const vm = new Vue(opt).$mount()
    const language = 'en'
    // 切换国际化代码逻辑
    vm.$i18n.locale = language
    vm.$store.dispatch('setLanguage', language)
    let appVm = vm.$children[0];
    vm.$nextTick(() => {
      expect(appVm.language).toBe(language)
      expect(appVm.$el.className).toEqual(language)
      /* 登录页
       expect(appVm.$children[0].loginForm.username).toEqual('admin')
       console.log(appVm.$children)*/
    })
  })
})
