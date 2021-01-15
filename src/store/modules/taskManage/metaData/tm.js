import { MSGCT_MSG } from '@/api/apiModules'
export default {
  refreshInterval: 3000,
  viewType: 'chain',
  module: MSGCT_MSG,
  toolbar: {
    hasSearch: true,
    hasPage: true,
    hasRefresh: true,
    searchPlaceholder: 'taskManage.search',
    items: []
  },
  view: {
  }
}
