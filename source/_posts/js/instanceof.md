---
title: javascript instanceof 原理
summary: javascript instanceof 原理, instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
date: 2022-10-26 09:00:00

tags: [javascript]  #设置标签
keywords: javascript, instanceof
categories:
- javascript
  
img: /images/cover/js.jpg  #设置本地图片
coverImg: /images/cover/js-banner.jpg  #设置本地图片
---

## instanceof 原理

[instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

## 实现

```ts
/**
 *
 * 简单模拟 instanceof的实现
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
 *
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 *
 * 需要注意的是，如果表达式 obj instanceof Foo 返回 true，则并不意味着该表达式会永远返回 true，
 * 因为 Foo.prototype 属性的值有可能会改变，改变之后的值很有可能不存在于 obj 的原型链上，
 * 这时原表达式的值就会成为 false。另外一种情况下，原表达式的值也会改变，就是改变对象 obj 的原型链的情况，虽然在目前的 ES 规范中，
 * 我们只能读取对象的原型而不能改变它，但借助于非标准的 __proto__ 伪属性，是可以实现的。
 * 比如执行 obj.__proto__ = {} 之后，obj instanceof Foo 就会返回 false 了。
 *
 *
 * @param instance 实例对象
 * @param Func 构造函数
 * @returns boolean
 */
function _instanceof(instance: any, Func: any) {
  let instance_proto = instance.__proto__;
  let FuncProto = Func.prototype;

  while (true) {
    if (instance_proto === null) {
      return false;
    }
    if (instance_proto === FuncProto) {
      return true;
    }

    instance_proto = instance_proto.__proto__;
  }
}

(function () {
  // npx ts-node app/typeof.ts
  // 如果有错 会有打印
  const assert = require("assert");

  // 定义构造函数
  function C() {}
  function D() {}

  let o = new (C as any)();

  assert.equal(o instanceof C, _instanceof(o, C));
  assert.equal(o instanceof Object, _instanceof(o, Object));
  assert.equal(C.prototype instanceof Object, _instanceof(C.prototype, Object));

  //
  C.prototype = {};
  let o2 = new (C as any)();
  assert.equal(o instanceof C, _instanceof(o2, C));

  //  false，C.prototype 指向了一个空对象，这个空对象不在 o 的原型链上。
  assert.equal(false, _instanceof(o, C));

  D.prototype = new (C as any)(); // 继承

  let o3 = new (D as any)();

  assert.equal(o3 instanceof D, _instanceof(o3, D));

  // true 因为 C.prototype 现在在 o3 的原型链上
  assert.equal(o3 instanceof C, _instanceof(o3, C));
})();
```