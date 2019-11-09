const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias 
      .set('@',path.join(__dirname,'src'))
      .set('assets',path.join(__dirname,'src/assets'))
      .set('components',path.join(__dirname,'src/components'))
      .set('filters',path.join(__dirname,'src/filters'))
      .set('layout',path.join(__dirname,'src/layout'))
      .set('router',path.join(__dirname,'src/router'))
      .set('store',path.join(__dirname,'src/store'))
      .set('utils',path.join(__dirname,'src/utils'))
      .set('views',path.join(__dirname,'src/views'))
  },
  devServer: {
    open: true,
    // proxy: {
    //   '/shop': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true
    //   }
    // }
  }
}