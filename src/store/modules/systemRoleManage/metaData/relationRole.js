import { USER_ROLEMANAGE } from '@/api/apiModules'
export default {
  viewType: 'table',
  module: USER_ROLEMANAGE,
  toolbar: {
    hasSearch: false
  },
  view: {
    rowDetailVisible: true,
    columns: [{
      props: {
        type: 'radio',
        width: 55
      }
    },
    {
      props: {
        label: 'roleName',
        prop: 'roleName'
      }
    },
    {
      props: {
        label: 'describe',
        prop: 'describe'
      }
    }
    ]
  }
}
