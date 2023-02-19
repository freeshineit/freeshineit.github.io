---
title: javascript typeof 原理
summary: javascript typeof 原理, typeof 运算符返回一个字符串，表示操作数的类型
tags: [Javascript]  #设置标签
keywords: javascript, typeof
categories:
- Javascript
  
date: 2022-10-25 08:00:00
img: /images/cover/js.jpg  #设置本地图片
coverImg: /images/cover/js-banner.jpg  #设置本地图片
---


## typeof 原理

[typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 运算符返回一个字符串，表示操作数的类型。

javascript 在底层存储变量的时候,会在变量的机器码的低位(前三位) 1-3 位存储其类型信息: 对象:000 (null 是 000， 这也是 null 的 typeof 值为什么是 object 的原因) 浮点数:010 字符串:100 布尔:110 ”。
`typeof`直接根据变量值得内存标识符进行判断并返回的是对应字符串形式的值。

## 实现

```ts
/**
 * 模拟 typeof
 *
 * typeof原理：
 * js 在底层存储变量的时候,会在变量的机器码的低位1-3位存储其类型信息: 对象:000 (null 是 000， 这也是 null 的typeof 值为什么是object的原因) 浮点数:010 字符串:100 布尔:110 ”。
 * typeof直接根据变量值得内存标识符进行判断并返回的是对应字符串形式的值。
 *
 * 实现：
 * 1. 创建一个枚举对象
 * 2. 利用 Object.prototype.toString.call 来获取类型
 * 3. 再对 Number, String, Boolean 对象进行特殊处理
 *
 * @param target any
 * @returns string
 */
function _typeof(target: any) {
  const EnumMap = {
    ["[object Number]"]: "number",
    ["[object String]"]: "string",
    ["[object Object]"]: "object",
    ["[object Array]"]: "object",
    ["[object Null]"]: "object",
    ["[object Boolean]"]: "boolean",
    ["[object Function]"]: "function",
    ["[object Undefined]"]: "undefined",
    ["[object Symbol]"]: "symbol",
    ["[object BigInt]"]: "bigint",
    ["[object Set]"]: "object",
    ["[object Map]"]: "object"
  };

  const key: keyof typeof EnumMap = Object.prototype.toString.call(target);

  //  这个几个特殊处理一下
  if (
    ["[object Number]", "[object String]", "[object Boolean]"].includes(key) &&
    target instanceof Object
  ) {
    return "object";
  }
  return EnumMap[key];
}

// npx ts-node app/typeof.ts
// 如果有错 会有打印
const assert = require("assert");
// test
assert.equal(typeof 12312, _typeof(12312));
assert.equal(typeof new Number(12312), _typeof(new Number(12312)));
//
assert.equal(typeof true, _typeof(true));
assert.equal(typeof false, _typeof(false));
assert.equal(typeof new Boolean(true), _typeof(new Boolean(true)));
assert.equal(typeof new Boolean(false), _typeof(new Boolean(false)));
//
assert.equal(typeof "string", _typeof("string"));
assert.equal(typeof new String("string"), _typeof(new String("string")));

// object
assert.equal(typeof {}, _typeof({}));
assert.equal(typeof new Object({}), _typeof(new Object({})));
assert.equal(typeof Object.create({}), _typeof(Object.create({})));
//
assert.equal(typeof [], _typeof([]));
assert.equal(typeof new Array(), _typeof(new Array()));
//
assert.equal(typeof null, _typeof(null));
//
assert.equal(typeof undefined, _typeof(undefined));

//
assert.equal(
  typeof (() => {}),
  _typeof(() => {})
);
assert.equal(
  typeof function a() {},
  _typeof(function a() {})
);
assert.equal(typeof new Function(), _typeof(new Function()));

//
assert.equal(typeof Symbol, _typeof(Symbol));
assert.equal(typeof Symbol(), _typeof(Symbol()));

// // bigint
// assert.equal(typeof 123n, _typeof(123n));
// assert.equal(typeof new BigInt(123n), _typeof(new BigInt(123n)));

assert.equal(typeof new Set(), _typeof(new Set()));
assert.equal(typeof new Set([1, 2, 3, 4]), _typeof(new Set([1, 2, 3, 4])));

//
assert.equal(typeof new Map(), _typeof(new Map()));

//
class Point {}

let point = new Point();

assert.equal(typeof Point, _typeof(Point));
assert.equal(typeof point, _typeof(point));
```