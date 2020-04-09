module.exports = {
  publicPath: './',
  outputDir: 'dist',

  // assetsDir: 'static',

  // filenameHashing: true,

  // // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  // transpileDependencies: [],

  // // 生产环境 sourceMap
  // productionSourceMap: false,

  // // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // // corsUseCredentials: false,
  // // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // configureWebpack: (config) => {
  // },

  // // webpack 链接 API，用于生成和修改 webapck 配置
  // // https://github.com/mozilla-neutrino/webpack-chain
  // chainWebpack: (config) => {
  //   // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
  //   config.optimization
  //     .splitChunks({
  //       cacheGroups: {}
  //     })

  //   // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
  // },

  // // 配置高于chainWebpack中关于 css loader 的配置
  // css: {
  //   // 是否开启支持 foo.module.css 样式
  //   requireModuleExtension: false,

  //   // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
  //   extract: true,

  //   // 是否构建样式地图，false 将提高构建速度
  //   sourceMap: false,

  //   // css预设器配置项
  //   loaderOptions: {
  //     css: {
  //       // options here will be passed to css-loader
  //     },

  //     postcss: {
  //       // options here will be passed to postcss-loader
  //     }
  //   }
  // },

  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,

    host: '0.0.0.0',

    port: 3000,

    https: false,

    proxy: 'https://tianqiapi.com'
  }
  // proxyTable: {
  //   '/api':
  //   {
  //     target :'http://2z431s2133.wicp.vip:20570/work',
  //     changeOrigin:true,
  //     pathRewriteL:{
  //       '^api':''
  //     }
  //   }
  // }
  // // 构建时开启多进程处理 babel 编译
  // parallel: require('os').cpus().length > 1,

  // // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // pwa: {},

  // // 第三方插件配置
  // pluginOptions: {}
}
