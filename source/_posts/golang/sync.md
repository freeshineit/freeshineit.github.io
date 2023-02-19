---
title: Golang Sync
summary: Golang 同步实现，两种方式 `sync.WaitGroup` 和 `channel`
tags: [Golang, goroutine, channel]  #设置标签
date: 2023-02-18 09:00:00
keywords: golang,sync,goroutine,channel
categories:
- Golang

img: /images/cover/golang.jpg  #设置本地图片
coverImg: /images/cover/golang-banner.jpg  #设置本地图片
---


## golang goroutine 同步操作

### [sync.WaitGroup](https://golang.org/pkg/sync/#WaitGroup)

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func worker(i int, wg *sync.WaitGroup) {
	fmt.Printf("sync worker %d starting\n", i)
	time.Sleep(time.Second)
	fmt.Printf("sync worker %d done\n", i)
	defer wg.Done()
}

// sync.WaitGroup
func SyncWaitGroup() {
	var wg sync.WaitGroup
	fmt.Println("this is SyncWaitGroup func")
	for i := 1; i <= 10; i++ {
		// 创建10个 goroutine
		wg.Add(1)
		go worker(i, &wg)
	}
	wg.Wait()
}

```

### [Channel](https://blog.golang.org/pipelines)

```go
package main

import (
	"fmt"
	"time"
)

func chanWorker(i int, done chan int) {
	fmt.Printf("chan worker %d starting\n", i)
	time.Sleep(time.Second)
	fmt.Printf("chan worker %d done\n", i)
	done <- i
}

// chan
func Channel() {
	c := make(chan int)
	fmt.Println("this is Channel func")
	for i := 1; i <= 10; i++ {
		// 创建10个 goroutine
		go chanWorker(i, c)
	}
	<-c
}

```
