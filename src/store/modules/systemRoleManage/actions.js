import roleForm from './metaData/roleForm';
import relationUserGroup from './metaData/relationUserGroup';
import relationTerminalGroup from '../vdiTerminal/metaData/relationTerminalGroup';

export default {
  SrmCreateRole() {
    this.dispatch('OpenFullDialog', { metaData: roleForm });
  },
  SrmRelationUserGroup({ commit }, props) {
    props.showCheckbox = true;
    // props.rootDisabled = true;
    this.dispatch('OpenRightDialog', { metaData: relationUserGroup, props });
  },
  SrmRelationTerminalGroup({ commit }, props) {
    props.showCheckbox = true;
    // props.rootDisabled = true;
    this.dispatch('OpenRightDialog', { metaData: relationTerminalGroup, props });
  },
  SrmEdit({ commit }, params) {
    const props = {
      title: 'userManage.roleEditTitle',
      params: {
        id: params.rowIds[0]
      },
      id: params.rowIds[0]
    }
    this.dispatch('OpenFullDialog', { metaData: roleForm, props });
  }
};
