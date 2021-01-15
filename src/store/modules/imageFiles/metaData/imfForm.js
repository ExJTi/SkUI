import { CLOUDDESKTOP_OSISOFILE } from '@/api/apiModules';
export default {
  viewType: 'form',
  module: CLOUDDESKTOP_OSISOFILE,
  params: null,
  view: {
    title: 'imageFiles.imageTemplateCreate',
    content: [
      {
        $id: 'imageFileName',
        $type: 'upload-file',
        label: 'imageFiles.uploadImageFileName',
        rules: [{ notEmpty: { message: 'sk.form.common_term_file_valid' }},
          { suffix: { includeSuffixes: ['iso', 'ISO', 'qcow2', 'QCOW2'], errorMessage: 'imageFiles.uploadImageFileValiadorMessage' }},
          'longLength',
          { fileSize: { min: 1 }},
          {
            checkDuplication: {
              url: `${CLOUDDESKTOP_OSISOFILE}/checkDuplication`,
              paramsFromModel: { 'imageFileName': 'imageFileName.name' },
              errorMessage: 'fileNameRepetitionExists'
            }

          }
        ]
      },
      {
        $id: 'note',
        $type: 'input',
        label: 'describe',
        $el: {
          type: 'textarea',
          rows: 5
        },
        rules: ['textMedium']
      }
    ]
  }
};
