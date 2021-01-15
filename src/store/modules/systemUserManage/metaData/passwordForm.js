import { ADMIN } from '@/api/apiModules'
export default {
  viewType: 'form',
  module: ADMIN,
  okAction: 'modifyAdminPwd',
  view: {
    title: 'passwordReset',
    content: [{
      $id: 'oldPwd',
      $type: 'input',
      $el: {
        // suffixIcon: 'sk-icon-invisible',
        type: 'password'
      },
      // actions: {
      //   on: {
      //     'suffix-icon-click': 'ChangeLoginPasswordType'
      //   }
      // },
      label: 'systemUserManage.originPwd',
      rules: ['password', { validateFieldItem: { validateFieldItemId: 'newPwd' }}]
    },
    {
      $id: 'newPwd',
      $type: 'input',
      $el: {
        // suffixIcon: 'sk-icon-invisible',
        type: 'password'
      },
      // actions: {
      //   on: {
      //     'suffix-icon-click': 'ChangeLoginPasswordType'
      //   }
      // },
      label: 'systemUserManage.newPwd',
      rules: ['password', { notSameAs: { notSameAsItemId: 'oldPwd', errorMessage: 'systemUserManage.notSameAsTips' }, validateFieldItem: { validateFieldItemId: 'confirmPwd' }}]
    },
    {
      $id: 'confirmPwd',
      $type: 'input',
      $el: {
        // suffixIcon: 'sk-icon-invisible',
        type: 'password'
      },
      // actions: {
      //   on: {
      //     'suffix-icon-click': 'ChangeLoginPasswordType'
      //   }
      // },
      label: 'systemUserManage.confirmNewPwd',
      rules: ['password', 'textShort', { sameAs: { sameAsItemId: 'newPwd', errorMessage: 'systemUserManage.confirmMessage' }}]
    }]
  }
};
