export default {
  confirm: { // 确认框提示信息
    systemUserManage: {
      deleteMsg: '删除管理员({userName})？',
      batchDeleteMsg: '删除({num})个管理员？',
      defaultPassword: '默认密码123456'
    },
    systemRoleManage: {
      deleteMsg: '删除角色({roleName})？',
      batchDeleteMsg: '删除({num})个角色？'
    },
    imageFiles: {
      batchDeleteMsg: '删除({num})个镜像文件？',
      deleteMsg: '删除镜像文件({imageFileName})？'
    }
  },
  operation: { // 按钮不可操作提示信息
    systemUserManage: {
      chooseUnDefaultUser: '请选择非默认管理员',
      chooseCanDeleteUser: '不可删除默认管理员或当前账号',
      chooseUnDefaultAndUnCurrentUser: '不可重置默认管理员或当前账号的密码',
      systemUserManageDisabledTips: '该管理员是默认管理员，不可操作',
      roleDisabledTips: '该角色是默认角色，不可操作'
    },
    imageFiles: {
      chooseComplete: '请选择完成状态的镜像文件'
    }
  }
};
