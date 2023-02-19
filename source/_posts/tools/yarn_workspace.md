---
title: Yarn workspace
summary: Yarn workspace 使用说明
tags: [Yarn]  #设置标签
keywords: Yarn, workspace
categories:
- Yarn
- tool
date: 2021-08-05
img: /images/cover/mac.jpg  #设置本地图片
---

## 说明

[yarn Workspaces](https://yarnpkg.com/features/workspaces) 旨在简化 monorepos 的使用，以更具声明性的方式解决 yarn 链接的主要用例之一。简言之，它们允许您的多个项目一起生活在同一个存储库中，并相互交叉引用——对一个项目的源代码的任何修改都会立即应用于其他项目。

首先，一些词汇：在工作区特性的上下文中，项目是组成工作区的整个目录树（通常是存储库本身）。工作区是由同一项目中您自己的源组成的本地包。最后，工作树是为列出自己的子工作空间的工作空间指定的名称。项目包含一个或多个工作树，这些工作树本身可能包含任意数量的工作空间。任何项目都至少包含一个工作区：根工作区。


## 创建

- 初始化

```bash
mkdir yarn_workspaces && cd yarn_workspaces

# 初始化
# 配置 package.json
yarn init

mkdir packages

# 配置 workspaces
# "workspaces": [
#  "packages/*"
# ]
```

- 配置根目录下`package.json`

```json
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

- create common package (components、utils...)

  - 初始化 `@mono/common` package

  ```bash
  cd packages && mkdir common

  yarn init -y

  mkdir components && mkdir utils
  ```

  - 配置 `package.json`

  ```json
  {
    "name": "@mono/common",
    "main": "index.ts"
  }
  ```

  注：由于整个项目都是基于`typescript`的, 所以 `main` 就直接指定 `index.ts`。如果要发布到 npm 上最好还是使用`.js`。

- create mobile web app (html5)

  - 初始化 app

  ```bash
  cd packages && mkdir mobile

  # 创建 index.html
  touch index.html
  ```

- create web app (react spa)

  - 初始化 app

  ```bash
  cd packages

  # 创建 react spa app
  yarn create react-app my-app --template typescript
  ```

  - scripts

  在项目根目录下`package.json`中`scripts`添加下面脚本

  ```json
  {
    "react-sap-app": "yarn workspace react-spa-app start"
  }
  ```

  - 配置使用本地 package

  ```bash
  # 安装 @craco/craco
  # 在不执行`eject`的条件下注入webpacke等 配置
  yarn add @craco/craco -D
  ```

  在`react-spa-app`根目录下新建创建`craco.config.js`文件

  ```js
  const path = require("path");
  const { getLoader, loaderByName } = require("@craco/craco");

  // 配置包括根目录以外文件路径
  // absolutePath 包名 `@mono/common`
  // 在`react-spa-app`项目中可以直接使用 import nameFn from "@mono/common"
  const absolutePath = path.join(__dirname, "../common");

  module.exports = {
    webpack: {
      alias: {},
      plugins: [],
      configure: (webpackConfig, { env, paths }) => {
        const { isFound, match } = getLoader(
          webpackConfig,
          loaderByName("babel-loader")
        );
        if (isFound) {
          const include = Array.isArray(match.loader.include)
            ? match.loader.include
            : [match.loader.include];
          match.loader.include = include.concat[absolutePath];
        }
        return webpackConfig;
      }
    }
  };
  ```

- create ssr web app (next.js)

  - 初始化 ssr web app

  ```bash
  cd packages

  # 创建 react ssr app
  yarn create next-app --example with-typescript nextjs-app
  ```

  - scripts

  在项目根目录下`package.json`中`scripts`添加下面脚本

  ```json
  {
    "react-sap-app": "yarn workspace nextjs-app dev"
  }
  ```

  - 配置使用本地 package

  ```bash
  # 注意⚠️ `next-transpile-modules`版本有很大区别
  # https://www.npmjs.com/package/next-transpile-modules#user-content-compatibility-table
  yarn add next-transpile-modules -D
  ```

  在`nextjs-app`根目录下新建创建`next.config.js`文件

  ```js
  // pass the modules you would like to see transpiled
  const withTM = require("next-transpile-modules")(["@mono/common"]);
  module.exports = withTM();
  ```

- 配置

- create service app (koa service)

  - 初始化 service app

  ```bash

  cd packages && mkdir koa-service-app && cd koa-service-app

  yarn init -y

  # 创建服务入口
  touch server.ts

  yarn add typescript ts-node @types/node nodemon -D
  ```

  - scripts

  在`koa-service-app`目录下`package.json`中`scripts`添加下面脚本

  ```json
  {
    "dev": "nodemon --watch './**/*.ts' --watch '../common/**/*.ts' --exec 'ts-node' server.ts"
  }
  ```

  在项目根目录下`package.json`中`scripts`添加下面脚本

  ```json
  {
    "koa-service-app": "yarn workspace koa-service-app dev"
  }
  ```

## scripts 说明

```bash
# 启动 mobile app
# 首先已经安装 http-server
http-server -p ./package/mobile

# 启动 react spa app
yarn workspace react-spa-app start

# 启动 next.js ssr app
yarn workspace nextjs-app dev

# 启动 koa node server
yarn workspace koa-service-app start
```

## yarn workspace cli

```bash
# root install dependency xxxxx
yarn add -W -D xxxxx

# root remove dependency xxxxx
yarn remove -W xxxxx

# package app1 install dependency xxxx
yarn workspace app1 add xxxx

# run app1 dev
yarn workspace app1 dev

# build all package
yarn workspaces run build
```

## 提取公共依赖包

把各个项目中公共依赖提取到根目录`package.json`中方便统一管理

```json
{
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@craco/craco": "^6.1.2",
    "@types/koa": "^2.13.3",
    "@types/node": "^15.12.4",
    "@types/react": "^17.0.11",
    "@types/react-dom": "^17.0.8",
    "koa": "^2.13.1",
    "next": "^11.0.1",
    "next-transpile-modules": "^8.0.0",
    "ts-node": "^10.0.0",
    "typescript": "^4.3.4",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "react-scripts": "4.0.3"
  }
}
```


## 注意事项

- 如果本地新增 package 记得执行 `yarn install`

## 版本管理

如果想对版本进行管理可以结合 [leran](https://lerna.js.org/)

## github 地址

[yarn workspaces monorepo](https://github.com/qqxs/monorepo)

## 参考

- [yarn workspace](https://yarnpkg.com/features/workspaces)
- [create-react-app](https://create-react-app.dev/docs/adding-typescript)
- [next.js](https://nextjs.org/)
- [koa2](https://koajs.com/)
- [nodemon](https://nodemon.io/)
