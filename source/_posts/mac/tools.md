---
title: Mac 工具
description: "Mac 工具 homebrew iTerm2 vim 让开发更快"
tags: [mac, 工具]  #设置标签
keywords: mac, 工具
categories:
- 技术
image: /images/mac.jpg  #设置本地图片
---

## [homebrew](https://brew.sh/)

[homebrew](https://brew.sh/) 安装 `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

1. 安装插件

   - 安装 [git](https://git-scm.com/)

   `brew install git`

   - 安装 [autojump](https://github.com/wting/autojump)

   `brew install autojump`

   在 ~/.zshrc 中找到`plugins` 添加 `autojump`, 注意 ⚠️ 每个插件间用空格隔开

## [iTerm2](https://iterm2.com/)

1. 安装插件

   - 安装 [oh-my-zsh](https://ohmyz.sh/) 主题

   ```bash
    sh -c "\$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
   ```

   - 安装 [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

   ```bash
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
   ```

   在 ~/.zshrc 中找到`plugins` 添加 `zsh-autosuggestions`, 注意 ⚠️ 每个插件间用空格隔开

   - 安装 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

   ```bash
   git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
   ```

   在 ~/.zshrc 中找到`plugins` 添加 `zsh-syntax-highlighting`, 注意 ⚠️ 每个插件间用空格隔开

   最终结果

   ```bash
   plugins=(
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
    autojump
   )
   ```

## vim 配置

可以参考 阮一峰老师的 [Vim 配置入门](https://www.ruanyifeng.com/blog/2018/09/vimrc.html)

在 `~/.vimrc` 配置 (如果没有请自建`touch ~/.vimrc`)

我的基本设置

```bash
set number
syntax on
set mouse=a
set encoding=utf-8
set autoindent
set tabstop=2
set cursorline
set ruler
set showmatch
set incsearch
set hlsearch
```
