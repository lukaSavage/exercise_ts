const CracoLessPlugin = require('craco-less');
const path = require('path');

/**
 * 总共需要下载的包
 * yarn add antd                                         // 必备
 * yarn add @craco/craco                                 //（一个对 create-react-app 进行自定义配置的社区解决方案）
 * yarn add craco-less                                   // 主要配置less( 内部自动安装 less less-loader 相关依赖 )
 * yarn add @babel/plugin-proposal-decorators --dev      // 用来支持装饰器
 * yarn add babel-plugin-import                          // 用来配置antd的less按需加载
 */
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                // 1.配置自定义主题
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": '#1890ff', // 全局主色
                            '@link-color': '#1890ff', // 链接色
                            '@success-color': '#52c41a', // 成功色
                            '@warning-color': '#faad14', // 警告色
                            '@error-color': '#f5222d', // 错误色
                            // '@font-size-base': '14px', // 主字号
                            // '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
                            // '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
                            // '@text-color-secondary': 'rgba(0, 0, 0, .45)', // 次文本色
                            // '@disabled-color': 'rgba(0, 0, 0, .25)', // 失效色
                            // '@border-radius-base': '4px', // 组件/浮层圆角
                            // '@border-color-base': '#d9d9d9', // 边框色
                            // '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影 },
                            '@input-hover-border-color': '#5693FE'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    // 2.配置装饰器语法和按需加载
    babel: {
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true //设置为true即是less
                }
            ]
        ]
    },
    // 3.配置代理解决跨域
    devServer: {
        proxy: {
            "/api": {
                target: "http://baidu.com",
                //target: 'http://192.168.9.19:8080',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    // 4.配置路径别名
    webpack: {
        // 别名
        alias: {
            "@": path.resolve("src"),
        }
    },
};