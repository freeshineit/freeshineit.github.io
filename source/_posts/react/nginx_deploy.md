---
title: docker nginx 部署React项目
summary: 使用docker nginx 容器部署create-react-app 创建的React项目和代理接口
tags: [React, Docker]  #设置标签
keywords: React, Docker
categories:
- React
- Docker

date: 2021-12-11
img: /images/cover/react.jpg  #设置本地图片
coverImg: /images/cover/react-banner.jpg  #设置本地图片
---


## docker nginx

1. 在项目根目录下新建 `docker-compose.yml`文件

```yml
version: "2"
services:
  # 服务名称
  nginx:
    # 镜像:版本
    image: nginx:latest
    # 映射容器80端口到本地80端口
    ports:
      - "80:80"
    # 数据卷 映射本地文件到容器
    # 这个更新起来特别香
    volumes:
      # 映射nginx.conf文件到容器的/etc/nginx/conf.d目录并覆盖default.conf文件
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      # 映射build文件夹到容器的/usr/share/nginx/html文件夹
      - ./build:/usr/share/nginx/html
    # 覆盖容器启动后默认执行的命令。
    command: /bin/bash -c "nginx -g 'daemon off;'"
```

挂载 nginx 配置

```bash
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        # 其作用是按顺序检查文件是否存在，返回第一个找到的文件或文件夹（结尾加斜线表示为文件夹），如果所有的文件或文件夹都找不到，会进行一个内部重定向到最后一个参数。
        try_files $uri /index.html;
    }

    # 接口代理
    location ^~ /api/ {
        # proxy_set_header X-Forwarded-Host $host;
        # proxy_set_header X-Forwarded-Server $host;
        # proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://xxx.xxxxx.xxxx;
    }
```

2. 编译 react 项目

```bash
yarn run build
```

3. 生成容器并部署

```bash
docker-compose up -d
```

4. 本地访问 `http://localhost/`

5. 停止并删除容器 `docker-compose down`