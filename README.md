
## 功能


## 开发

	# 安装依赖
	npm install
	
	   
	# 204 npm 私有库中下载
	npm install --registry=http://172.21.192.204:8082/

	# 启动服务
	npm run dev
```
浏览器访问 http://127.0.0.1:3000

## 发布
```bash
	# 构建测试环境
	npm run build:sit

	# 构建生成环境
	npm run build:prod
```

## 其它
```bash
	# --report to build with bundle size analytics
	npm run build:prod --report

	# --preview to start a server in local to preview
	npm run build:prod --preview

	# lint code
	npm run lint
```


## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 图片等静态资源
│   ├── assist                 // 系统辅助类
|   |   └── temporary          // 临时文件夹，里面存放着临时文件，如：我们现在集成旧系统，需要我们这边支撑一些第三库，但随着系统代码重构后，这些代码最后是会删除
|   |   └── errorLog           // 系统脚本出错日志
|   |   └── notify.js          // dwr推送接口
|   |   └── permission.js      // 权限管理  
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局 filter
│   ├── icons                  // 项目svg icons
│   ├── lang                   // 国际化 lang
│   ├── mock                   // 项目mock 模拟数据
│   ├── plugins                // vue插件
│   ├── router                 // 路由
│   ├── store                  // 全局 store
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── views                  // views
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口js 初始化 加载组件等
├── static                     // 第三方不打包资源
├── .babelrc                   // babel-loader 配置
├── .eslintrc.js               // eslint 配置项
├── .postcssrc.js              // postcss 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```
