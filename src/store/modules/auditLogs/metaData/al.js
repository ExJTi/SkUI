import { MSGCT_MSG } from '@/api/apiModules'
export default {
  viewType: 'tabs',
  view: {
    tabs: [
      {
        label: 'taskManage.historyTask',
        name: 'historyTask',
        viewMetaData: {
          refreshInterval: 3000,
          viewType: 'chain',
          module: MSGCT_MSG,
          toolbar: {
            hasSearch: true,
            hasPage: true,
            hasRefresh: true,
            hasJumper: true,
            searchPlaceholder: 'taskManage.search',
            items: []
          },
          view: {
          }
        }
      }
    ]
  }
}
