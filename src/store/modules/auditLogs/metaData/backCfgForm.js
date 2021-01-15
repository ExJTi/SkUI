export default {
  viewType: 'form',
  view: {
    title: 'auditLogs.config',
    content: [
      {
        $id: 'isBackup',
        $type: 'switch',
        $default: true,
        label: 'auditLogs.isBackup'
      },
      {
        $id: 'backupInterval',
        $type: 'input-number',
        label: 'auditLogs.backupInterval',
        $el: {
          min: 1
        },
        $enableWhen: {
          isBackup: true
        }
      },
      {
        $id: 'isCleanUp',
        $type: 'switch',
        $default: true,
        label: 'auditLogs.isCleanUp',
        $enableWhen: {
          isBackup: true
        }
      },
      {
        $id: 'saveMaxTime',
        $type: 'input-number',
        $el: {
          min: 6
        },
        label: 'auditLogs.saveMinTime',
        $enableWhen: {
          isBackup: true,
          isCleanUp: true
        }
      }
    ]
  }
}
