---
title: Sass 语法
summary: Sass 使用技巧和遇到的问题解决方案
tags: [Sass]  #设置标签
date: 2022-10-08
keywords: Sass, Scss
categories:
- css
- sass
img: /images/cover/css.jpg  #设置本地图片
coverImg: /images/cover/css-banner.jpg  #设置本地图片
---

## `@each` 使用说明

The [@each](https://sass-lang.com/documentation/at-rules/control/each) rule makes it easy to emit styles or evaluate code for each element of a list or each pair in a map. It’s great for repetitive styles that only have a few variations between them. It’s usually written

## code

```scss
$sizes: 40px, 50px, 80px;
@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}

# result .icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```

```scss
// 数组
$countries: ((ad, 376), (ae, 971)), ((az, 994), (ba, 387));
$offset: -32px;

@each $arr in $countries {
  // get index (form 1)
  $i: index($countries, $arr); // => number | null

  @each $c in $arr {
    $j: index($arr, $c);

    .flag.flag-#{nth($c, 1)} {
      background-position: $offset * ($j - 1) $offset * ($i - 1);
    }
  }
}

# result .flag.flag-ad {
  background-position: 0px 0px;
}
.flag.flag-ae {
  background-position: -32px 0px;
}
.flag.flag-az {
  background-position: 0px -32px;
}
.flag.flag-ba {
  background-position: -32px -32px;
}
```