import { extend } from 'sk-ui/lib/utils/util.js';
import imfForm from './metaData/imfForm';

export default {
  ImFCreate() {
    this.dispatch('OpenFullDialog', { metaData: imfForm });
  },
  ImFRelationCreate() {
    // this.dispatch('AddDialogMetaData', { metaData: formMeteData, type: 'right' });
  },
  ImFEdit({ commit }, params) {
    const props = {
      title: 'imageFiles.editImageFiles',
      params: {
        id: params.rowIds[0]
      }
    };
    const editForm = extend(true, {}, imfForm);
    editForm.view.content.splice(0, 1);
    this.dispatch('OpenFullDialog', { metaData: editForm, props, clone: false });
  }
};
