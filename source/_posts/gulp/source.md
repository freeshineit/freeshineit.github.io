---
title: Gulp 源码分析
tags: [gulp]  #设置标签
keywords: gulp
categories:
- 技术
- gulp
image: /images/20200421200902.jpg  #设置本地图片
---



## Gulp

```js
"use strict";

var util = require("util");
// https://www.npmjs.com/package/undertaker
// undertaker类提供了task，series，parallel，get，set，tree和registry方法
// undertaker类继承于node核心类eventemitter
var Undertaker = require("undertaker");
// https://www.npmjs.com/package/vinyl-fs
// vinyl是vitual file formate虚拟文件格式，用于描述一个文件。
// 它有两个主要的属性，path属性和contents属性。每一个Vinyl实例代表一个独立的文件、目录或者symlink符号连接。
var vfs = require("vinyl-fs");
// https://www.npmjs.com/package/glob-watcher
// 观察globs并在更改时执行一个函数，并使用智能默认值取消绑定和排队。
var watch = require("glob-watcher");

function Gulp() {
  // 改变Undertaker的this 指向，指向Gulp
  Undertaker.call(this);

  // Bind the functions for destructuring
  this.watch = this.watch.bind(this);
  // 任务。 由undertaker类提供
  this.task = this.task.bind(this);
  // 任务顺序依次执行。 由undertaker类提供
  this.series = this.series.bind(this);
  // 将任务功能或组合操作组合成并行执行的较大操作。 由undertaker类提供
  this.parallel = this.parallel.bind(this);
  // https://www.gulpjs.com.cn/docs/api/registry/
  // 允许将自定义的注册表插入到任务系统中，以期提供共享任务或增强功能。
  // 由undertaker类提供
  this.registry = this.registry.bind(this);
  // 获取当前任务依赖关系树。 由undertaker类提供
  this.tree = this.tree.bind(this);
  // 由undertaker类提供
  this.lastRun = this.lastRun.bind(this);
  // 创建一个流，用于从文件系统读取 Vinyl 对象。由 vinyl-fs 提供
  this.src = this.src.bind(this);
  // 创建一个用于将 Vinyl 对象写入到文件系统的流。由 vinyl-fs 提供
  this.dest = this.dest.bind(this);
  // 符号链接。 由 vinyl-fs 提供
  this.symlink = this.symlink.bind(this);
}

// https://nodejs.org/docs/latest/api/util.html#utilinheritsconstructor-superconstructor
// 继承
// 已经不建议使用了， 最好使用es6的继承方式  extends
util.inherits(Gulp, Undertaker);

// https://www.npmjs.com/package/vinyl-fs#options
// vfs.src(globs[, options])
Gulp.prototype.src = vfs.src;
// https://www.npmjs.com/package/vinyl-fs#destfolder-options
// vfs.dest(folder[, options])
// 将文件夹路径字符串或函数作为第一个参数，将选项对象作为第二个参数。
// 如果给定一个函数，它将与每个vinyl File对象一起调用，并且必须返回文件夹路径。
// 返回一个流，该流接受vinyl File对象，将它们写入指定文件夹/cwd中的磁盘，并将它们传递到下游，这样您就可以继续使用管道。
// 一旦文件写入磁盘后，将尝试确定vinyl File对象的`stat.mode`、`stat.mtime`和`stat.atime`是否与文件系统上的文件不同。
// 如果它们不同，并且正在运行的进程拥有该文件，则会更新相应的文件系统元数据。
// 如果它们没有差异或进程不拥有文件，则会自动跳过尝试。
// 如果文件具有指定目标路径的`symlink`属性，则将创建`symlink`。
Gulp.prototype.dest = vfs.dest;

// https://www.npmjs.com/package/vinyl-fs#symlinkfolder-options
// vfs.symlink(folder[, options])
// 将文件夹路径字符串或函数作为第一个参数，将选项对象作为第二个参数。
// 如果给定一个函数，它将与每个vinyl File对象一起调用，并且必须返回文件夹路径。
// 返回一个流，该流接受vinyl File对象，在指定的文件夹/cwd处创建一个`symlink`，并将其传递到下游，这样您就可以继续使用管道传递这些对象。
Gulp.prototype.symlink = vfs.symlink;
// 在 `glob-watcher` 前做校验和兼容
//
Gulp.prototype.watch = function (glob, opt, task) {
  if (
    typeof opt === "string" ||
    typeof task === "string" ||
    Array.isArray(opt) ||
    Array.isArray(task)
  ) {
    throw new Error(
      "watching " +
        glob +
        ": watch task has to be " +
        "a function (optionally generated by using gulp.parallel " +
        "or gulp.series)"
    );
  }

  if (typeof opt === "function") {
    task = opt;
    opt = {};
  }

  opt = opt || {};

  var fn;
  if (typeof task === "function") {
    fn = this.parallel(task);
  }

  // watch() 方法时通过 `events` 参数进行指定。
  // 可用的事件有 'add'、'addDir'、'change'、'unlink'、'unlinkDir'、'ready'、'error'。
  // 此外，还有一个 'all' 事件，它表示除 'ready' 和 'error' 之外的所有事件。
  return watch(glob, opt, fn);
};

// Let people use this class from our instance
Gulp.prototype.Gulp = Gulp;
// Gulp 实例
var inst = new Gulp();
module.exports = inst;
```