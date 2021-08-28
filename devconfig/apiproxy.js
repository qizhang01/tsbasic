const path = require('path');
module.exports = {
    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
    proxy: {
        // 例如将'localhost:8900/api/xxx'代理到'https://wangyaxing.cn/api/xxx'
        '/api': {
            target: 'http://10.86.8.69:8080', // 接口的域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        }
    },
}