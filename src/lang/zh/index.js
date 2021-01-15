import login from './login';
import base from './base';
import dictionary from './dictionary';
import systemUserManage from './systemUserManage';
import tips from './tips';
import imageFiles from './imageFiles';
import taskManage from './taskManage';

export default {
  login,
  ...base,
  dictionary,
  systemUserManage,
  tips,
  imageFiles,
  taskManage
};
