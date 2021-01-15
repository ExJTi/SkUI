import lang from '@/lang';
import { USER_ROLEMANAGE } from '@/api/apiModules'
export default {
  viewType: 'table',
  module: USER_ROLEMANAGE,
  allowStatus: {
    'edit': { hasDefault: [false] },
    'delete': { hasDefault: [false] }
    // 'onlyOneEdit': { id: 'onlyOne', hasDefault: [false] }
  },
  toolbar: {
    hasSearch: false,
    items: [
      {
        slot: 'refresh-rigtht',
        label: 'create',
        props: {
          type: 'primary',
          icon: 'el-icon-plus'
        },
        action: 'SrmCreateRole'
      }, {
        slot: 'refresh-rigtht',
        label: 'delete',
        name: 'delete',
        props: {
          type: 'danger',
          disabled: true,
          icon: 'el-icon-delete'
        },
        action: 'SrmDelete',
        tip: 'tips.operation.systemRoleManage.chooseUnDefaultUser',
        confirm: {
          msg: 'tips.confirm.systemRoleManage.batchDeleteMsg'
        }
      }
    ]
  },
  view: {
    columns: [
      {
        props: {
          type: 'selection',
          width: 55,
          selectable: function(row) {
            return !row.hasDefault
          },
          tip: 'tips.operation.systemUserManage.roleDisabledTips'
        }
      },
      {
        props: {
          label: 'roleName',
          prop: 'roleName',
          width: 200
        }
      },
      {
        props: {
          label: 'form.common_user_group',
          prop: 'userGroup',
          width: 200
        },
        dataType: 'custom',
        custom: function (row, h) {
          let userGroupNames = '';
          if (row.hasDefault) {
            userGroupNames = lang.t('systemUserManage.allGroup');
          } else {
            if (row.userGroupArr && row.userGroupArr.length > 0) {
              row.userGroupArr.forEach(user => {
                userGroupNames += user.resourceName + '，';
              });
              userGroupNames = userGroupNames.substring(0, userGroupNames.length - 1);
            }
          }
          return <span>{userGroupNames}</span>
        }
      },
      {
        props: {
          label: 'form.common_terminal_group',
          prop: 'terminalGroup',
          width: 200
        },
        dataType: 'custom',
        custom: function (row, h) {
          let terminalGroupNames = '';
          if (row.hasDefault) {
            terminalGroupNames = lang.t('systemUserManage.allGroup');
          } else {
            if (row.terminalGroupArr && row.terminalGroupArr.length > 0) {
              row.terminalGroupArr.forEach(terminal => {
                terminalGroupNames += terminal.resourceName + '，';
              });
              terminalGroupNames = terminalGroupNames.substring(0, terminalGroupNames.length - 1);
            }
          }
          return <span>{terminalGroupNames}</span>
        }
      },
      {
        props: {
          label: 'describe',
          prop: 'describe'
        }
      }
    ],
    menus: [
      {
        icon: 'el-icon-edit',
        label: 'edit',
        name: 'edit',
        tip: 'tips.operation.systemRoleManage.chooseUnDefaultUser',
        command: 'SrmEdit'
      },
      {
        icon: 'el-icon-delete',
        label: 'delete',
        command: 'SrmDelete',
        name: 'delete',
        tip: 'tips.operation.systemRoleManage.chooseUnDefaultUser',
        confirm: {
          msg: 'tips.confirm.systemRoleManage.deleteMsg'
        }
      }
    ]
  }
}
