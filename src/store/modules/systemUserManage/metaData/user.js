import user from '@/store/modules/user';
import { ADMIN } from '@/api/apiModules'
export default {
  viewType: 'table',
  module: ADMIN,
  allowStatus: {
    'edit': { hasDefault: [false] },
    'reset': {
      expression: function(row) {
        return row.hasDefault === false && user.state.name !== row.userName;
      }
    },
    'delete': {
      expression: function(row) {
        return row.hasDefault === false && user.state.name !== row.userName;
      }
    }
  },
  toolbar: {
    hasColAdjustment: false,
    hasSearch: false,
    items: [
      {
        slot: 'refresh-rigtht',
        label: 'create',
        props: {
          type: 'primary',
          icon: 'el-icon-plus'
        },
        action: 'SumCreateUser'
      }, {
        slot: 'refresh-rigtht',
        label: 'delete',
        name: 'delete',
        props: {
          type: 'danger',
          disabled: true,
          icon: 'el-icon-delete'
        },
        action: 'SumUserDelete',
        tip: 'tips.operation.systemUserManage.chooseCanDeleteUser',
        confirm: {
          msg: 'tips.confirm.systemUserManage.batchDeleteMsg'
        }
      }
    ]
  },
  view: {
    rowDetailVisible: true,
    columns: [
      {
        props: {
          type: 'selection',
          width: 55,
          selectable: function(row) {
            return !row.hasDefault
          },
          tip: 'tips.operation.systemUserManage.systemUserManageDisabledTips'
        }
      },
      {
        props: {
          label: 'systemUserManage.administratorAccount',
          prop: 'userName'
        }
      },
      {
        props: {
          label: 'form.common_name',
          prop: 'realName'
        }
      },
      {
        props: {
          label: 'systemUserManage.role',
          prop: 'roleArr'
        },
        dataType: 'custom',
        custom: function (row, h) {
          let roleNames = '';
          if (row.roleArr && row.roleArr.length > 0) {
            row.roleArr.forEach(role => {
              roleNames += role.label + '，';
            });
            roleNames = roleNames.substring(0, roleNames.length - 1);
          }
          return <span>{roleNames}</span>
        }
      },
      {
        props: {
          label: 'form.common_email',
          prop: 'email'
        }
      },
      {
        props: {
          label: 'createTime',
          prop: 'createTime'
        },
        dataType: 'date'
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
        icon: 'sk-icon-refresh',
        label: 'passwordReset',
        command: 'SumPassworReset',
        tip: 'tips.operation.systemUserManage.chooseUnDefaultAndUnCurrentUser',
        name: 'reset'
      },
      {
        icon: 'el-icon-edit',
        label: 'edit',
        command: 'SumUserEdit',
        tip: 'tips.operation.systemUserManage.chooseUnDefaultUser',
        name: 'edit'
      },
      {
        icon: 'el-icon-delete',
        label: 'delete',
        command: 'SumUserDelete',
        name: 'delete',
        tip: 'tips.operation.systemUserManage.chooseCanDeleteUser',
        confirm: {
          msg: 'tips.confirm.systemUserManage.deleteMsg'
        }
      }
    ]
  }
}
