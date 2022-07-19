const { defineConfig } = require('@vue/cli-service')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://demo.com', // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        pathRewrite: {
          // '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api' 转接为 http://localhost:8081/
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@img', resolve('src/assets/img/'))
      .set('@utils', resolve('src/utils'))
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // 忽略自定义标签警告 vue3 app.config.compilerOptions.isCustomElement 配置有问题
          isCustomElement: (tag) => {
            return ['xml', 'block', 'mutation', 'category'].includes(tag)
          }
        }
      }))
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path][base].gzip',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240, // 内容超过10KB进行压缩
        minRatio: 0.8
      })
    ]
  },
  // 第三方插件配置
  pluginOptions: {}
})
