import { get } from 'sky-engine/utils/request'
import { SYSTEMCONFIG_UPGRADE } from '@/api/apiModules'

export function getAbout() {
  return get(`${SYSTEMCONFIG_UPGRADE}/getCurrentVersion`)
}

export function getInitialConfig() {
  return get('server/modifyServerIp/check?_=' + Date.now())
}

export function getAlarmAndTipCount() {
  return get('managerUI/getAlarmAndTipCount')
}

