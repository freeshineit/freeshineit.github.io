---
title: javascript 版 React 别名（alias）
summary: 使用 @craco/craco 和 jsconfig.json 配置 React jsx 别名
tags: [React]  #设置标签
keywords: React, config
categories:
- React
date: 2021-11-10
img: /images/cover/react.jpg  #设置本地图片
coverImg: /images/cover/react-banner.jpg  #设置本地图片
---

## 说明

虽然说近几年已经不在写 javascript 版 React 了，一直在用 typescript 但是最近接了个外包，其他小伙伴不太熟 typescript。所以就打算配置一下使用 javascript 环境项目的别名。

使用[create-react-app](https://create-react-app.dev/) 创建 javascript 版 React 项目，安装 [`@craco/craco`](https://github.com/gsoft-inc/craco)。

具体配置省略，接下来主要说用别名的配置。（想要了解具体配置请参考https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation）

## craco 中配置 webpack

在根目录`craco.config.js`文件中配置别名

```js
module.exports = {
  webpack: {
    // .... 其他配置
    alias: {
      // 文件路径别名
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@store": path.resolve(__dirname, "src/store")
    }
  }
};
```

## jsconfig.json

在根目录下新建`jsconfig.json`, 添加下面内容即可。

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@components/*": ["./src/components/*"],
      "@assets/*": ["./src/assets/*"],
      "@containers/*": ["./src/containers/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@store/*": ["./src/store/*"],
      "@utils/*": ["./src/utils/*"]
    }
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "build", "coverage", "dist", "lib"]
}
```

注意 ⚠️： 这个文件有严格的 json 格式要求， 例如最后一项不能有`,` 等

❤️ ❤️ 还是 ts 香 ❤️ ❤️