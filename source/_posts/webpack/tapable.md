---
title: tapable 使用随笔
summary: The tapable package expose many Hook classes, which can be used to create hooks for plugins.tapable 是一个发布订阅模式的实现，它提供了很多应对业务的 hooks 实现和抽象。主要分为两大类同步和异步。
tags: [Webpack]  #设置标签
date: 2022-11-28
keywords: webpack, tapable
categories:
- Webpack
img: /images/cover/webpack.png  #设置本地图片
coverImg: /images/cover/webpack-banner.png  #设置本地图片
---


## tapable

The [tapable](https://github.com/webpack/tapable) package expose many Hook classes, which can be used to create hooks for plugins.

`tapable` 是一个发布订阅模式的实现，它提供了很多应对业务的 `hooks` 实现和抽象。主要分为两大类同步和异步。

## Base Hooks

- [Hooks](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/Hook.js?L25:1)

继承 `Hooks` 的类需要自己实现`compile`抽象方法。

- [HookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L7:1)

继承`HookCodeFactory`类需要实现抽象方法`content`, 返回 `call`或`callAsync`或`promise` 的函数体的实现的代码字符串， 然后使用 `Function` 生成一个`call`或`callAsync`或`promise` 函数

## SyncHook

[SyncHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/SyncHook.js?L35:1) 按注册的回调函数串行之行。

简单使用：

```js
const { SyncHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
const hook = new SyncHook(["arg1", "arg2", "arg3"]);
// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`SyncHook`的入参的数组有关系
hook.tap("fn0", (arg1, arg2, arg3) => {
  console.log(1, arg1, arg2, arg3);
  return "fn0"; // 回调函数的返回值之间没有联系
});
hook.tap("fn1", (arg1, arg2, arg3) => {
  console.log(2, arg1, arg2, arg3);
  return "fn1";
});
hook.tap("fn2", (arg1, arg2, arg3) => {
  console.log(3, arg1, arg2, arg3);
  return "fn2";
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.call("a", "b", "c");
```

`call`由[SyncHookCodeFactory](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/webpack/tapable%24+SyncHookCodeFactory&patternType=standard&sm=1)的`content`实现, 结果如下：

```js
// 这是一段`call`方法实现的代码字符串
// 这段代码需要使用 `Function` 来生成`call`方法来执行
// 其中`this._x`就是注册的回调函数组成的数组
// 可以看出回调函数的调用就是把数组中的函数展开
"use strict";
var _context;
var _x = this._x;
var _fn0 = _x[0];
_fn0(arg3, arg2, arg1); // 回调函数 fn0
var _fn1 = _x[1];
_fn1(arg3, arg2, arg1); // 回调函数 fn1
var _fn2 = _x[2];
_fn2(arg3, arg2, arg1); // 回调函数 fn2
```

## SyncBailHook

[SyncBailHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/SyncBailHook.js?L40:1) 会对每次执行的结果进行检测，如果结果不是 `undefined` 就直接 `return` 了，后面的回调函数就没有机会执行了。

简单使用：

```js
const { SyncBailHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
// 同步执行回调函数，回调函数返回结果不是 `undefined` 就直接 `return` 了，后面的回调函数就没有机会执行了
const hook = new SyncBailHook(["arg1", "arg2", "arg3"]);
// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`SyncBailHook`的入参的数组有关系
hook.tap("fn0", (arg1, arg2, arg3) => {
  console.log("fn0", arg1, arg2, arg3);
  return undefined;
});
hook.tap("fn1", (arg1, arg2, arg3) => {
  console.log("fn1", arg1, arg2, arg3);
  // 如果回调函数的返回结果不是 `undefined` 就直接 `return` 了，后面的回调函数就没有机会执行了
  return "fn1";
});
hook.tap("fn2", (arg1, arg2, arg3) => {
  console.log("fn2", arg1, arg2, arg3);
  return undefined;
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.call("a", "b", "c");
```

`call`由`SyncBailHookCodeFactory`的`content`实现, 结果如下：

```js
// 这是一段`call`方法实现的代码字符串
// 参数和SyncHook是一致的，区别在于回调函数的返回值
// 如果回调函数的返回结果不是 `undefined` 就直接 `return` 了，后面的回调函数就没有机会执行了。
// 就像一个有限的套娃🪆
"use strict";
var _context;
var _x = this._x;
var _fn0 = _x[0];
var _result0 = _fn0(arg3, arg2, arg1);
// 如果返回结果不是 `undefined` 就直接 `return` 了，后面的回调函数就没有机会执行了。
if (_result0 !== undefined) {
  return _result0;
} else {
  var _fn1 = _x[1];
  var _result1 = _fn1(arg3, arg2, arg1);
  // 如果返回结果不是 `undefined` 就直接 `return` 了，后面的回调函数就没有机会执行了。
  if (_result1 !== undefined) {
    return _result1;
  } else {
    var _fn2 = _x[2];
    var _result2 = _fn2(arg3, arg2, arg1);
    // 如果返回结果不是 `undefined` 就直接 `return` 了，后面的回调函数就没有机会执行了。
    if (_result2 !== undefined) {
      return _result2;
    } else {
    }
  }
}
```

## SyncLoopHook

[SyncLoopHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/SyncLoopHook.js?L35:1) 会对每次执行的结果进行检测，如果结果不是 `undefined` 就不停循环第一个回调函数到当前回调函数，直至都返回 `undefined`。

简单使用：

```js
const { SyncLoopHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
const hook = new SyncLoopHook(["arg1", "arg2", "arg3"]);
let _loop = 4;

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`SyncLoopHook`的入参的数组有关系
hook.tap("fn0", (arg1, arg2, arg3) => {
  console.log("fn0", arg1, arg2, arg3);
  return undefined;
});
hook.tap("fn1", (arg1, arg2, arg3) => {
  console.log("fn1", arg1, arg2, arg3);
  _loop = _loop - 1;
  // 如果返回结果不是 `undefined` 就不停循环 `f0` `f1`，直至都返回 `undefined`。
  return _loop > 0 ? _loop : undefined;
});
hook.tap("fn2", (arg1, arg2, arg3) => {
  console.log("fn2", arg1, arg2, arg3);
  return undefined;
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.call("a", "b", "c");
```

`call`由[SyncLoopHookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/SyncLoopHook.js?L10:1)的`content`实现, 结果如下：

```js
// 这是一段`call`方法实现的代码字符串
// 参数和SyncHook是一致的，区别在于回调函数的返回值
// 如果结果不是 `undefined` 就不停循环第一个回调函数到当前回调函数，直至都返回 `undefined`
// 注意: 不返回`undefined`就不停循环，容易造成死循环
"use strict";
var _context;
var _x = this._x;
var _loop;
do {
  _loop = false;
  var _fn0 = _x[0];
  var _result0 = _fn0(arg3, arg2, arg1);
  if (_result0 !== undefined) {
    _loop = true;
  } else {
    var _fn1 = _x[1];
    var _result1 = _fn1(arg3, arg2, arg1);
    if (_result1 !== undefined) {
      _loop = true;
    } else {
      var _fn2 = _x[2];
      var _result2 = _fn2(arg3, arg2, arg1);
      if (_result2 !== undefined) {
        _loop = true;
      } else {
        if (!_loop) {
        }
      }
    }
  }
} while (_loop);
```

## SyncWaterfallHook

[SyncWaterfallHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/SyncWaterfallHook.js?L44) 会对每次执行的结果当成下一个回调函数的入参（`call`的入参 ），如果返回值是 `undefined`，使用上一个参数。

简单使用：

```js
const { SyncWaterfallHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
const hook = new SyncWaterfallHook(["arg1", "arg2", "arg3"]);

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`SyncWaterfallHook`的入参的数组有关系
hook.tap("fn0", (arg1, arg2, arg3) => {
  console.log("fn0", arg1, arg2, arg3);
  return "fn0-result";
});
hook.tap("fn1", (arg1, arg2, arg3) => {
  console.log("fn1", arg1, arg2, arg3);
  return undefined;
});
hook.tap("fn2", (arg1, arg2, arg3) => {
  console.log("fn2", arg1, arg2, arg3);
  return "fn2";
});
hook.tap("fn3", (arg1, arg2, arg3) => {
  console.log("fn3", arg1, arg2, arg3);
  return "fn3";
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.call("a", "b", "c");
// 执行结果：
// fn0 a b c
// fn1 fn0-result b c
// fn2 fn0-result b c
// fn3 fn2 b c
```

`call`由[SyncWaterfallHookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/SyncWaterfallHook.js?L10:7)的`content`实现, 结果如下：

```js
// 这是一段`call`方法实现的代码字符串
// 参数和SyncHook是一致的，区别在于回调函数的返回值
// 如果返回值是 `undefined` , 使用`call`的参数，否则使用返回的值
"use strict";
var _context;
var _x = this._x;
var _fn0 = _x[0];
var _result0 = _fn0(arg1, arg2, arg3);
if (_result0 !== undefined) {
  // 如果返回值是 `undefined` , 使用`call`的参数，否则使用返回的值
  arg1 = _result0;
}
var _fn1 = _x[1];
var _result1 = _fn1(arg1, arg2, arg3);
if (_result1 !== undefined) {
  // 如果返回值是 `undefined` , 使用`call`的参数，否则使用返回的值
  arg1 = _result1;
}
var _fn2 = _x[2];
var _result2 = _fn2(arg1, arg2, arg3);
if (_result2 !== undefined) {
  // 如果返回值是 `undefined` , 使用`call`的参数，否则使用返回的值
  arg1 = _result2;
}
var _fn3 = _x[3];
var _result3 = _fn3(arg1, arg2, arg3);
if (_result3 !== undefined) {
  arg1 = _result3;
}
return arg1;
```

## AsyncSeriesHook

[AsyncSeriesHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncSeriesHook.js?L26:1)异步串行

```js
const { AsyncSeriesHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
const hook = new AsyncSeriesHook(["arg1", "arg2", "arg3"]);

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`AsyncSeriesHook`的入参的数组有关系
hook.tapAsync("fn0", (arg1, arg2, arg3, callback) => {
  setTimeout(() => {
    console.log("fn0", arg1, arg2, arg3);
    callback();
  }, 1000);
});
hook.tapAsync("fn1", (arg1, arg2, arg3, callback) => {
  setTimeout(() => {
    console.log("fn1", arg1, arg2, arg3);
    callback();
  }, 1000);
});
hook.tapAsync("fn2", (arg1, arg2, arg3, callback) => {
  setTimeout(() => {
    console.log("fn2", arg1, arg2, arg3);
    callback(); // 决定 `callAsync` 最后的实参callback是否会被调用
  }, 1000);
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.callAsync("a", "b", "c", () => {
  console.log("AsyncSeriesHook async");
});

// 执行结果：
// fn0 a b c
// fn1 a b c
// fn2 a b c
// AsyncSeriesHook async
```

`callAsync` 由[AsyncSeriesHookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncSeriesHook.js?L10:1)的`content`实现, 更深层次来说应该是由[HookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L7:1)的[callTapsSeries](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L276)实现。 结果如下：

```js
"use strict";
var _context;
var _x = this._x;
function _next1() {
  var _fn2 = _x[2];
  _fn2(arg1, arg2, arg3, function (_err2) {
    // ...
  });
}
function _next0() {
  var _fn1 = _x[1];
  _fn1(arg1, arg2, arg3, function (_err1) {
    // ...
    _next1();
  });
}
var _fn0 = _x[0];
_fn0(arg1, arg2, arg3, function (_err0) {
  // ...
  _next0();
});
```

`Promise` 方式

```js
const { AsyncSeriesHook } = require("tapable");

// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
const hook = new AsyncSeriesHook(["arg1", "arg2", "arg3"]);

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`AsyncSeriesHook`的入参的数组有关系
hook.tapPromise("fn0", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn0", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
hook.tapPromise("fn1", (arg1, arg2, arg3, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn1", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
hook.tapPromise("fn2", (arg1, arg2, arg3, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn2", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.promise("a", "b", "c");
```

`promise` 由[AsyncSeriesHookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncSeriesHook.js?L10:1)的`content`实现, 更深层次来说应该是由[HookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L7:1)的[callTapsSeries](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L276)实现。 结果如下：

```js
"use strict";
var _context;
var _x = this._x;
function _next1() {
  var _fn2 = _x[2];
  var _hasResult2 = false;
  var _promise2 = _fn2(arg1, arg2, arg3);
  _promise2.then(function (_result2) {
    _hasResult2 = true;
  });
}
function _next0() {
  var _fn1 = _x[1];
  var _hasResult1 = false;
  var _promise1 = _fn1(arg1, arg2, arg3);
  _promise1.then(function (_result1) {
    _hasResult1 = true;
    _next1();
  });
}
var _fn0 = _x[0];
var _hasResult0 = false;
var _promise0 = _fn0(arg1, arg2, arg3);
_promise0.then(function (_result0) {
  _hasResult0 = true;
  _next0();
});
```

## AsyncSeriesBailHook

[AsyncSeriesBailHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncSeriesBailHook.js?L31) 会对每次异步执行的结果进行检测，如果结果不是 `undefined` 就直接 `return` 了，后面的回调函数就没有机会执行了

```js
const { AsyncSeriesBailHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
const hook = new AsyncSeriesBailHook(["arg1", "arg2", "arg3"]);

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`AsyncSeriesBailHook`的入参的数组有关系
// 串行调用
hook.tapPromise("fn0", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn0", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
hook.tapPromise("fn1", (arg1, arg2, arg3, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn1", arg1, arg2, arg3);
      resolve(12); // 后面的回调不会执行
    }, 1000);
  });
});
hook.tapPromise("fn2", (arg1, arg2, arg3, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn2", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.promise("a", "b", "c");

// 执行结果：
// fn0 a b c
// fn1 a b c
```

`tapAsync` 和 `callAsync`的组合同理

```js
"use strict";
var _context;
var _x = this._x;
function _next1() {
  var _fn2 = _x[2];
  var _hasResult2 = false;
  var _promise2 = _fn2(arg1, arg2, arg3);
  //...
  _promise2.then(function (_result2) {
    _hasResult2 = true;
    if (_result2 !== undefined) {
      return _result2;
    } else {
    }
  });
}
function _next0() {
  var _fn1 = _x[1];
  var _hasResult1 = false;
  var _promise1 = _fn1(arg1, arg2, arg3);
  //...
  _promise1.then(
    function (_result1) {
      _hasResult1 = true;
      if (_result1 !== undefined) {
        return _result1;
      } else {
        return _next1();
      }
    }
    //...
  );
}
var _fn0 = _x[0];
var _hasResult0 = false;
var _promise0 = _fn0(arg1, arg2, arg3);
//...
_promise0.then(
  function (_result0) {
    _hasResult0 = true;
    if (_result0 !== undefined) {
      return _result0;
    } else {
      return _next0();
    }
  }
  //...
);
```

## AsyncSeriesLoopHook

[AsyncSeriesLoopHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncSeriesLoopHook.js?L26)会对每次异步执行的结果进行检测，如果结果不是 `undefined` 就不停循环第一个回调函数到当前回调函数，直至都返回 `undefined`。

```js
const { AsyncSeriesLoopHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
const hook = new AsyncSeriesLoopHook(["arg1", "arg2", "arg3"]);

let _loop = 2; // 循环两次

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`AsyncSeriesLoopHook`的入参的数组有关系
hook.tapPromise("fn0", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn0", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
hook.tapPromise("fn1", (arg1, arg2, arg3, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn1", arg1, arg2, arg3);
      resolve(_loop > 0 ? "fn1 result" : undefined);
      _loop = _loop - 1;
    }, 1000);
  });
});
hook.tapPromise("fn2", (arg1, arg2, arg3, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn2", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.promise("a", "b", "c");

// 执行结果
// fn0 a b c
// fn1 a b c
// fn0 a b c // 循环
// fn1 a b c // 循环
// fn0 a b c // 循环
// fn1 a b c // 循环
// fn2 a b c
```

`tapAsync` 和 `callAsync`的组合同理

`promise` 由[AsyncSeriesLoopHookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncSeriesLoopHook.js?L10:1)的`content`实现, 更深层次来说应该是由[HookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L7:1)的[callTapsLooping](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L324:2)实现。 结果如下：

```js
"use strict";
var _context;
var _x = this._x;
var _looper = function () {
  var _loopAsync = false;
  var _loop;
  do {
    _loop = false;
    function _next1() {
      var _fn2 = _x[2];
      var _hasResult2 = false;
      var _promise2 = _fn2(arg1, arg2, arg3);
      // 判断返回是不是promise
      if (!_promise2 || !_promise2.then)
        throw new Error(
          "Tap function (tapPromise) did not return promise (returned " +
            _promise2 +
            ")"
        );
      _promise2.then(
        function (_result2) {
          _hasResult2 = true;
          if (_result2 !== undefined) {
            _loop = true;
            if (_loopAsync) _looper();
          } else {
            if (!_loop) {
            }
          }
        }
        // ... reject 处理
      );
    }
    function _next0() {
      var _fn1 = _x[1];
      var _hasResult1 = false;
      var _promise1 = _fn1(arg1, arg2, arg3);
      // ...
      _promise1.then(
        function (_result1) {
          _hasResult1 = true;
          if (_result1 !== undefined) {
            _loop = true;
            if (_loopAsync) _looper();
          } else {
            _next1();
          }
        }
        // ... reject 处理
      );
    }
    var _fn0 = _x[0];
    var _hasResult0 = false;
    var _promise0 = _fn0(arg1, arg2, arg3);
    // ...
    _promise0.then(
      function (_result0) {
        _hasResult0 = true;
        if (_result0 !== undefined) {
          _loop = true;
          if (_loopAsync) _looper();
        } else {
          _next0();
        }
      }
      // ... reject 处理
    );
  } while (_loop);
  _loopAsync = true;
};
_looper();
```

## AsyncSeriesWaterfallHook

[AsyncSeriesWaterfallHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncSeriesWaterfallHook.js?L34)会对每次执行异步函数的结果当成下一个回调函数的入参（`callAsync`/`promise`的入参 ），如果返回值是 `undefined`，使用上一个参数。

```js
const { AsyncSeriesWaterfallHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
const hook = new AsyncSeriesWaterfallHook(["arg1", "arg2", "arg3"]);

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`AsyncSeriesWaterfallHook`的入参的数组有关系
hook.tapPromise("fn0", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn0", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
hook.tapPromise("fn1", (arg1, arg2, arg3, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn1", arg1, arg2, arg3);
      resolve("fn1-result"); // 返回值作为fn2的第一个入参
    }, 1000);
  });
});
hook.tapPromise("fn2", (arg1, arg2, arg3, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn2", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.promise("a", "b", "c");

// 执行结果
// fn0 a b c
// fn1 a b c
// fn2 fn1-result b c
```

`tapAsync` 和 `callAsync`的组合同理

`promise` 由[AsyncSeriesWaterfallHookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncSeriesWaterfallHook.js?L10:1)的`content`实现, 更深层次来说应该是由[HookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L7:1)的[callTapsSeries](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L276)实现。 结果如下：

```js
"use strict";
var _context;
var _x = this._x;
function _next2() {
  var _fn3 = _x[3];
  var _hasResult3 = false;
  var _promise3 = _fn3(arg1, arg2, arg3);
  if (!_promise3 || !_promise3.then)
    // 判断返回是不是promise
    throw new Error(
      "Tap function (tapPromise) did not return promise (returned " +
        _promise3 +
        ")"
    );
  _promise3.then(
    function (_result3) {
      _hasResult3 = true;
      if (_result3 !== undefined) {
        arg1 = _result3;
      }
      return arg1;
    }
    // ...
  );
}
function _next1() {
  var _fn2 = _x[2];
  var _hasResult2 = false;
  var _promise2 = _fn2(arg1, arg2, arg3);
  // ...
  _promise2.then(function (_result2) {
    _hasResult2 = true;
    if (_result2 !== undefined) {
      arg1 = _result2;
    }
    _next2();
  });
}
function _next0() {
  var _fn1 = _x[1];
  var _hasResult1 = false;
  var _promise1 = _fn1(arg1, arg2, arg3);
  // ...
  _promise1.then(
    function (_result1) {
      _hasResult1 = true;
      if (_result1 !== undefined) {
        arg1 = _result1;
      }
      _next1();
    }
    // ...
  );
}
var _fn0 = _x[0];
var _hasResult0 = false;
var _promise0 = _fn0(arg1, arg2, arg3);
// ...
_promise0.then(
  function (_result0) {
    _hasResult0 = true;
    if (_result0 !== undefined) {
      arg1 = _result0;
    }
    _next0();
  }
  // ...
);
```

## AsyncParallelHook

[AsyncParallelHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncParallelHook.js?L26:1)并行执行, 不关心回调函数的返回值。

```js
const { AsyncParallelHook } = require("tapable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
// 并行执行 不关心回调函数的返回值。
const hook = new AsyncParallelHook(["arg1", "arg2", "arg3"]);

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`AsyncParallelHook`的入参的数组有关系
hook.tapPromise("fn0", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn0", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
hook.tapPromise("fn1", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn1", arg1, arg2, arg3);
      resolve("fn1-result");
    }, 1000);
  });
});
hook.tapPromise("fn2", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn2", arg1, arg2, arg3);
      resolve();
    }, 500);
  });
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.promise("a", "b", "c");

// 执行结果
// fn2 a b c
// fn0 a b c
// fn1 a b c
```

`tapAsync` 和 `callAsync`的组合同理

`promise` 由[AsyncParallelHookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncParallelHook.js?L10:1)的`content`实现, 更深层次来说应该是由[HookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L7:1)的[callTapsParallel](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/HookCodeFactory.js?L376:2)实现。 结果如下：

```js
"use strict";
var _context;
var _x = this._x;
do {
  var _counter = 3;
  var _done = function () {};
  if (_counter <= 0) break;
  var _fn0 = _x[0];
  var _hasResult0 = false;
  var _promise0 = _fn0(arg1, arg2, arg3);

  // 判断返回是不是promise
  if (!_promise0 || !_promise0.then)
    throw new Error(
      "Tap function (tapPromise) did not return promise (returned " +
        _promise0 +
        ")"
    );
  _promise0.then(
    function (_result0) {
      _hasResult0 = true;
      if (--_counter === 0) _done();
    },
    function (_err0) {
      if (_hasResult0) throw _err0;
      if (_counter > 0) {
        throw _err0;
        _counter = 0;
      }
    }
  );
  if (_counter <= 0) break;
  var _fn1 = _x[1];
  var _hasResult1 = false;
  var _promise1 = _fn1(arg1, arg2, arg3);
  // ...
  _promise1.then(
    function (_result1) {
      _hasResult1 = true;
      if (--_counter === 0) _done();
    },
    function (_err1) {
      if (_hasResult1) throw _err1;
      if (_counter > 0) {
        throw _err1;
        _counter = 0;
      }
    }
  );
  if (_counter <= 0) break;
  var _fn2 = _x[2];
  var _hasResult2 = false;
  var _promise2 = _fn2(arg1, arg2, arg3);
  // ...
  _promise2.then(
    function (_result2) {
      _hasResult2 = true;
      if (--_counter === 0) _done();
    },
    function (_err2) {
      if (_hasResult2) throw _err2;
      if (_counter > 0) {
        throw _err2;
        _counter = 0;
      }
    }
  );
} while (false);
```

## AsyncParallelBailHook

[AsyncParallelBailHook](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncParallelBailHook.js?L74:1) 只要回调函数的返回值不为 `undefined`, 就会忽略后面的回调函数执行, 直接跳跃到 `callAsync` 等触发函数绑定的回调函数, 然后执行这个被绑定的回调函数。

使用和原理与 SyncBailHook 相似

```js
const { AsyncParallelBailHook } = require("tabable");
// 简单来说就是实例化 Hooks 类
// 接收一个可选参数，参数是一个参数名的字符串数组
// 这组参数和注册回调函数的参数有关，
// 并行执行 不关心回调函数的返回值。
const hook = new AsyncParallelBailHook(["arg1", "arg2", "arg3"]);

// 注册
// 第一个入参为注册名
// 第二个为注册回调方法，参数的形参个数和`AsyncParallelBailHook`的入参的数组有关系
hook.tapPromise("fn0", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn0", arg1, arg2, arg3);
      resolve();
    }, 1000);
  });
});
hook.tapPromise("fn1", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn1", arg1, arg2, arg3);
      resolve("fn1-result");
    }, 1000);
  });
});
hook.tapPromise("fn2", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fn2", arg1, arg2, arg3);
      resolve();
    }, 500);
  });
});
// 执行
// 执行顺序则是根据这个实例类型来决定的
hook.promise("a", "b", "c");

// 执行结果
// fn2 a b c
// fn0 a b c
// fn1 a b c
```

`tapAsync` 和 `callAsync`的组合同理

`promise` 由[AsyncParallelBailHookCodeFactory](https://sourcegraph.com/github.com/webpack/tapable/-/blob/lib/AsyncParallelBailHook.js?L10:1)的`content`实现。 结果如下：

```js
"use strict";
var _context;
var _x = this._x;
var _results = new Array(3);
var _checkDone = function () {
  for (var i = 0; i < _results.length; i++) {
    var item = _results[i];
    if (item === undefined) return false;
    if (item.result !== undefined) {
      return item.result;
      return true;
    }
    if (item.error) {
      throw item.error;
      return true;
    }
  }
  return false;
};
do {
  var _counter = 3;
  var _done = function () {};
  if (_counter <= 0) break;
  var _fn0 = _x[0];
  var _hasResult0 = false;
  var _promise0 = _fn0(arg1, arg2, arg3);
  // 判断返回是不是promise
  if (!_promise0 || !_promise0.then)
    throw new Error(
      "Tap function (tapPromise) did not return promise (returned " +
        _promise0 +
        ")"
    );
  _promise0.then(
    function (_result0) {
      _hasResult0 = true;
      if (_counter > 0) {
        if (
          0 < _results.length &&
          (_result0 !== undefined && (_results.length = 1),
          (_results[0] = { result: _result0 }),
          _checkDone())
        ) {
          _counter = 0;
        } else {
          if (--_counter === 0) _done();
        }
      }
    },
    function (_err0) {
      if (_hasResult0) throw _err0;
      if (_counter > 0) {
        if (
          0 < _results.length &&
          ((_results.length = 1),
          (_results[0] = { error: _err0 }),
          _checkDone())
        ) {
          _counter = 0;
        } else {
          if (--_counter === 0) _done();
        }
      }
    }
  );
  if (_counter <= 0) break;
  if (1 >= _results.length) {
    if (--_counter === 0) _done();
  } else {
    var _fn1 = _x[1];
    var _hasResult1 = false;
    var _promise1 = _fn1(arg1, arg2, arg3);
    // ...
    _promise1.then(
      function (_result1) {
        _hasResult1 = true;
        if (_counter > 0) {
          if (
            1 < _results.length &&
            (_result1 !== undefined && (_results.length = 2),
            (_results[1] = { result: _result1 }),
            _checkDone())
          ) {
            _counter = 0;
          } else {
            if (--_counter === 0) _done();
          }
        }
      },
      function (_err1) {
        if (_hasResult1) throw _err1;
        if (_counter > 0) {
          if (
            1 < _results.length &&
            ((_results.length = 2),
            (_results[1] = { error: _err1 }),
            _checkDone())
          ) {
            _counter = 0;
          } else {
            if (--_counter === 0) _done();
          }
        }
      }
    );
  }
  if (_counter <= 0) break;
  if (2 >= _results.length) {
    if (--_counter === 0) _done();
  } else {
    var _fn2 = _x[2];
    var _hasResult2 = false;
    var _promise2 = _fn2(arg1, arg2, arg3);
    // ...
    _promise2.then(
      function (_result2) {
        _hasResult2 = true;
        if (_counter > 0) {
          if (
            2 < _results.length &&
            (_result2 !== undefined && (_results.length = 3),
            (_results[2] = { result: _result2 }),
            _checkDone())
          ) {
            _counter = 0;
          } else {
            if (--_counter === 0) _done();
          }
        }
      },
      function (_err2) {
        if (_hasResult2) throw _err2;
        if (_counter > 0) {
          if (
            2 < _results.length &&
            ((_results.length = 3),
            (_results[2] = { error: _err2 }),
            _checkDone())
          ) {
            _counter = 0;
          } else {
            if (--_counter === 0) _done();
          }
        }
      }
    );
  }
} while (false);
```

参考

[tapable](https://github.com/webpack/tapable)

[webpack 核心模块 tapable 源码解析](https://www.cnblogs.com/dennisj/p/14606902.html)