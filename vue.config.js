module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8080',
        https: false,   //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy: null,
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
    }
}