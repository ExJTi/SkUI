'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}


const env = require('../config/' + process.env.env_config + '.env')

const seen = new Set()
const nameLength = 4

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js')
  },
  plugins: [

    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'), 
      manifest: require('./vendor-manifest.json')
    }),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:8].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash:8].css')
    }),

    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: config.build.index,
    //   template: 'index.html',
    //   inject: true,
    //   favicon: resolve('favicon.ico'),
    //   title: 'rcdc',
    //   templateParameters: {
    //     BASE_URL: config.build.assetsPublicPath + config.build.assetsSubDirectory,
    //   },
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   }
    //   // default sort mode uses toposort which cannot handle cyclic deps
    //   // in certain cases, and in webpack 4, chunk order in HTML doesn't
    //   // matter anyway
    // }),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),

    // new ScriptExtHtmlWebpackPlugin({
    //   //`runtime` must same as runtimeChunk name. default is `runtime`
    //   inline: /runtime\..*\.js$/
    // }),
    // keep chunk.id stable when chunk has no name
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name
      }
      const modules = Array.from(chunk.modulesIterable)
      if (modules.length > 1) {
        const hash = require('hash-sum')
        const joinedHash = hash(modules.map(m => m.id).join('_'))
        let len = nameLength
        while (seen.has(joinedHash.substr(0, len))) len++
        seen.add(joinedHash.substr(0, len))
        return `chunk-${joinedHash.substr(0, len)}`
      } else {
        return modules[0].id
      }
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),    
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // 共有三个值可选：initial(初始模块)、async(按需加载模块)和all(全部模块)
      minSize: 30000, // 模块超过30k自动被抽离成公共模块
      minChunks: 2, // 模块被引用>=2次，便分割
      maxAsyncRequests: 5,  // 异步加载chunk的并发请求数量<=5
      maxInitialRequests: 3, // 一个入口并发加载的chunk数量<=3
      name: true, // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
      automaticNameDelimiter: '~', // 命名分隔符
      cacheGroups: {
        // default: { // 模块缓存规则，设置为false，默认缓存组将禁用
        //   minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
        //   priority: -20, // 优先级
        //   name:'vendors',
        //   reuseExistingChunk: true, // 默认使用已有的模块
        // },
        // lodash: {
        //   test: /[\\/]node_modules[\\/]lodash[\\/]/,
        //   priority: -5
        // },
        libs: {
          // minChunks: 2, // 模块被引用>=1次，便分割
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'all' // 只打包初始时依赖的第三方
        },
        // vendors: {
        //   test: /[\\/]node_modules[\\/]/, // 表示默认拆分node_modules中的模块
        //   priority: -10
        // },
        
       
        // echartsUI: {
        //   test: (module) => {
        //     return /echarts|zrender/.test(module.context);
        //   }, 
        //   name: 'chunk-echarts', // 单独将 elementUI 拆包
        //   priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
        //   // test: /[\\/]node_modules[\\/]echarts[\\/]/
        // },
        
       
        // skyEngine: {
        //   name: 'chunk-skyEngine', // 单独将 skyEngine 拆包
        //   priority: 70, // 权重要大于libs 和 app ,elementUI ,skUI 不然会被打包进 libs 或者 app、elementUI、skUI不然会被打包进
        //   test: /[\\/]node_modules[\\/]sky-engine[\\/]/
        // },
        // plupload: {
        //   name: 'plupload', // 单独将 plupload 拆包
        //   priority: 80, 
        //   test: /[\\/]node_modules[\\/]plupload[\\/]/
        // },
        // elementUI: {
        //   name: 'chunk-elementUI', // 单独将 elementUI 拆包
        //   priority: 30, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
        //   test: /[\\/]node_modules[\\/]element-ui[\\/]/
        // }
        //  skUI: {
        //   name: 'chunk-skUI', // 单独将 sk-ui 拆包
        //   priority: 40, // 权重要大于 libs 和 app ,elementUI不然会被打包进 libs 或者 app、elementUI不然会被打包进
        //   test: /[\\/]node_modules[\\/]sk-ui[\\/]/
        // },
        // vnc: {
        //   name: 'vnc', // 单独将 vnc 拆包
        //   priority: 60, 
        //   test: /[\\/]node_modules[\\/]vnc[\\/]/
        // }
      }
    },
    runtimeChunk: 'single',
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            safari10: true
          }
        },
        sourceMap: config.build.productionSourceMap,
        cache: true,
        parallel: true
      }),
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin()
    ]
  }
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' + config.build.productionGzipExtensions.join('|') + ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.generateAnalyzerReport || config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

  if (config.build.bundleAnalyzerReport) {
    webpackConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort: 8080,
        generateStatsFile: false
      })
    )
  }

  if (config.build.generateAnalyzerReport) {
    webpackConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'bundle-report.html',
        openAnalyzer: false
      })
    )
  }
}

module.exports = webpackConfig
