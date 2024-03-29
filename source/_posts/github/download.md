---
title: 下载github上项目指定的文件夹
summary: 下载github上项目指定的文件夹 node实现和curl实现
tags: [Github, got]  #设置标签
date: 2022-02-09 09:00:00
keywords: github
categories:
- Github
img: /images/cover/github.jpg  #设置本地图片
coverImg: /images/cover/github-banner.jpg  #设置本地图片
---

## node 实现下载指定文件或文件夹

[got-github-examples](https://github.com/qqxs/got-github-examples)

1. 创建存储的文件夹

```ts
import fs from "fs";

export function makeDir(
  root: string,
  options = { recursive: true }
): Promise<string | undefined> {
  return fs.promises.mkdir(root, options);
}
```

2. 下载指定的文件夹或文件

```ts
import got from "got";
import tar from "tar";
import path from "path";
import { Stream } from "stream";
import { promisify } from "util";
import { makeDir } from "./make-dir";

const pipeline = promisify(Stream.pipeline);

// tar extract 内容放置的路径
const root = path.resolve("data-fetch-app");

async function downloadExample() {
  await makeDir(root);
  process.chdir(root);
  return pipeline(
    got.stream(
      // `https://codeload.github.com/${user}/${repo}/tar.gz/${branch}`
      // example
      `https://codeload.github.com/qqxs/got-github-examples/tar.gz/main`
    ),
    tar.extract(
      {
        cwd: root,
        strip: 3 // 层级
      },
      // [`${repo}-${branch}/${examplePath}`]
      // example
      [`got-github-examples-main/examples/example01`]
    )
  );
}

downloadExample();
```

3. 执行

```bash
ts-node index.ts
```

## curl 实现下载指定文件或文件夹

```bash
# mkdir my-app && curl https://codeload.github.com/[user]/[repo]/tar.gz/[branch] | tar -xz -C my-app --strip=2 [repo]-[branch]/[examplePath]
# 下载github上`freeshineit/next-examples`的 main分支下 `with-typescript-eslint-jest-app` 文件夹下所有的文件和文件夹
mkdir my-app && curl https://codeload.github.com/freeshineit/next-examples/tar.gz/main | tar -xz -C my-app --strip=2 next-examples-main/with-typescript-eslint-jest-app
```
