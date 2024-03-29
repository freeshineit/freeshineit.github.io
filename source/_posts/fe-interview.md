---
title: 前端面试
summary: 前端面试包括 javascript, typescript, react, node和算法等 (持续更新)
tags: [前端, 面试]  #设置标签
date: 2022-11-08
keywords: 面试,前端
categories:
- 面试
top: true
---


## javascript

### this 的指向（谁调用指向谁）

### 普通函数和箭头函数的区别

- 语法更加简洁、清晰
- 箭头函数没有自己的 `this`
- 箭头函数继承而来的 `this` 指向永远不变
- `call`,`apply`,`bind`无法改变箭头函数中 `this` 的指向
- 箭头函数不能作为构造函数使用 (为什么)
- 箭头函数没有自己的 `arguments` (为什么)
- 箭头函数没有原型 `prototype` (为什么)
- 箭头函数不能用作 `Generator` 函数，不能使用 `yeild` 关键字 (为什么)
- [解析顺序](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%E8%A7%A3%E6%9E%90%E9%A1%BA%E5%BA%8F) 虽然箭头函数中的箭头不是运算符，但箭头函数具有与常规函数不同的特殊运算符优先级解析规则。

[ES6 - 箭头函数、箭头函数与普通函数的区别](https://juejin.cn/post/6844903805960585224)
[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### javascript 闭包

### javascript 的作用域

### javascript 变量向上找取的原理(执行上下文)

### javascript 的语法分析

### javascript 的词法分析

https://juejin.cn/post/6943550570515038245

### 继承

```ts
// es5
function PersonFn () {}

function SupermanFn() {}

SupermanFn.prototype = new PersonFn()


// es6
class Person () {}

class Superman extends Person {}
```

### 洋葱模型

```ts
// 类似递归
// 在 next 中执行下一个function, 依次递归
// 如果不好理解可以参考`tapable` 中代码的实现, `tapable`是把所有函数铺平，依次嵌套
// 而下面的实现是对依次嵌套改成了递归嵌套
// 以上是个人理解
function compose (middleware) {
   return async function () {
      let args = arguments
      async function dispatch (i) {
         const fn = middleware[i]
         if (!fn) return null
         await fn(function next () {
            dispatch(i + 1)
         }, ...args)
      }

      await dispatch(0)
   }
}

let middleware = []
middleware.push((next) => {
	console.log(0)
	next()
	console.log("next:", 3.3)
})
middleware.push((next) => {
	console.log(1)
	next()
	console.log("next:", 1.1)
})
middleware.push(() => {
    console.log(2)
})

let fn = compose(middleware)
fn() // 0 1 2 next:1.1 next:3.3

```

## 浏览器

### 浏览器的进程（Chrome）

- Browser Process 浏览器的主进程（负责协调、主控） （1）负责包括地址栏，书签栏，前进后退按钮等部分的工作 （2）负责处理浏览器的一些不可见的底层操作，比如网络请求和文件访问 （3）负责各个页面的管理，创建和销毁其他进程
- Utility Process
- Render Process 负责一个 tab 内关于网页呈现的所有事情，页面渲染，脚本执行，事件处理等
- GPU Process 负责控制一个网页用到的所有插件，如 flash 每种类型的插件对应一个进程，仅当使用该插件时才创建
- Plugin Process 负责处理 GPU 相关的任务

[浏览器多线程和 js 单线程](https://juejin.cn/post/6844903812642111501)

### 在浏览器输入 URL 回车之后发生了什么

[在浏览器输入 URL 回车之后发生了什么](https://zhuanlan.zhihu.com/p/80551769)

### 浏览器 GC

## node

### npm 执行命令的流程

### eventloop


### 前端页面优化

- 压缩 js/css/html/图片，减少请求流量
- 合并小文件都一个文件中，减少请求数
- 静态资源使用 CDN
- 图片尽量使用 webp等压缩效果比较好的图片格式 ， 可以使用picture标签
- 服务端开启 gzip等压缩
- 使用PWA
- 使用缓存
- 图片懒加载/使用雪碧图/使用 svg
- 使用 js 懒加载/预加载
- 减少 dom 的层级嵌套
- 避免 table 布局
- css3 开启 GPU 加速
- 避免重定向
- 接口使用异步请求
- 尽量减少请求
- 如果有必要可以使用Workers
- 避免/减少重排与重绘

## 网络

### http1 和 http2 的区别

### 网络分层


## TypeScript

### TypeScript 的类型

`any`,`string`,`number`,`boolean`,`Symbol`,`Array`,`null`,`unknow`,`never`,`void` ...

### TypeScript 中 any、never、unknown、null & undefined 和 void 有什么区别？

```
any: 动态的变量类型（失去了类型检查的作用）。
never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
unknown: 任何类型的值都可以赋给  unknown  类型，但是  unknown  类型的值只能赋给  unknown  本身和  any  类型。
null & undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把  null 和 undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为 void。

作者：周姐日常事
链接：https://juejin.cn/post/6999985372440559624
来源：稀土掘金
```

### TypeScript 联合类型

### TypeScript 中如何联合枚举类型的 Key?

```ts
enum str {
  A,
  B,
  C
}
type strUnion = keyof typeof str; // 'A' | 'B' | 'C'
```

### type 和 interface 的区别

### 协变、逆变、双变和抗变的理解？

```ts
协变：X = Y Y 类型可以赋值给 X 类型的情况就叫做协变，也可以说是 X 类型兼容 Y 类型
interface X { name: string; age: number; }
interface Y { name: string; age: number; hobbies: string[] }
let x: X = { name: 'xiaoming', age: 16 }
let y: Y = { name: 'xiaohong', age: 18, hobbies: ['eat'] }
x = y
复制代码
逆变：printY = printX 函数X 类型可以赋值给函数Y 类型，因为函数Y 在调用的时候参数是按照Y类型进行约束的，但是用到的是函数X的X的属性和方法，ts检查结果是类型安全的。这种特性就叫做逆变，函数的参数有逆变的性质。
let printY: (y: Y) => void
printY = (y) => { console.log(y.hobbies) }
let printX: (x: X) => void
printX = (x) => { console.log(x.name) }
printY = printX
复制代码
双变（双向协变）：X = Y；Y = X父类型可以赋值给子类型，子类型可以赋值给父类型，既逆变又协变，叫做“双向协变”（ts2.x 之前支持这种赋值，之后 ts 加了一个编译选项 strictFunctionTypes，设置为 true 就只支持函数参数的逆变，设置为 false 则支持双向协变）
抗变（不变）：非父子类型之间不会发生型变，只要类型不一样就会报错

```

### declare，declare global 是什么？

declare 是用来定义全局变量、全局函数、全局命名空间、js modules、class 等
declare global 为全局对象 window 增加新的属性

### TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解

public: 成员都默认为 public，被此限定符修饰的成员是可以被外部访问；
private: 被此限定符修饰的成员是只可以被类的内部访问；
protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
readonly: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

### keyof 和 typeof 关键字的作用

keyof 索引类型查询操作符 获取索引类型的属性名，构成联合类型。
typeof 获取一个变量或对象的类型。

### 工具类型 Partial、Required、Readonly、Record、Extract、ReturnType、Exclude、Omit 的作用

### 实现一个递归的类型

### TypeScript 中 ?.、??、!、!.、\_、\*\* 等符号的含义

?. 可选链 遇到 null 和 undefined 可以立即停止表达式的运行。
?? 空值合并运算符 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数。
! 非空断言运算符 x! 将从 x 值域中排除 null 和 undefined
!. 在变量名后添加，可以断言排除 undefined 和 null 类型
\_ 数字分割符 分隔符不会改变数值字面量的值，使人更容易读懂数字 .e.g 1_101_324。
\*\* 求幂

## React

### hooks

### react diff

### fiber

## 算法或代码实现

### 异步加法(字节)

```ts
// const addRemote = async (a, b) => new Promise(resolve => {
//     setTimeout(() => resolve(a + b), 1000)
// })

// const addRemote = async (a, b) => new Promise(resolve =>
//     setTimeout ( () => resolve(a + b), 1000)
// 2):
// async function add (...inputs) {
// }
// addmte
// // 的加法。
// async function add(..inputs) {
// 1你的实现
// // 川请用示例验证运行结果：
// add(1, 2). then(result => {
// console.log(result): // 3
// add(1, 2, 3, 4) .then(result => f
// console.log(result): // 10
// add(1, 2, 1, 2, 1, 2. 3, 4). then(result => f
// console.log(result): // 16
// })
```

## 实现 EventEmitter 模型，实现 `on`, `once`, `off`, `emit` 方法

```ts
class EventEmitter {
  _event: Record<string, Array<Function>>;
  constructor() {
    this._event = {};
  }

  on(type: string, callback: Function) {
    if (this._event[type]) {
      this._event[type].push(callback);
    } else {
      this._event[type] = [callback];
    }
    return this;
  }

  once(type: string, callback: Function) {
    let fn = (...args: Array<any>) => {
      callback.apply(this, args);
      this.off(type, fn);
    };
    this.on(type, fn);
    return this;
  }

  off(type: string, callback: Function) {
    if (this._event[type]) {
      this._event[type] = this._event[type].filter(item => item !== callback);
    }
    return this;
  }

  emit(type: string) {
    this._event[type].map(item => item());
    return this;
  }
}

const eventEmitter = new EventEmitter();

let handle1 = () => console.log("click1");
let handle2 = () => console.log("click2");
let handle3 = () => console.log("click3");
let handle4 = () => console.log("click4");

eventEmitter.on("click", handle1);
eventEmitter.on("click", handle2);
eventEmitter.once("click", handle3);
eventEmitter.emit("click");
eventEmitter.emit("click");
```

### 观察者模式，请实现 observable 和 observe 两个函数

```ts

```

### 字符串隐藏部分内容 (阿里)

实现一个方法，接收一个字符串和一个符号，将字符串中间四位按指定符号隐藏

1. 符号无指定时使用星号（\*）
2. 接收的字符串小于或等于四位时，返回同样长度的符号串，等同于全隐藏，如 123，隐藏后是\*\*\*
3. 字符串长度是大于四位的奇数时，如 123456789，隐藏后是 12789，奇数多出来的一位在末尾

示例：

```js
mask("alibaba", "#"); // a####ba
mask("85022088"); // 85****88
mask("hello"); // ****o
mask("abc", "?"); // ???
mask("阿里巴巴集团", "?"); // 阿????团
```

实现

```ts
function mask(str, char = "*") {
  if (str.length <= 4) return char.repeat(str.length);
  /* 代码实现 */
  let result = "";
  let i = Math.floor(str.length / 2) - 1;
  let j = Math.floor(str.length / 2);
  while (result.length !== str.length) {
    if (j - i <= 4) {
      result = char + result;
      result += char;
    } else {
      result = (str[i] || "") + result;
      result += str[j];
    }
    i--;
    j++;
  }
  return result;
}
```

实现来源：https://github.com/FrankKai/FrankKai.github.io/issues/245

### HashMap

```ts
function HashMap() {
  this.map = {};
}
HashMap.prototype = {
  get: function (key) {
    console.log(this);
    if (this.map.hasOwnProperty(key)) {
      return this.map[key];
    }
    return null;
  },
  put: function (key, val) {
    this.map[key] = val;
  },
  remove: function (key) {
    if (this.map.hasOwnProperty(key)) {
      let tmp = this.map[key];
      delete this.map[key];
      return tmp;
    }
    return null;
  },
  clear: function () {
    this.map = {};
  },
  keySet: function () {
    let _keys = [];
    for (const key in this.map) {
      _keys.push(key);
    }
    return _keys;
  }
};
HashMap.prototype.constructor = HashMap;
let hashMap = new HashMap();
```

### LRU

### DFS 深度优先

### 广度优先