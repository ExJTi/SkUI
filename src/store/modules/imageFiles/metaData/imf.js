import { normalSize } from 'sky-engine/utils';
import { CLOUDDESKTOP_OSISOFILE } from '@/api/apiModules';

export default {
  viewType: 'table',
  module: CLOUDDESKTOP_OSISOFILE,
  refreshInterval: 3000,
  allowStatus: {
    'ImFDelete': { imageFileState: ['AVAILABLE'] },
    'ImFEdit': { imageFileState: ['AVAILABLE'] }
  },
  toolbar: {
    hasSearch: false,
    items: [{
      slot: 'refresh-rigtht',
      label: 'upload',
      props: {
        type: 'primary',
        icon: 'el-icon-plus'
      },
      action: 'ImFCreate'
    }, {
      slot: 'refresh-rigtht',
      label: 'delete',
      name: 'ImFDelete',
      props: {
        type: 'danger',
        disabled: true,
        icon: 'el-icon-delete'
      },
      action: 'ImFDelete',
      tip: 'tips.operation.imageFiles.chooseComplete',
      confirm: {
        msg: 'tips.confirm.imageFiles.batchDeleteMsg'
      }
    }]
  },
  view: {
    columns: [
      {
        props: {
          type: 'selection',
          width: 55
        }
      },
      {
        props: {
          label: 'imageFiles.imageFileName',
          prop: 'imageFileName',
          width: 300,
          sortable: 'custom',
          sortField: 'fileName'
        }
      },
      {
        props: {
          label: 'status',
          prop: 'imageFileState'
        },
        dataType: 'state',
        dictionaryPath: 'imageFileState'
      },
      {
        props: {
          label: 'imageFiles.imageFileType',
          prop: 'imageFileType'
        }
      },
      {
        props: {
          label: 'imageFiles.imageFileSize',
          prop: 'imageFileSize',
          width: 200,
          sortable: 'custom',
          sortField: 'fileSize'
        },
        dataType: 'custom',
        custom: function(data) {
          return normalSize(data.imageFileSize);
        }
      },
      // {
      //   props: {
      //     label: 'imageFiles.imageSystemType',
      //     prop: 'imageSystemType'
      //   },
      //   dataType: 'custom',
      //   custom: function (row, h) {
      //     return <sk-icon name={row.imageSystemType} label={row.imageSystemType}></sk-icon>
      //   }
      // },
      {
        props: {
          label: 'imageFiles.uploadTime',
          prop: 'uploadTime',
          width: 200,
          sortable: 'custom',
          sortField: 'createTime'
        },
        dataType: 'date'
      },
      {
        props: {
          label: 'describe',
          prop: 'note'
        }
      }
    ],
    menus: [
      {
        icon: 'el-icon-edit',
        label: 'edit',
        command: 'ImFEdit',
        name: 'ImFEdit',
        tip: 'tips.operation.imageFiles.chooseComplete'
      },
      {
        icon: 'el-icon-delete',
        label: 'delete',
        command: 'ImFDelete',
        name: 'ImFDelete',
        tip: 'tips.operation.imageFiles.chooseComplete',
        confirm: {
          msg: 'tips.confirm.imageFiles.deleteMsg'
        }
      }
    ]
  }
};

