---
title: Markdown
summary: Markdown 语法
tags: [Markdown]  #设置标签
keywords: markdown, document
categories:
- Markdown
img: /images/cover/mac.jpg  #设置本地图片
---

## 有序列表

使用数字加`.` 加空格开头

```markdown
1. 有序列表 1
2. 有序列表 2
3. 有序列表 3
```

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

## 无序列表

使用`-` 加空格开头

```markdown
- 无序列表
- 无序列表
- 无序列表
  - 无序列表
  - 无序列表
```

- 无序列表
- 无序列表
- 无序列表
  - 无序列表
  - 无序列表

## 标题

使用`#`加空格开头


### Heading H3

#### Heading H4

## 引用

使用`>`开头

```markdown
> 对于美德，我们仅止于认识是不够的，我们还必须努力培养它，运用它，或是采取种种方法，以使我们成为良善之人。 --莎士比亚

> > 黑夜无论怎样悠长，白昼总会到来。

> > > To be or not to be,that's a question. --莎士比亚
```

> 对于美德，我们仅止于认识是不够的，我们还必须努力培养它，运用它，或是采取种种方法，以使我们成为良善之人。 --莎士比亚

> > 黑夜无论怎样悠长，白昼总会到来。

> > > To be or not to be,that's a question. --莎士比亚

## 粗体

使用`**`进行包括

```bash
**粗体**
```

**粗体**

## 斜体

使用`*`或`_`进行包括

```markdown
_斜体_
```

_斜体_

## 斜体加粗

使用`**`进行包括

```markdown
**_斜体_**
```

**_斜体_**

## 图片

`![img alt的值](图片地址)`

```markdown
![ShineShao](https://avatars2.githubusercontent.com/u/16034259?s=460&u=7caff2589de5d263f44675662d8f1a5b91a1d706&v=4)
```

![ShineShao](https://avatars2.githubusercontent.com/u/16034259?s=460&u=7caff2589de5d263f44675662d8f1a5b91a1d706&v=4)

## 链接

`[链接名](链接地址)`

```markdown
{/_ 链接 _/}
[ShineShao](https://github.com/freeshineit)

{/_ 图片链接 _/}
[![ShineShao](https://avatars2.githubusercontent.com/u/16034259?s=460&u=7caff2589de5d263f44675662d8f1a5b91a1d706&v=4)](https://github.com/freeshineit)
```

[ShineShao](https://github.com/freeshineit)

[![ShineShao](https://avatars2.githubusercontent.com/u/16034259?s=460&u=7caff2589de5d263f44675662d8f1a5b91a1d706&v=4)](https://github.com/freeshineit)

## 分割线

使用至少连续的三个`-`

```markdown
---
```

---

## 删除线

使用`~~`进行包括

```markdown
~~分割线~~
```

~~分割线~~

## 表格

```markdown
| 表头     |   表头   |     表头 |
| :------- | :------: | -------: |
| 内容居左 | 内容居中 | 内容居右 |
```

| 表头   |           表头           |                     表头 |
| :----- | :----------------------: | -----------------------: |
| 单元格 |          单元格          | 单元格单元格单元格单元格 |
| 单元格 | 单元格单元格单元格单元格 |                   单元格 |

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

## checkbox

```markdown
- [ ] 任务一 未做任务 `- + 空格 + [ ]`
- [x] 任务二 已做任务 `- + 空格 + [x]`
```

- [ ] 任务一 未做任务 `- + 空格 + [ ]`
- [x] 任务二 已做任务 `- + 空格 + [x]`

## 注释

```markdown
[//]: # "注释"
```

[//]: # "注释"

## 特殊字符

```markdown
&nbsp; 空格
&lt; <
&gt; >
&amp; &
&yen; ¥
&copy; ©
&reg; ®
&deg;C °C
&plusmn; ±
&times; ×
&divide; ÷
m&sup2; m²
m&sup3; m³
```

&nbsp;
&lt;
&gt;
&amp;
&yen;
&copy;
&reg;
&deg;C
&plusmn;
&times;
&divide;
m&sup2;
m&sup3;

## details

```markdown
<details>
  <summary>展开</summary>
  Something small enough to escape casual notice.
</details>
```

<details>
  <summary>展开</summary>
  Something small enough to escape casual notice.
</details>

## 表情

```markdown
🐶 👍
😁 🔕
```

🐶 👍
😁 🔕

## 脚注

```markdown
使用 `Markdown`[^1]可以效率的书写文档, 直接转换成 `HTML`[^2], 你可以使用 `Typora`[^t] 编辑器进行书写。

[^1]: Markdown 是一种纯文本标记语言
[^2]: HyperText Markup Language 超文本标记语言
[^t]: [NEW WAY TO READ & WRITE MARKDOWN.](https://www.baidu.com)
```

使用 `Markdown`[^1]可以效率的书写文档, 直接转换成 `HTML`[^2], 你可以使用 `Typora`[^t] 编辑器进行书写。

[^1]: Markdown 是一种纯文本标记语言
[^2]: HyperText Markup Language 超文本标记语言
[^t]: [NEW WAY TO READ & WRITE MARKDOWN.](https://www.baidu.com)

[MIT](LICENSE) © [ShineShao](https://github.com/freeshineit)
