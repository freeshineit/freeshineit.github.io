---
title: svg 转图片
summary: svg 转图片
tags: [Svg]  #设置标签
keywords: Svg, Image
categories:
- Svg
  
date: 2023-02-24 22:00:00
img: /images/cover/js.jpg  #设置本地图片
coverImg: /images/cover/js-banner.jpg  #设置本地图片
---

## svg 转图片

```js
// 序列化 svg 文件（xml） 转成字符串
const svgString = new XMLSerializer()
  .serializeToString(document.getElementById('svg'));

const img = new Image();
// svgString svg的xml文件字符串
const svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});

const domURL = self.URL || self.webkitURL || self;
const url = domURL.createObjectURL(svg);

img.src = url;

// append img to body
// ...
```

