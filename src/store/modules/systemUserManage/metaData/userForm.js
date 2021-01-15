import { ADMIN } from '@/api/apiModules'
export default {
  viewType: 'form',
  module: ADMIN,
  params: null,
  view: {
    title: 'systemUserManage.createUser',
    content: [{
      $id: 'userName',
      $type: 'input',
      $el: {
        disabled: false
      },
      label: 'systemUserManage.administratorAccount',
      rules: [{ notEmpty: 'systemUserManage.administratorAccount' }, 'textName', 'middleLength',
        {
          checkDuplication: {
            url: `${ADMIN}/validateAdminUserNameExist`,
            duplicateParams: ['userName', { id: null }],
            errorMessage: 'systemUserManage.administratorAccountRepetitionExists'
          }
        }
      ]
    },
    {
      $id: 'realName',
      $type: 'input',
      label: 'form.common_name',
      rules: [{ notEmpty: 'form.common_name' }, 'middleLength']
    },
    {
      $id: 'pwd',
      $type: 'input',
      // $default: '123456',
      $el: {
        // suffixIcon: 'sk-icon-invisible',
        type: 'password'
      },
      // actions: {
      //   on: {
      //     'suffix-icon-click': 'ChangeLoginPasswordType'
      //   }
      // },
      rules: ['password', { validateFieldItem: { validateFieldItemId: 'confirmPwd' }}],
      label: 'pwd'
      // tip: {
      //   description: [['systemUserManage.defaultPassword']]
      // }
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
      label: 'systemUserManage.confirmPwd',
      rules: ['password', 'textShort', { sameAs: { sameAsItemId: 'pwd', errorMessage: 'systemUserManage.confirmMessage' }}]
    },
    {
      $id: 'roleArr',
      $type: 'sky-relation-option',
      label: 'systemUserManage.role',
      actions: {
        nativeOn: {
          click: 'SumRelationRole'
        }
      },
      $el: {
        multiple: true
      },
      rules: [{ notEmpty: { message: 'systemUserManage.roleNotEmpty' }}]
    },
    {
      $id: 'email',
      $type: 'input',
      label: 'form.common_email',
      rules: ['email']
    },
    {
      $id: 'describe',
      $type: 'input',
      label: 'describe',
      $el: {
        type: 'textarea',
        rows: 5
      },
      rules: ['textMedium']
    }
    ]
  }
};
