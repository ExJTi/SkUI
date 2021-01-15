import Mock from 'mockjs';
import dateUtil from 'element-ui/lib/utils/date';
// import { param2Obj } from 'sky-engine/utils'

const List = [];
const count = 100;

function sleep(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) { // eslint-disable-line
    now = new Date();
    if (now.getTime() > exitTime) { return; }
  }
}

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    'cloudDesktopState|1': ['creating', 'running', 'stopping', 'deleting', 'reverting', 'changing', 'starting', 'rebooting', 'sleeping', 'wakeUping', 'stop', 'sleep'],
    'cloudDesktopAction|1': ['online', 'offline', 'sleep'],
    id: '@uuid',
    realName: '@cname',
    name: '@cname',
    userName: '@cname',
    userGroup: '用户组_@int(1, 5)',
    'dtype|1': ['normal', 'custom'],
    // 'imageName|1': ['window7', 'windows10', 'windowXP'],
    'imageServer|1': ['ImageServer-Web'],
    'imageType|1': ['ISO'],
    'platform|1': ['Linux', 'Windows', 'WindowVirtio', 'Others'],
    'strategy|1': ['输入设备', '存储设备', '摄像设备', '办公设备', '音频设备', '手机'],
    'spec|1': ['4核|8G|40G', '8核|18G|60G'],
    image: '镜像_@int(1, 5)',
    title: '信息_@int(1, 5)',
    roleName: '角色_@int(1, 5)',
    content: '@ctitle(1, 128)',
    ip: '@ip',
    gateWapIp: '@ip',
    ipCidr: '@ip',
    desktopIp: '@ip',
    terminalIp: '@ip',
    desktopServerIp: '@ip',
    // 'desktopState|1': ['MOVING', 'ERROR', 'CLOSE', 'START_UP', 'DELETING', 'RESTORING', 'UPDATING', 'RUNNING', 'SHUTTING', 'SLEEP', 'SLEEPING', 'WAKING', 'REBOOTING', 'RECYCLE_BIN', 'RECOVING', 'ERROR_RECOVERING', 'SNAPSHOT_CREATIN', 'SNAPSHOT_RESTORING'],
    'desktopState|1': ['SLEEPING'],
    mac: /[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}/,
    terminal: '@ctitle(5, 10)',
    strategyName: '云桌面策略_@int(1, 5)',
    terminalGroup: '用户组_@int(1, 5)',
    'ttype|1': ['VDI', 'IDV'],
    'status|1': ['online', 'stop', 'outline'],
    'terminalState|1': ['online', 'offline', 'upgrading', 'upgradeError', 'checking'],
    // 'status|1': ['running', 'stopping', 'pause', 'fault_resuming', 'hibernated', 'unknown', 'error', 'recycling', 'rebooting'],
    display_time: '@datetime',
    fileName: '文件_@int(1, 5)',
    terminalSystem: 'RG-IDV-RainOS_0008_L.iso',
    'fileType|1': ['iso', 'base'],
    lastTime: '@datetime',
    uploadTime: '@datetime',
    userCreateTime: '@datetime',
    time: '@datetime',
    'auth|1': ['-rwxrwxrwx', '-rwxr--r--', '-rw-rw-r--'],
    'cloudDisk|1': ['5G', '10G', '15G', '20G', '未启用'],
    'imageSystemSize|1': ['40GB', '60GB'],
    'imageFileSize|1': [20212121212, 1043434234234],
    'clouldDeskopNum|1': ['11', '10'],
    'clouldDeskopNumOfRecoverable|1': [11, 10],
    'clouldDeskopNumOfPersonal|1': [11, 10],
    owner: '0 0',
    isoFileSize: '@float(0, 5, 2, 2)' + 'G',
    fileSize: '@float(10, 100, 1, 2)' + 'M',
    'treminalMode|1': ['单用户', '多用户'],
    'treminalImage|1': ['win7_64纯净', 'win10_64纯净'],
    disk: '@int(0, 100)',
    null: '',
    'firmFlag|1': ['0x8087', '0x138a', '0x7f61', '0x90a1'],
    'productFlag|1': ['0x0a2a', '0x1123', '0x9e31', '0x01f1'],
    'releaseVersion|1': ['0x0001', '0x0002', '0x0003', '0x0004'],
    'company|1': ['Intel Corp.', 'Validity Sensors, Inc.'],
    normal: '正常',
    distributionMode: '快速升级',
    terminalSystemSource: '用户上传',
    vdiCloudDesktopName: 'vdi桌面_@int(1, 5)',
    idvCloudDesktopName: 'idv桌面_@int(1, 5)',
    terminalName: '终端_@int(1, 5)',
    'delay|1': [50, 40, 60, void 0],
    'ipConflict|1': [true, false],
    'bandwidth|1': [10 * 1024, 20 * 1024, 30 * 1024, 40 * 1024, null],
    'terminalCheckResult|1': [{ state: 'checking', message: '正在检测' }, { state: 'success', message: '检测完成' }, { state: 'error', message: '检测异常' }],
    'accessInternet|1': [true, false],
    'packetLossRate|1': [0.1, 0.05, 0.01, 0.3, ''],
    source: '@ctitle(1, 5)',
    'vdiCloudTestTopUse|1': ['1/2', '2/3', '1/4'],
    'idvCloudTestTopUse|1': ['1/2', '2/3', '1/4'],
    'idvTerminalUse|1': ['1/2', '2/3', '1/4'],
    associateUser: '@ctitle(1, 3)',
    bindTerminal: '@ctitle(1, 5)',
    describe: '@ctitle(1, 10)',
    sn: '@ctitle(1, 10)',
    product: '@ctitle(1, 10)',
    'dsnIp|1': ['8.8.8.8', '114.114.114..114', '218.85.157.99'],
    'vlanId|1': ['vlan1', 'vlan2', 'vlan3'],
    desktopName: '桌面_@int(1, 5)',
    subnetName: '网络_@int(1, 5)',
    'imageName|1': ['但是但是法读书呃呃呃额鹅鹅鹅ewqewqewqewqewqewqewewqweqewqewqe', 'WIN 7'],
    'imageSystemType|1': ['WIN_7_64'],
    'isGolden|1': [false, true],
    // 'imageState|1': [false, true],

    // 'imageName|1': ['win7', 'win10', 'linux'],
    'editErrorMessage|1': ['guestTool版本过低', 'guestTool未安装', '镜像发布失败', null],
    'imageFileName|1': ['xxx文件'],
    'desktopType|1': ['RECOVERABLE', 'PERSONAL'],
    'userState|1': ['forbidden', 'use'],
    'imageState|1': ['AVAILABLE', 'CREATING', 'DELETING', 'EDITING'],
    'imageFileState|1': ['AVAILABLE', 'CREATING', 'DELETING'],
    // 'DISABLED', 'NOTENABLED', 'COPING', 'RELEASING', 'EDITING', 'CREATING'
    'origin|1': ['local', 'ADArea', 'DAP'],
    'terminalType|1': ['IDV', 'VDI'],
    'strategyType|1': ['IDV', 'VDI'],
    'systemDisk|1': ['40', '10', '15', '20'],
    'cloudNumber|1': [0, 10, 15, 20],
    'executeTime|1': ['1秒', '10秒', '15秒', '20秒'],
    'taskManageState|1': ['SUCCESS', 'FAILURE'],
    'msgTitle': '@ctitle(1, 10)',
    'msgDesc': '@ctitle(1, 10)',
    'taskInfoDescribe|1': ['关机成功', '关机失败'],
    'resourceName|1': ['桌面1', '桌面2', '桌面3', '桌面4', '桌面5'],
    'memory|1': ['2', '4', '8', '16'],
    'cpu|1': '@int(1, 8)',
    'usbTypeName|1': ['存储设备', '摄像设备', '办公设备', '音频设备', '手机', '其他已归类设备'],
    'note|1': ['除鼠标、键盘之外的输入设备，如手写板等，需要用户自行归类或添加。', 'U盘、光驱、移动硬盘等存储类设备。', 'USB摄像头、高拍仪等摄像类设备。', '其他未知类型设备，由用户自行归类或添加。', '自定义设备，需要用户自行归类或添加。', 'USB耳机、USB麦克风等音频设备。'],
    cdNumber: '@int(1, 5)',
    xeee: '@int(0, 100)',
    'vdi|1': ['Rain100 V2', 'RG-Rain100S V2', 'Rain200Pro-Exam'],
    'idv|1': ['Rain410W(128)', 'Rain310W(128)', 'Rain410W(128)', 'Rain310W V2', 'Rain320W V1.00'],
    'alarmLevel|1': ['TIPS', 'SERIOUS'],
    'enableAlarm|1': ['是', '否'],
    'alarmType|1': ['storageType', 'networkType', 'diskType', 'hostType'],
    'alarmTimes|1': '@int(1, 5)',
    'alarmStatus|1': ['NOT_RELEASED', 'AUTO_RELEASED', 'MANUAL_RELEASED', 'CLOSE_ALARM_RELEASED', 'MODIFY_ALARM_VALUE_RELEASED'],
    'alarmItem|1': ['CPU利用率', '服务器内存利用率', '存储利用率'],
    'percentage': '@int(0, 100)',
    'minConfig|1': ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
    'taskName|1': ['关机', '开机'],
    'role|1': ['管理员', '其他'],
    'taskType|1': ['cycle', 'time'],
    'cycleType|1': ['everyday', 'everyweek'],
    'displayStrategy|1': ['SMOOTH', 'DEFAULT', 'LOSSLESS', 'HD'],
    taskTime: '@time',
    clouldDeskopNumOfAppLayer: 1,
    taskDescribe: '@ctitle(10, 20)',
    'appName|1': ['YoukuNplayer.exe', 'mspaint.exe', 'photoshop.exe'],
    'operationStrategy|1': ['OPERATION_ONE', 'OPERATION_TWO', 'CUSTOM', 'DEFAULT'],
    'state|1': ['RESTORING'],
    operationControlValue: '@int(1, 5)',
    email: '@email',
    account: '@title(1,1)',
    createTime: '@datetime',
    sendingTime: '@datetime',
    operateTime: '@datetime',

    'operate|1': ['登录', '删除', '备份', '添加用户', '添加用户组', '开机', '关机'],
    defaultAdmin: '@boolean',
    ipPoolArr: [
      {
        startIp: '192.168.100.1',
        endIp: '192.168.100.255'
      },
      {
        startIp: '192.168.101.1',
        endIp: '192.168.101.255'
      }
    ],

    strategyRecommendId: ['ff968ce1-3f2f-4fde-9461-13f4a330d2d9', 'ff968ce1-3f2f-4fde-9461-13f4a330d2d7', 'ff968ce1-3f2f-4fde-9461-13f4a330d2d8'],
    strategyRecommendName: '推荐策略A',
    'pattern|1': ['PERSONAL', 'RECOVERABLE'],
    cpu: '@int(1, 100)',
    memory: '@int(1, 100)',
    systemSize: '@int(20, 100)',
    personalSize: '@int(30, 100)',
    isAllowInternet: '@boolean',
    isOpenUsbReadOnly: '@boolean',
    isShow: '@boolean'

  }));
}

