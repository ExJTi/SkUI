import { extend } from 'sk-ui/lib/utils/util.js';
import userForm from './metaData/userForm';
import passwordForm from './metaData/passwordForm';

export default {
  SumCreateUser() {
    this.dispatch('OpenFullDialog', { metaData: userForm });
  },
  SumRelationRole({ commit }, data) {
    import('../systemRoleManage/metaData/relationRole').then(metaData => {
      const props = data;
      this.dispatch('OpenRelationDialog', { metaData, props });
    });
  },
  SumPassworReset({ commit }, params) {
    const _passwordForm = extend(true, {}, passwordForm);
    const props = {
      okAction: 'modifyOtherAdminPwd'
    }
    _passwordForm.params = {
      id: params.rowIds[0]
    }
    _passwordForm.view.content.splice(0, 1)
    this.dispatch('OpenFullDialog', { metaData: _passwordForm, clone: false, props });
  },

  SumUserEdit({ commit }, params) {
    const props = {
      title: 'systemUserManage.editUser',
      params: {
        id: params.rowIds[0]
      },
      id: params.rowIds[0]
    }
    const editForm = extend(true, {}, userForm);
    editForm.view.content.splice(2, 2);
    editForm.view.content[0].$el.disabled = true;
    this.dispatch('OpenFullDialog', { metaData: editForm, props, clone: false });
  }
}
