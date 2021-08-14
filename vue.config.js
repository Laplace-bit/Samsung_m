module.exports = {
    outputDir: 'dist', //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '9001',
        https: false, //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy: {
            '/api': {
                target: 'https://www.samsungeshop.com.cn/api',
                //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/userapi': {
                target: 'http://121.89.245.207/samsung/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/userapi': ''
                }
            }

        },
    },
    chainWebpack: config => {
        //发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
            //entry找到默认的打包入口，调用clear则是删除默认的打包入口
            //add添加新的打包入口
            config.entry('app').clear().add('./src/main-prod.js')
            //使用externals设置排除项
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios'
            })
            config.plugin('html').tap(args => {
                //添加参数isProd
                args[0].isProd = true
                return args
            })
        })
        //开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')
            config.plugin('html').tap(args => {
                //添加参数isProd
                args[0].isProd = false
                return args
            })
        })
    },


}