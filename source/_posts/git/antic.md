---
title: Git 常用命令
summary: Git 常用命令, 丢弃缓存和配置命令别名等 
tags: [Git, Tool]  #设置标签
date: 2023-02-18 08:00:00
keywords: git
categories:
- git
img: /images/cover/git.jpg  #设置本地图片
coverImg: /images/cover/git-banner.jpg  #设置本地图片
---

# shell

```shell
# rebase
git rebase master

# 解决冲突后
git add .

# continue
git rebase --continue
```

```shell
# discard 丢弃缓存
git reset HEAD

# 丢弃指定文件缓存
git reset HEAD <file>

# 撤销最新的commit
git reset HEAD^

# 修改最新的一次commit 日志
git commit --amend
## 或者使用别名
git ca

```

### 使用`;` 执行多条命令

```shell
git add .; git status
```

### 配置命令别名（[Aliases](https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-Git-Aliases)）

git 默认配置了部分别名，可以使用`git config --list` 查看

```bash
# git commit -m
# git config --global alias.cm commit -m
git cm

# git log --stat --abbrev-commit
# git config --global alias.ll log --stat --abbrev-commit
git ll

# git diff
# git config --global alias.d diff
git d
```

配置别名命令

```bash
# 配置别名命令
git config --global alias.st status

# 使用 git st 相当于 git status
git st
```

git log 别名配置

```bash
# git l
git config --global alias.l "log --graph --all --pretty=format:'%C(yellow)%h%C(cyan)%d%Creset %s %C(white)- %an, %ar%Creset'"

# git ll
git config --global alias.ll "log --stat --abbrev-commit"

# git lg
git config --global alias.lg "log --color --graph --pretty=format:'%C(bold white)%h%Creset -%C(bold green)%d%Creset %s %C(bold green)(%cr)%Creset %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"

# git llg
git config --global alias.llg "log --color --graph --pretty=format:'%C(bold white)%H %d%Creset%n%s%n%+b%C(bold blue)%an <%ae>%Creset %C(bold green)%cr (%ci)' --abbrev-commit"
```
