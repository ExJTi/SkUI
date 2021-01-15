import { normalSize } from 'sky-engine/utils';
import { CLOUDDESKTOP_OSISOFILE } from '@/api/apiModules';

export default {
  viewType: 'table',
  module: CLOUDDESKTOP_OSISOFILE,
  params: null,
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
    }]
  },
  view: {
    columns: [
      {
        props: {
          type: 'radio',
          width: 55
        }
      },
      {
        props: {
          label: 'imageFiles.imageFileName',
          prop: 'imageFileName',
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
          sortable: 'custom',
          sortField: 'fileSize'
        },
        dataType: 'custom',
        custom: function(data) {
          return normalSize(data.imageFileSize);
        }
      },
      {
        props: {
          label: 'imageFiles.uploadTime',
          prop: 'uploadTime',
          sortable: 'custom',
          sortField: 'createTime'
        },
        dataType: 'date'
      },
      {
        props: {
          label: 'describe',
          prop: 'note',
          width: 400
        }
      }
    ]
  }
};
