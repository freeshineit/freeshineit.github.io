---
title: react-scripts5 + craco7 + antd4 配置
summary: 使用react-scripts@5 结合 @craco/craco@7 配置 antd4
tags: [React]  #设置标签
keywords: React, config
categories:
- React
date: 2024-10-01
img: /images/cover/react.jpg  #设置本地图片
coverImg: /images/cover/react-banner.jpg  #设置本地图片
---


## 安装依赖

```bash
pnpm add less less-loader @craco/craco craco-less babel-plugin-import postcss-px-to-viewport-8-plugin postcss -D
```

## config

配置支持 antd4 按需加载、定制主题、支持 px 转 vw 和 配置别名

在项目的根目录下新建 `craco.config.js`

```js
const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    // 配置babel插件
    plugins: [
      [
        // 安装 babel-plugin-import  https://www.npmjs.com/package/babel-plugin-import
        // https://4x.ant.design/docs/react/customize-theme-cn#%E6%B2%A1%E6%9C%89%E7%94%9F%E6%95%88%EF%BC%9F
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true // 加载less文件
        }
      ]
    ]
  },
  style: {
    postcss: {
      mode: "exclude",
      loaderOptions: {
        postcssOptions: {
            // postcss 需要大于等于 8
          ident: "postcss",
          plugins: [
            [
              // https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin
              "postcss-px-to-viewport-8-plugin",
              {
                unitToConvert: "px", // 要转化的单位
                viewportWidth: 375, // UI设计稿的宽度
                viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用 rem
                fontViewportUnit: "vw", // 字体使用的视口单位
                unitPrecision: 13, // 指定`px`转换为视窗单位值的小数后 x位数
                // propList: 当有些属性的单位我们不希望转换的时候，可以添加在数组后面，并在前面加上!号，如propList: ["*","!letter-spacing"],这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的
                propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                // 转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，就不会被匹配。比如selectorBlackList: ['wrap'],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
                selectorBlackList: ["ignore"], // 指定不转换为视窗单位的类名，
                minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                replace: true, // 是否转换后直接更换属性值
                exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
                landscape: false // 是否处理横屏情况
              }
            ]
          ]
        }
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: { // less >= 4, less-loader >= 11
            modifyVars: {
              "primary-color": "#1DA57A",
              "link-color": "#1DA57A",
              "border-radius-base": "2px"
              // 更改antd 默认的类名前缀，结合 ConfigProvider 使用 https://4x.ant.design/docs/react/customize-theme-variable-cn#%E4%BB%A3%E7%A0%81%E8%B0%83%E6%95%B4
              // "@ant-prefix": "custom"
            },
            javascriptEnabled: true // 允许less文件中使用js表达式
          }
        }
      }
    }
  ],
  webpack: {
    // .... 其他配置
    alias: {
      // 文件路径别名
      "@": path.resolve(__dirname, "src")
    }
  },
//   devServer: {}
};

```



## 参考

[create-react-app](https://create-react-app.dev/)
[@craco/craco](https://craco.js.org/docs/)
[antd4](https://4x.ant.design/docs/react/customize-theme-cn)
[postcss-px-to-viewport-8-plugin](https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin)


备注：由于 [react-scripts](https://www.npmjs.com/package/react-scripts) 不在更新维护，推荐编译工具换成 [vite](https://cn.vitejs.dev/guide/)