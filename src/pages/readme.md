# Markdown 语法

## 有序列表

使用数字加`.` 加空格开头

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

## 无序列表

使用`-` 加空格开头

- 无序列表
- 无序列表
- 无序列表
  - 无序列表
  - 无序列表

## 引用

使用`>`开头

> 对于美德，我们仅止于认识是不够的，我们还必须努力培养它，运用它，或是采取种种方法，以使我们成为良善之人。 **——亚里士多德**

## 粗体

使用`**`进行包括

**粗体**

## 斜体

使用`*`进行包括

_斜体_

## 加粗斜体

使用`***`进行包括

**_斜体_**

## 链接

`[链接名](链接地址)`

[ShineShao](https://github.com/freeshineit)

[![ShineShao](https://avatars2.githubusercontent.com/u/16034259?s=460&u=7caff2589de5d263f44675662d8f1a5b91a1d706&v=4)](https://github.com/freeshineit)

## 分割线

使用至少连续的三个`-`

---

## 删除线

使用`~~`进行包括

~~分割线~~

## 图片

`![alt的值](图片地址)`

![ShineShao](https://avatars2.githubusercontent.com/u/16034259?s=460&u=7caff2589de5d263f44675662d8f1a5b91a1d706&v=4)

## 表格

```
|  表头    | 表头     |   表头   |
| :------ | :------: | -------:|
| 内容居左 |  内容居中  | 内容居右 |

```

| 表头   |  表头  |   表头 |
| :----- | :----: | -----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

## 代码块

```go
package main;

import "fmt";

func main () {
  fmt.Println("Hello World")
}
```

## diff

```diff
+ 123
- 123412
```

## 普通文本

每个人都会有缺陷，就像被上帝咬过的苹果，有的人缺陷比较大，正是因为上帝特别喜欢他的芬芳。

## 脚注

使用 `Markdown`[^1]可以效率的书写文档, 直接转换成 `HTML`[^2], 你可以使用 `Typora`[^t] 编辑器进行书写。

[^1]: Markdown 是一种纯文本标记语言
[^2]: HyperText Markup Language 超文本标记语言
[^t]: [NEW WAY TO READ & WRITE MARKDOWN.](https://www.baidu.com)

[MIT](LICENSE) © [ShineShao](https://wooorm.com)
