import { USER_ROLEMANAGE } from '@/api/apiModules'
export default {
  viewType: 'form',
  module: USER_ROLEMANAGE,
  params: null,
  formatData: function(formValue) {
    formValue.userGroupArr = formValue.userGroupArr.filter(function(val) {
      if (val.id !== 'root') {
        return val
      }
    })
    formValue.terminalGroupArr = formValue.terminalGroupArr.filter(function(val) {
      if (val.id !== 'root') {
        return val
      }
    })
    return formValue;
  },
  view: {
    title: 'userManage.roleCreateTitle',
    content: [{
      $id: 'roleName',
      $type: 'input',
      $default: '',
      label: 'roleName',
      rules: [{ notEmpty: 'roleName' }, 'textShort', 'textName',
        {
          checkDuplication: {
            url: `${USER_ROLEMANAGE}/checkDuplication`,
            duplicateParams: ['roleName', { id: null }],
            errorMessage: 'systemUserManage.roleNameRepetitionExists'
          }
        }
      ]
    },
    {
      $id: 'userGroupArr',
      $type: 'sky-relation-option',
      label: 'form.common_user_group',
      rules: [{ notEmpty: { message: 'userManage.userGroupArrNotEmpty' }}],
      $el: {
        multiple: true
      },
      actions: {
        nativeOn: {
          click: 'SrmRelationUserGroup'
        }
      }
    },
    {
      $id: 'terminalGroupArr',
      $type: 'sky-relation-option',
      label: 'form.common_terminal_group',
      rules: [{ notEmpty: { message: 'userManage.terminalGroupArrNotEmpty' }}],
      $el: {
        multiple: true
      },
      actions: {
        nativeOn: {
          click: 'SrmRelationTerminalGroup'
        }
      }
    },
    {
      $id: 'describe',
      $type: 'input',
      $el: {
        type: 'textarea',
        rows: 5
      },
      $default: '',
      label: 'describe',
      rules: ['textMedium']
    }
    ]
  }
};
