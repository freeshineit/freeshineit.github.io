---
title: webpack5 配置项
summary: webpack5 配置项说明
tags: [webpack5]  #设置标签
date: 2022-11-13
keywords: webpack
categories:
- webpack
- tool
img: /images/cover/webpack.png  #设置本地图片
coverImg: /images/cover/webpack-banner.png  #设置本地图片
---


## webpack5 配置项

webpack [WebpackOptions](https://sourcegraph.com/github.com/webpack/webpack@main/-/blob/declarations/WebpackOptions.d.ts)

https://webpack.docschina.org/configuration/other-options

```ts
export interface WebpackOptions {
  /**
   * 设置`require.amd`和`define.amd`的值。或者禁用AMD支持。
   */
  amd?: false | { [k: string]: any };
  /**
   * 在第一个错误出现时抛出失败结果，而不是容忍它;  true: 将会致使 webpack 在发现错误时尽快退出。
   */
  bail?: boolean;
  /**
   * 缓存生成的 modules 和 chunks，以提高多个增量构建的性能。
   */
  cache?: boolean | MemoryCacheOptions | FileCacheOptions;
  /**
   * 基本目录（绝对路径！）用于解析`entry`选项。如果设置了`output.pathinfo`，则包含的pathinfo将缩短到此目录。
   */
  context?: string; // Context;
  /**
   * 对要依赖的其他配置的引用。
   */
  dependencies?: string[]; // Dependencies;
  /**
   * https://webpack.js.org/configuration/dev-server/
   * webpack-dev-server的选项
   */
  devServer?: DevServer;
  /**
   * 用于增强调试的开发工具 (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
   */
  devtool?: DevTool;
  /**
   * 编译的入口点
   */
  entry?: Entry;
  /**
   * 启用/禁用实验（具有relax-SemVer兼容性的实验功能）
   */
  experiments?: Experiments;
  /**
   * 指定不应该由webpack解析，但应该成为结果包的依赖项的依赖项。依赖关系的类型取决于`output.libraryTarget`。
   */
  externals?: Externals;
  /**
   * 为特定目标启用外部预设
   */
  externalsPresets?: ExternalsPresets;
  /**
   * 指定外部的默认类型（'amd*'、'umd*'，'system'和'jsonp'取决于设置为相同值的output.libraryTarget）。
   */
  externalsType?: ExternalsType;
  /**
   * https://webpack.docschina.org/configuration/other-options/#ignorewarnings
   * 忽略特定警告
   */
  ignoreWarnings?: IgnoreWarnings;
  /**
   * https://webpack.docschina.org/configuration/other-options/#infrastructurelogging
   * 用于基础设施水平的日志选项
   */
  infrastructureLogging?: InfrastructureLogging;
  /**
   * https://webpack.docschina.org/configuration/other-options/#loader
   * loader上下文中可用的自定义值
   */
  loader?: Loader;
  /**
   * 启用生产优化或开发提示
   */
  mode?: "development" | "production" | "none";
  /**
   * 影响正常模块的选项（`NormalModuleFactory`）
   */
  module?: ModuleOptions;
  /**
   * https://webpack.docschina.org/configuration/other-options/#name
   * 配置的名称。加载多个配置时使用。
   */
  name?: string; //Name;
  /**
   * 包括各种节点填充的polyfill或mock
   */
  node?: Node;
  /**
   * https://webpack.docschina.org/configuration/optimization/#root
   * 启用/禁用集成优化
   */
  optimization?: Optimization;
  /**
   * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
   * 影响编译输出的选项. `output`选项告诉`webpack`如何将编译后的文件写入磁盘。
   */
  output?: Output;
  /**
   * https://webpack.docschina.org/configuration/other-options/#parallelism
   * 编译中并行处理的模块数
   * 默认 100
   */
  parallelism?: number; //Parallelism;
  /**
   * https://webpack.docschina.org/configuration/performance/#root
   * web性能建议的配置
   */
  performance?: Performance;
  /**
   * https://webpack.docschina.org/configuration/plugins/#plugins
   * 向编译器添加其他插件.
   *
   * https://sourcegraph.com/github.com/webpack/webpack-cli/-/blob/packages/webpack-cli/src/plugins/CLIPlugin.ts?L11
   * webpack-cli 会默认在数组的最前面插入 CLIPlugin 的实例  (why ??) 主要是在控制台输出内容（打印日志）
   */
  plugins?: Plugins;
  /**
   * https://webpack.docschina.org/configuration/other-options/#profile
   * 捕获每个模块的计时信息
   */
  profile?: Profile;
  /**
   * https://webpack.docschina.org/configuration/other-options/#recordsinputpath
   * 将编译器状态存储到json文件中, 指定读取最后一条记录的文件的名称。这可以用来重命名一个记录文件
   */
  recordsInputPath?: string | false; // RecordsInputPath;
  /**
   * https://webpack.docschina.org/configuration/other-options/#recordsoutputpath
   * 从json文件加载编译器状态
   */
  recordsOutputPath?: string | false; // RecordsOutputPath;
  /**
   * https://webpack.docschina.org/configuration/other-options/#recordspath
   * 开启这个选项可以生成一个 JSON 文件，其中含有 webpack 的 "records" 记录 - 即「用于存储跨多次构建(across multiple builds)的模块标识符」的数据片段。可以使用此文件来跟踪在每次构建之间的模块变化。只要简单的设置一下路径,就可以生成这个 JSON 文件
   */
  recordsPath?: RecordsPath;
  /**
   * 解析器选项
   */
  resolve?: Resolve;
  /**
   * https://webpack.docschina.org/configuration/resolve/#resolveloader
   * 解析loaders时解析程序的选项
   */
  resolveLoader?: ResolveLoader;
  /**
   * 影响文件系统快照创建和验证方式的选
   */
  snapshot?: SnapshotOptions;
  /**
   * 统计选项对象或预设名称
   * 默认: {colors:false,preset:'normal'}
   */
  stats?: StatsValue;
  /**
   * 要构建的环境。尽可能为所有用户构建一系列环境
   */
  target?: string | false | string[]; // Target;
  /**
   * https://webpack.docschina.org/configuration/watch#root
   * 启用 Watch 模式，该模式将在文件更改时重建
   * Compiler 支持可以监控文件系统的 监听(watching) 机制，并且在文件修改时重新编译。
   * 当处于监听模式(watch mode)时， compiler 会触发诸如 watchRun, watchClose 和 invalid 等额外的事件
   *
   */
  watch?: boolean; // Watch;
  /**
   * https://webpack.docschina.org/configuration/watch#watchoptions
   * 一组用来定制 watch 模式的选项
   */
  watchOptions?: WatchOptions;
}
```

## loader

```ts
/**
 * Custom values available in the loader context.
 */
export interface Loader {
  [k: string]: any;
}
```

## plugin

```ts
/**
 * 向编译器添加其他插件
 */
export type Plugins = (WebpackPluginInstance | WebpackPluginFunction)[];

/**
 * 插件实例
 */
export interface WebpackPluginInstance {
  /**
   * The run point of the plugin, required method.
   */
  apply: (compiler: import("../lib/Compiler")) => void;
  [k: string]: any;
}

/**
 * Function acting as plugin.
 */
export type WebpackPluginFunction = (
  this: import("../lib/Compiler"),
  compiler: import("../lib/Compiler")
) => void;
```
