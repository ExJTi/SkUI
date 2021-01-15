
import store from 'sky-engine/store';

import permission from './modules/permission';
import user from './modules/user';
import imageFiles from './modules/imageFiles';
import taskManage from './modules/taskManage';
import auditLogs from './modules/auditLogs';
const modules = {
  permission,
  user,
  taskManage,
  imageFiles,
  auditLogs
};
for (const key in modules) {
  if (modules.hasOwnProperty(key)) {
    store.registerModule(key, modules[key]);
  }
}
export default store;