export default {
  fetch: config => {
    const params = JSON.parse(config.body);
    const { importance, type, title, sort, limit = 20, filterBy, filterStr } = params;
    // const limit = 6;
    console.log(JSON.parse(config.body));
    // const { importance, type, title, page = 1, limit = 20, sort, filterBy, filterStr } = JSON.parse(config.body)
    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false;
      if (type && item.type !== type) return false;
      if (title && item.title.indexOf(title) < 0) return false;
      if (filterBy && item[filterBy].indexOf(filterStr) < 0) return false;
      return true;
    });

    if (sort === '-id') {
      mockList = mockList.reverse();
    }
    let page = params.page || 1;
    page = page + 1;
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));

    return {
      content: {
        total: mockList.length,
        items: pageList,
        time: Date.now(),
        vdiDesktopConfig: {
          enableConfig: true,
          image: {
            id: 1,
            label: 'image1'
          },
          strategy: {
            id: 2,
            label: '策略1'
          },
          network: {
            enableDhcp: false,
            address: {
              id: 333,
              label: '网络1',
              ip: '172.21.21.21'
            }
          }
        }
      },
      status: 'SUCCESS'
    };
  },
  fetchTerminalCheck: config => {
    const params = JSON.parse(config.body);
    const { importance, type, title, limit = 20, sort, filterBy, filterStr } = params;
    console.log(JSON.parse(config.body));
    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false;
      if (type && item.type !== type) return false;
      if (title && item.title.indexOf(title) < 0) return false;
      if (filterBy && item[filterBy].indexOf(filterStr) < 0) return false;
      return true;
    });

    if (sort === '-id') {
      mockList = mockList.reverse();
    }
    let page = params.page || 1;
    page = page + 1;
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));

    return {
      content: {
        total: mockList.length,
        itemArr: pageList,
        result: {
          ipConflict: 10,
          bandwidth: 10,
          accessInternet: 0,
          packetLossRate: 10,
          delay: 0
        },
        state: 'error',
        // state: 'success | error | checking ',
        percentage: 10
      },
      status: 'SUCCESS'
    };
  },

  getTaskList: config => {
    const List = [];
    for (let i = 0; i < 10; i++) {
      List.push(Mock.mock({
        id: 'xxxxxx-xxx-xxx-xxxxx',
        msgName: '删除镜像',
        msgType: 'BATCH_MSG',
        'msgState|1': ['SUCCESS', 'FAILURE', 'PARTIAL_SUCCESS'],
        describe: '删除10个镜像成功',
        createTime: Date.now()
      }));
    }
    return {
      content: {
        total: 100,
        itemArr: List,
        time: Date.now()
      },
      status: 'SUCCESS'
    };
  },
  searchUtc: config => {
    const itemArr = [{
      'type': 'user',
      'options': [{
        'type': 'user',
        'id': 2,
        'label': 'linchao1',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'user',
        'id': 6,
        'label': 't1',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'user',
        'id': 8,
        'label': 'test1',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'user',
        'id': 23,
        'label': 'zl1',
        'vmMac': null,
        'groupType': null
      }]
    },
    {
      'type': 'vdiTerminal',
      'options': [{
        'type': 'terminal_vdi',
        'id': 28,
        'label': '172.21.149.119（localhost）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_vdi',
        'id': 29,
        'label': '172.21.149.85（localhost）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_idv',
        'id': 15,
        'label': '172.21.3.165（ljm）',
        'vmMac': null,
        'groupType': 'single'
      }, {
        'type': 'terminal_idv',
        'id': 10,
        'label': '172.21.3.242（ltl_idv）',
        'vmMac': null,
        'groupType': 'single'
      }, {
        'type': 'terminal_vdi',
        'id': 18,
        'label': '172.21.3.35（linux-vdi）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_idv',
        'id': 11,
        'label': '172.21.3.38（xiejian_410w）',
        'vmMac': null,
        'groupType': 'mult'
      }, {
        'type': 'terminal_vdi',
        'id': 14,
        'label': '172.21.3.40（my-200V2-6）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_vdi',
        'id': 34,
        'label': '172.21.3.71（xiejian200s）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_idv',
        'id': 16,
        'label': '172.21.4.112（term_lida）',
        'vmMac': null,
        'groupType': 'mult'
      }, {
        'type': 'terminal_idv',
        'id': 17,
        'label': '172.21.4.151（rcd2）',
        'vmMac': null,
        'groupType': 'single'
      }, {
        'type': 'terminal_idv',
        'id': 12,
        'label': '172.21.4.66（rcd）',
        'vmMac': null,
        'groupType': 'mult'
      }, {
        'type': 'terminal_vdi',
        'id': 26,
        'label': '172.21.5.152（localhost）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_vdi',
        'id': 32,
        'label': '172.21.5.168（localhost）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_vdi',
        'id': 22,
        'label': '172.21.5.180（localhost）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_vdi',
        'id': 24,
        'label': '172.21.5.182（localhost）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_idv',
        'id': 23,
        'label': '172.21.5.240（rcd）',
        'vmMac': null,
        'groupType': 'mult'
      }, {
        'type': 'terminal_vdi',
        'id': 31,
        'label': '172.21.5.85（localhost）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_vdi',
        'id': 30,
        'label': '172.21.5.91（localhost）',
        'vmMac': null,
        'groupType': null
      }, {
        'type': 'terminal_idv',
        'id': 11,
        'label': 'xiejian_410w',
        'vmMac': null,
        'groupType': 'mult'
      }]
    },
    {
      'type': 'cloudDesktop',
      'options': [{
        'type': 'cloud_desktop',
        'id': 1,
        'label': '172.21.112.102（czj2）',
        'vmMac': '52:54:00:10:00:07',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 7,
        'label': '172.21.112.121（linchao3）',
        'vmMac': '52:54:00:10:00:04',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 3,
        'label': '172.21.112.126（czj）',
        'vmMac': '52:54:00:10:00:05',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 4,
        'label': '172.21.112.129（zl）',
        'vmMac': '52:54:00:10:00:0E',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 6,
        'label': '172.21.112.224（test2）',
        'vmMac': '52:54:00:10:00:08',
        'groupType': null
      },
      {
        'type': 'cloudDesktop',
        'id': 5,
        'label': '172.21.112.232（test5）',
        'vmMac': '52:54:00:10:00:0C',
        'groupType': null
      },
      {
        'type': 'cloudDesktop',
        'id': 9,
        'label': '172.21.112.233（test1）',
        'vmMac': '52:54:00:10:00:09',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 10,
        'label': '172.21.3.202（czj）',
        'vmMac': '52:54:00:5D:DA:42',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 14,
        'label': '172.21.4.113（公用）',
        'vmMac': '52:54:00:56:78:96',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 11,
        'label': '172.21.4.126',
        'vmMac': '52:54:00:17:89:34',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 2,
        'label': 'linchao1',
        'vmMac': '52:54:00:10:00:02',
        'groupType': null
      }, {
        'type': 'cloud_desktop',
        'id': 9,
        'label': 'test1',
        'vmMac': '52:54:00:10:00:09',
        'groupType': null
      }
      ]
    }
    ];
    return {
      content: {
        itemArr: itemArr,
        time: Date.now()
      },
      status: 'SUCCESS'
    };
  },
  create: config => {
    const data = JSON.parse(config.body);
    console.log(data);
    const result = {
      data: 'success',
      status: 'SUCCESS',
      message: 'create is success'
    };
    return result;
  },
  upload: config => {
    console.log(config.body);
  },
  getPv: () => ({
    pvData: [{ key: 'PC网站', pv: 1024 }, { key: 'mobile网站', pv: 1024 }, { key: 'ios', pv: 1024 }, {
      key: 'android',
      pv: 1024
    }]
  }),
  getArticle: () => ({
    id: 120000000001,
    author: { key: 'mockPan' },
    source_name: '原创作者',
    category_item: [{ key: 'global', name: '全球' }],
    comment_disabled: true,
    content: '<p>我是测试数据我是测试数据</p><p><images class="wscnph" src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>"',
    content_short: '我是测试数据',
    display_time: +new Date(),
    image_uri: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
    platforms: ['a-platform'],
    source_uri: 'https://github.com/PanJiaChen/vue-element-admin',
    tags: [],
    title: 'vue-element-admin',
    status: 'SUCCESS'
  }),
  getCloudDesktopDetail: () => ({
    status: 'SUCCESS',
    data: {
      desktopType: 'personal'
    }
  }),
  createArticle: () => ({
    data: 'success',
    status: 'SUCCESS',
    message: 'create is success'
  }),
  updateArticle: () => ({
    data: 'success',
    status: 'SUCCESS',
    message: 'update is success'
  }),
  emailValidator: () => ({
    data: null,
    status: 'SUCCESS',
    message: ''
  }),
  deleteArticle: () => ({
    data: null,
    status: 'SUCCESS',
    message: 'delete success'
  }),
  servers: () => ({
    content: {
      itemArr: [
        { id: 1, ip: '172.21.192.205', hostName: 'host-1', cabinetLocationBegin: 1, cabinetLocationEnd: 2, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 1 },
        { id: 2, ip: '172.21.192.205', hostName: 'host-2', cabinetLocationBegin: 3, cabinetLocationEnd: 4, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 1 },
        { id: 3, ip: '172.21.192.205', hostName: 'host-3', cabinetLocationBegin: 5, cabinetLocationEnd: 7, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 1 },
        { id: 4, ip: '172.21.192.205', hostName: 'host-4', cabinetLocationBegin: 8, cabinetLocationEnd: 10, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 1 },
        { id: 5, ip: '172.21.192.205', hostName: 'host-5', cabinetLocationBegin: 11, cabinetLocationEnd: 13, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 1 },

        { id: 6, ip: '172.21.192.205', hostName: 'host-6', cabinetLocationBegin: 1, cabinetLocationEnd: 3, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 },
        { id: 7, ip: '172.21.192.205', hostName: 'host-7', cabinetLocationBegin: 4, cabinetLocationEnd: 5, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 },
        { id: 8, ip: '172.21.192.205', hostName: 'host-8', cabinetLocationBegin: 8, cabinetLocationEnd: 9, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 },
        { id: 9, ip: '172.21.192.205', hostName: 'host-9', cabinetLocationBegin: 6, cabinetLocationEnd: 7, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 },
        { id: 10, ip: '172.21.192.205', hostName: 'host-10', cabinetLocationBegin: 10, cabinetLocationEnd: 11, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 }

      ]
    },
    status: 'SUCCESS',
    message: ''
  }),
  servesOfCabinet: () => ({
    content: {
      itemArr: [
        { id: 6, ip: '172.21.192.205', hostName: 'host-6', cabinetLocationBegin: 1, cabinetLocationEnd: 3, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 },
        { id: 7, ip: '172.21.192.205', hostName: 'host-7', cabinetLocationBegin: 4, cabinetLocationEnd: 5, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 },
        { id: 8, ip: '172.21.192.205', hostName: 'host-8', cabinetLocationBegin: 8, cabinetLocationEnd: 9, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 },
        { id: 9, ip: '172.21.192.205', hostName: 'host-9', cabinetLocationBegin: 6, cabinetLocationEnd: 7, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 },
        { id: 10, ip: '172.21.192.205', hostName: 'host-10', cabinetLocationBegin: 10, cabinetLocationEnd: 11, totalCpuNum: 1, totalMemory: 2, totalStorage: 3, cabinetName: '111', configed: true, cabinetId: 2 }
      ]
    },
    status: 'SUCCESS',
    message: ''
  }),
  checkDuplication: () => ({
    content: {
      hasDuplication: true
    },
    status: 'SUCCESS',
    message: ''
  }),
  getImages: () => {
    return {
      data: [{ label: 'win7', value: '1' }, { label: 'win10', value: '2' }, { label: 'linux', value: '3' }],
      status: 'SUCCESS'
    };
  },
  getCloudDesktopStrategy: config => {
    const data = JSON.parse(config.body);
    const imageName = parseInt(data.imageName);
    return {
      data: [{ label: `云桌面${imageName}`, value: `${imageName}` }, { label: `云桌面${imageName * 2}`, value: `${imageName * 2}` }, { label: `云桌面${imageName * 3}`, value: `${imageName * 3}` }],
      status: 'SUCCESS'
    };
  },
  getInfo: () => {
    return {
      'content': {
        'id': 'xx',
        'terminalName': 'xx',
        'terminalGroupName': 'xxx',
        'terminalState': 'OFFLINE',
        'hardwareVersion': 'xx',
        'lastOfflineTime': '2018-12-18 12:12:12',
        'lastOnlineTime': '2018-12-18 12:12:12',
        'rainUpgradeVersion': '1.1.1',
        'macAddr': 'ss:2b:3v:ss',
        'diskSize': 10000,
        'rainOsVersion': 'xxx',
        'cpuMode': 'xxx',
        'ip': '172.1.1.1',
        'memorySize': 102400,
        'ipConflict': 0,
        'accessInternet': 0,
        'packetLossRate': 0.01,
        'delay': 20.75,
        'bandwidth': 100,
        'detectTime': '2018-12-18 12:12:12',
        'imageName': '212121212121',
        imageState: 'EDITING'
      },
      'status': 'SUCCESS',
      'message': null
    };
  },
  terminalGroups: () => {
    const data = {
      content: {
        itemArr: [{
          label: '终端组A',
          id: '212113',
          children: [{
            label: '终端组A-1',
            id: 3
          }]
        }, {
          label: '终端组B嘻嘻嘻嘻',
          id: 4,
          children: [{
            label: '终端组B-1',
            id: 5
          }, {
            label: '终端组B-2',
            id: 6,
            children: [{
              label: '终端组B-2-1',
              id: 52123243432,
              children: [
                {
                  label: '终端组B--1-1',
                  id: 232432434,
                  children: [
                    {
                      label: '终端组B--1-1-1',
                      id: 2324324343232,
                      children: [
                        {
                          label: '终端组B--1-1-1--1-1-1-1-1-1-1-11-1-1-1-1-11-1-1-2',
                          id: 232432434323221212,
                          children: [
                            {
                              label: '终端组B--1-1-1-2-2-1-1-1-1-1-11-1-1-1-1-1-1-1-11-1-',
                              id: 23243243432322121232323,
                              children: [
                                {
                                  label: '终端组B--1-1-1-2-2-1-1-1--1--1-1-1-1-1-1-1',
                                  id: 23243243432322121232323232,
                                  children: [
                                    {
                                      label: '终端组B--1-1-1-2-2-1-1-1--1--1-1-1-1-1-1-1-1-1-1',
                                      id: 2324324343232212123232322132323232
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }]
          }]
        }]
      },
      status: 'SUCCESS'
    };

    // if (parentId === 'root') {
    //   data.content.itemArr.push({
    //     label: '未分组',
    //     id: 0 + parentId,
    //     disabled: true
    //   })
    // }
    return data;
  },
  userGroups: (config) => {
    const params = JSON.parse(config.body);
    console.log(params);
    const parentId = params.parentId;
    const data = {
      content: {
        itemArr: [{
          label: '用户组A',
          id: '1' + parentId
          // children: [{
          //   label: '用户组A-1',
          //   id: 3
          // }]
        }, {
          label: '用户组B嘻嘻嘻嘻',
          id: 4 + parentId
          // children: [{
          //   label: '用户组B-1',
          //   id: 5
          // }, {
          //   label: '用户组B-2',
          //   id: 6,
          //   children: [{
          //     label: '用户组B-2-1',
          //     id: 52123243432
          // children: [
          //   {
          //     label: '用户组B--1-1',
          //     id: 232432434,
          //     children: [
          //       {
          //         label: '用户组B--1-1-1',
          //         id: 2324324343232,
          //         children: [
          //           {
          //             label: '用户组B--1-1-1--1-1-1-1-1-1-1-11-1-1-1-1-11-1-1-2',
          //             id: 232432434323221212,
          //             children: [
          //               {
          //                 label: '用户组B--1-1-1-2-2-1-1-1-1-1-11-1-1-1-1-1-1-1-11-1-',
          //                 id: 23243243432322121232323,
          //                 children: [
          //                   {
          //                     label: '用户组B--1-1-1-2-2-1-1-1--1--1-1-1-1-1-1-1',
          //                     id: 23243243432322121232323232,
          //                     children: [
          //                       {
          //                         label: '用户组B--1-1-1-2-2-1-1-1--1--1-1-1-1-1-1-1-1-1-1',
          //                         id: 2324324343232212123232322132323232
          //                       }
          //                     ]
          //                   }
          //                 ]
          //               }
          //             ]
          //           }
          //         ]
          //       }
          //     ]
          //   }
          // ]
          // }]
          // }]
        },
        {
          label: '用户组B',
          id: 41 + parentId
        }, {
          label: '用户组B',
          id: 4111 + parentId
        }, {
          label: '用户组B',
          id: 412121232 + parentId
        }, {
          label: '用户组B',
          id: 4121 + parentId
        }, {
          label: '用户组B',
          id: 412121 + parentId
        }, {
          label: '用户组B',
          id: 41222222 + parentId
        }, {
          label: '用户组B',
          id: 413213321 + parentId
        }, {
          label: '用户组B',
          id: 4132321323 + parentId
        }, {
          label: '用户组B',
          id: 415243432 + parentId
        }, {
          label: '用户组B',
          id: 411243432 + parentId
        }, {
          label: '用户组B',
          id: 4154334 + parentId
        }, {
          label: '用户组B',
          id: 41656546455 + parentId
        }, {
          label: '用户组B',
          id: 4143454345 + parentId
        }, {
          label: '用户组B',
          id: 412334345 + parentId
        }, {
          label: '用户组B',
          id: 414345323 + parentId
        }, {
          label: '用户组B',
          id: 41234343 + parentId
        }, {
          label: '用户组B',
          id: 41213123454 + parentId
        }, {
          label: '用户组B',
          id: 414345456 + parentId
        }, {
          label: '用户组B',
          id: 41322132454 + parentId
        }, {
          label: '用户组B',
          id: 41321343545 + parentId
        }, {
          label: '用户组B',
          id: 412345664324 + parentId
        }, {
          label: '用户组B',
          id: 41232435454 + parentId
        }, {
          label: '用户组B',
          id: 4143243454546 + parentId
        }, {
          label: '用户组323232323B',
          id: 4154656576576 + parentId
        }]
      },
      status: 'SUCCESS'
    };

    if (parentId === 'root') {
      data.content.itemArr.push({
        label: '未分组',
        id: 0 + parentId,
        disabled: true
      });
    }
    return data;
  },
  getUsbType: () => {
    sleep(0);
    return {
      content: {
        itemArr: [{
          label: '输入设备',
          id: 'f6088dc9-34e5-417b-acd7-7c3ad8f68061'
        }, {
          label: '存储设备',
          id: '2'
        }, {
          label: '摄像设备',
          id: '3'
        }, {
          label: '音频设备',
          id: '4'
        }]
      },
      status: 'SUCCESS'
    };
  },
  getServerTime: () => {
    const date = dateUtil.format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    return {
      content: {
        date
      },
      status: 'SUCCESS'
    };
  },
  getAlarmType: () => ({
    content: {
      itemArr: [{
        label: 'CPU使用率',
        id: 'CPU_USAGE_RATE'
      }, {
        label: '内存使用率',
        id: 'MEMORY_USAGE_RATE'
      }, {
        label: '磁盘使用率',
        id: 'MEMORY_USAGE_RATE'
      }, {
        label: '网卡异常',
        id: 'NETWORK_CARD_EXCEPTION'
      }, {
        label: '磁盘离线',
        id: 'DISK_OFFLINE'
      }, {
        label: '网卡速率',
        id: 'NETWORK_CARD_SPEED_RATE'
      }, {
        label: 'IP地址',
        id: 'IP_ADDRESS'
      }]
    },
    status: 'SUCCESS'
  }),
  deskStrategyDetail: () => {
    return {
      content: {
        usbTypeIdArr: ['f6088dc9-34e5-417b-acd7-7c3ad8f68061', '2'],
        memory: 8
      },
      status: 'SUCCESS'
    };
  },
  featureLicenseList: () => ({
    content: {
      itemArr: [{
        id: '4545454',
        featureType: '黄金镜像授权',
        fileName: 'sdfihgrehi9378fddhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhghg4587.lic',
        featureCode: 'RCC-CM-NUM',
        featureStatus: 'EXPIRED',
        trialDuration: 25,
        trialRemainder: 0,
        featureDescription: '这是描述描述描述111d111'
      }],
      total: 1
    },
    status: 'SUCCESS'
  }),
  deskNetworkList: () => ({
    content: {
      itemArr: [{
        id: '3844694a-f20e-46cc-ad7d-e582797ddead',
        deskNetworkName: 'ruijie',
        deskNetworkState: 'INITING',
        networkType: 'FLAT',
        vlan: 1,
        ipCidr: '172.21.129.0/24',
        gateway: '172.21.129.1',
        refCount: 0,
        totalCount: 10,
        dnsPrimary: '114.114.114.114',
        dnsSecondary: '192.168.5.28',
        deskIpPoolArr: [{
          deskIpPoolId: 'sfd',
          deskNetworkId: 'fgdf',
          ipStart: '172.21.129.131',
          ipEnd: '172.21.129.140'
        }]
      },
      {
        id: '9dc0d11d-06b3-4ccd-aa27-f42e02be004a',
        deskNetworkName: '192网段',
        deskNetworkState: 'EDITING',
        networkType: 'VLAN',
        vlan: 1,
        refCount: 0,
        totalCount: 10,
        ipCidr: '192.168.10.0/24',
        gateway: '172.21.129.1',
        dnsPrimary: '114.114.114.114',
        dnsSecondary: '192.168.5.28',
        deskIpPoolArr: [{
          deskIpPoolId: 'sfd',
          deskNetworkId: 'fgdf',
          ipStart: '172.21.129.131',
          ipEnd: '172.21.129.140'
        }]
      }, {
        id: '3844694a-f20e-46cc-ad7d-e582797ddead',
        deskNetworkName: 'ruijie2',
        deskNetworkState: 'DELETING',
        vlan: 1,
        ipCidr: '172.21.129.0/24',
        gateway: '172.21.129.1',
        dnsPrimary: '',
        dnsSecondary: '',
        refCount: 0,
        totalCount: 10,
        deskIpPoolArr: [{
          deskIpPoolId: 'sfd',
          deskNetworkId: 'fgdf',
          ipStart: '172.21.129.131',
          ipEnd: '172.21.129.140'
        }]
      }, {
        id: '9dc0d11d-06b3-4ccd-aa27-f42e02be004a',
        deskNetworkName: 'ruijie3',
        deskNetworkState: 'AVAILABLE',
        vlan: 1,
        ipCidr: '172.21.129.0/24',
        gateway: '172.21.129.1',
        refCount: 0,
        totalCount: 10,
        dnsPrimary: '114.114.114.114',
        dnsSecondary: '',
        deskIpPoolArr: [{
          deskIpPoolId: 'sfd',
          deskNetworkId: 'fgdf',
          ipStart: '172.21.129.131',
          ipEnd: '172.21.129.140'
        }]
      }],
      total: 4
    },
    status: 'SUCCESS'
  }),
  deskNetworkDetail: () => ({
    content: {
      deskNetworkId: '9dc0d11d-06b3-4ccd-aa27-f42e02be004a',
      deskNetworkName: 'ruijie3',
      networkType: 'VLAN',
      vlan: 1,
      dnsPrimary: '114.114.114.114',
      dnsSecondary: '192.168.5.28',
      networkConfig: {
        deskNetworkName: 'test111111',
        gateway: '10.168.0.8',
        ipCidr: '10.168.0.0/16',
        ipPoolArr: [{
          deskNetworkId: '64236d3f-e4f3-4324-a548-19bbc8cb807c',
          id: '6102ea17-35c9-4c45-90b9-9404d61f6937',
          ipEnd: '10.168.1.130',
          ipStart: '10.168.1.130',
          refCount: 0,
          totalCount: 0
        }]
      },
      gateway: '10.168.0.8',
      ipCidr: '10.168.0.0/16',
      deskIpPoolUse: {
        refCount: 0,
        totalCount: 10
      },
      ipPoolArr: [{
        deskNetworkId: '64236d3f-e4f3-4324-a548-19bbc8cb807c',
        id: '6102ea17-35c9-4c45-90b9-9404d61f6937',
        ipEnd: '10.168.1.130',
        ipStart: '10.168.1.130',
        refCount: 0,
        totalCount: 0
      }, {
        deskNetworkId: '64236d3f-e4f3-4324-a548-19bbc8cb807c',
        id: '6102ea17-35c9-4c45-90b9-9404d61f6937',
        ipEnd: '10.168.1.130',
        ipStart: '10.168.1.130',
        refCount: 0,
        totalCount: 0
      }]
    },
    message: null,
    msgArgArr: null,
    msgKey: null,
    status: 'SUCCESS'
  }),
  deskPoolList: () => ({
    content: {
      itemArr: [{
        ipStart: '172.21.129.131',
        ipEnd: '172.21.129.140',
        refCount: 0,
        totalCount: 10
      },
      {
        ipStart: '172.21.129.131',
        ipEnd: '172.21.129.140',
        refCount: 0,
        totalCount: 10
      }, {
        ipStart: '172.21.129.131',
        ipEnd: '172.21.129.140',
        refCount: 0,
        totalCount: 10
      }],
      total: 3
    },
    status: 'SUCCESS'
  }),
  deskPoolDetail: () => ({
    content: {
      deskNetworkName: 'test111111',
      id: '6102ea17-35c9-4c45-90b9-9404d61f6937',
      ipEnd: '10.168.0.130',
      ipStart: '10.168.0.130',
      networkConfig: {
        deskNetworkName: 'test111111',
        gateway: '10.168.0.8',
        ipCidr: '10.168.0.0/16',
        ipPoolArr: [{
          deskNetworkId: '64236d3f-e4f3-4324-a548-19bbc8cb807c',
          id: '6102ea17-35c9-4c45-90b9-9404d61f6937',
          ipEnd: '10.168.1.130',
          ipStart: '10.168.1.130',
          refCount: 0,
          totalCount: 0,
          networkId: '64236d3f-e4f3-4324-a548-19bbc8cb807c'
        }, {
          deskNetworkId: '64236d3f-e4f3-4324-a548-19bbc8c5127c',
          id: '6102ea17-35c9-4c45-90b9-9404d61f6937',
          ipEnd: '10.168.0.150',
          ipStart: '10.168.0.135',
          refCount: 0,
          totalCount: 0,
          networkId: '64236d3f-e4f3-4324-a548-19bbc8cb8011'
        }]
      },
      status: 'SUCCESS'
    }
  }),
  deskLicenseDetail: () => ({
    content: {
      isAuthorizationForPerpetual: false,
      isAuthorizationForTemporary: true,
      status: 'SUCCESS'
    }
  })
};
