const path = require('path')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: 'static',
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin()
    ]
  }
}
