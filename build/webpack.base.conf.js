'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const os = require('os');
const { VueLoaderPlugin } = require('vue-loader');
const vueLoaderConfig = require('./vue-loader.conf');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

let HTMLPlugins = [];
let Entries = {};

config.HTMLDirs.forEach(item => {
  let filename = item.page === 'app' ? 'index.html' : `free_${item.page}.html`;

  // if (item.dir) filename = `${item.dir}/${item.page}.html`;
  const htmlPlugin = new HtmlWebpackPlugin({
    template: 'index.html',
    inject: true,
    favicon: resolve('favicon.ico'),
    templateParameters: {
      title: item.title,
      BASE_URL: process.env.NODE_ENV === 'production' ? (config.build.assetsPublicPath + config.build.assetsSubDirectory) : (config.dev.assetsPublicPath + config.dev.assetsSubDirectory)
    },
    filename: filename, // 生成到dist目录下的html文件名称，支持多级目录（eg: `${item.page}/index.html`）
    chunks: [item.page], // html文件中需要要引入的js模块，这里的 vendor 是webpack默认配置下抽离的公共模块的名称
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
  });
  HTMLPlugins.push(htmlPlugin);
  Entries[item.page] = item.path ? `${item.path}/${item.page}/index.js` : path.resolve(__dirname, `../src/pages/${item.page}/index.js`); // 根据配置设置入口js文件
});

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test'), resolve('node_modules/sk-ui-web')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
});

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const createHappyPlugin = (id, loaders) => new HappyPack({
  id: id,
  loaders: loaders,
  threadPool: happyThreadPool,
  verbose: true // make happy more verbose with HAPPY_VERBOSE=1
});

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: Entries,
  // entry: {
  //   app: './src/main.js'
  // },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    modules: [ // 指定以下目录寻找第三方模块，避免webpack往父级目录递归搜索
      resolve('src'),
      resolve('node_modules')
    ],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': resolve('src'),
      'sky-engine': 'sk-ui-2.x/lib/sk-ui-web/src',
      'sk-ui': 'sk-ui-2.x/lib/sk-ui',
      'element-ui': 'sk-ui-2.x/lib/element-ui',
      'su-var': 'sk-ui-2.x/lib/sk-ui-css-var',
      'sk-ui-fileupload': 'sk-ui-2.x/lib/sk-ui-fileupload/src/plupload.dev.js',
      'sk-ui-css-var': 'sk-ui-2.x/lib/sk-ui-css-var',
      'vnc': 'sk-ui-2.x/lib/sk-ui-vnc/src',
      'vue-router': 'sk-ui-2.x/lib/vue-router/lib/vue-router.common.js'
      // 'vue-router': 'sk-ui-2.x/lib/vue-router/lib/vue-router.common.js'
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/sk-ui-2.x/lib/sk-ui-web')],
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        // loader: 'babel-loader?cacheDirectory',
        loader: 'happypack/loader?id=happy-babel',
        include: [resolve('src'), resolve('test'), resolve('node_modules/sk-ui-2.x/lib/sk-ui-web'), resolve('node_modules/skwebsocket'), resolve('node_modules/echarts-for-vue/src')]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/assets/images/svg_icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },

      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/assets/styles/css_images'), resolve('src/assets/temporary/style/images')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        include: [resolve('src/assets/styles/css_images')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          publicPath: function(url) {
            return '../../' + url;
          }
        }
      },

      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },

      {
        test: /\.(woff2?|eot|ttf|svg|otf)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/assets/images/svg_icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          publicPath: function(url) {
            return '../../' + url;
          }
        }
      }
    ]
  },

  externals: {
    // 'vue': 'vue',
    // 'vue-router': 'vue-router',
    // 'vuex': 'vuex',
    // 'axios': 'axios',
    // "vue-i18n":"vue-i18n"
  },

  // config.build.bundleAnalyzerReport
  plugins: [new VueLoaderPlugin(),
    ...HTMLPlugins, // 利用 HTMLWebpackPlugin 插件合成最终页面
    createHappyPlugin('happy-babel', [{
      loader: 'babel-loader',
      options: {
        babelrc: true,
        cacheDirectory: true // 启用缓存
      }
    }])
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
