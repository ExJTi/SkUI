import { USER_GROUP } from '@/api/apiModules'
export default {
  viewType: 'tree',
  view: {
    trees: {
      showCheckbox: false,
      module: USER_GROUP,
      expandedkeys: [0],
      rootDisabled: false
    },
    formItemId: null
  }
};
