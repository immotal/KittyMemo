# Markdown 语法规范

Markdown 的语法没有唯一的官方标准，毕竟 Aaron Swartz 英年早逝。但是开源界普遍接受 GFM（GitHub Flavored Markdown）作为既定事实标准。所以我们也按照这个标准进行规范，另外对 Markdown 可以多种表达的语法结构做一定约束。

## 大家常见的错误和约束

### 1️⃣多级标题的使用

> 多级标题约定使用「**单侧 `#` 号表示**」也即：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

#### 需要注意的地方

1. 使用单侧 `#` 号，而非双侧形式 `# 一级标题 #`
2. `#` 号和标题之间必须添加一个`空格`
3. 标题前后需要添加`空行`
4. 多级标题需要层级连续使用，不要跳级
5. 一个文档有且仅有一个一级标题
6. 不使用三连字符法创建标题 `---` 和 `===` （deprecated）

### 2️⃣段落间的空行

> Markdown 任意段落之间必须使用一个`空行`隔开：

```markdown
# 标题下面要空行

段落 1，哪怕很短，下一个段落也要空行。

段落 2，下一个段落是有序列表，也需要空行：

1. 这是有序列表 1，下一个序号不需要空行
2. 这是有序列表 2，可以通过缩进混合无序列表使用
    - 这是无序列表，下一个表项也不需要空号
    - 列表结束之后也需要空行

> 这是一段引用。
>
> 引用内部形成段落也需要空行⬆️。
>
> > 引用层级可以嵌套
```

上面正确的语法会被各种编辑器和以及网页正确的 parse 和渲染：

段落 1，哪怕很短，下一个段落也要空行。

段落 2，下一个段落是有序列表，也需要空行：

1. 这是有序列表 1，下一个序号不需要空行
2. 这是有序列表 2，可以通过缩进混合无序列表使用
  - 这是无序列表，下一个表项也不需要空号
  - 列表结束之后也需要空行

> 这是一段引用。
>
> 引用内部形成段落也需要空行⬆️。
>
> > 引用层级可以嵌套

#### 需要注意的地方

1. Markdown 中所有连续空格以及空行都会被识别成一个，因此**不要在 Markdown 中使用连续空格和连续空行来排版**
2. Markdown 中单个换行符会被识别成 `</br>` 自闭合标签，而非段落标签 `<p></p>`，因此记得**段落之间保持的一个单独的空行**
3. **不要在一个段落中使用换行符**来进行硬回车，会被识别成一个空格，一个段落只占一行
4. 所有段落级别的语法都需要写成**标记符+空格**：例如 `1. 有序列表`，`- 无序列表`，`> 引用`，`# 标题`

### 引入代码

> 块级代码统一使用三个反引号 ` 符号，而非使用 8 个空格的缩进方式

块级代码使用三个反引号的包围结构有以下好处：

1. 清晰的开始和结束边界
2. 可以指明代码块的语法高亮语言

        ```python
        code here
        ```

#### 需要注意的地方

1. 但凡段落中出现**类、方法、变量、参数**，需要使用行内代码一个反引号符号 ` 包围
2. 块级代码需要指明使用的语言，确保语法高亮正确解析反引号
3. 再次强调，块级代码前后都需要一个空行

### 其他的一些约束

1. 英文单词应该与中文间有一个空格的间隔，标点符号前后都不应该有空格，参见 [盘古之白](https://sspai.com/post/33549)，点名表扬 @panpan.wu 规范的空格书写格式
2. 插入图片和链接优先使用行内引用表达式，而非参考引用表达式
3. 文档第一行必须以一级标题 `# 文档标题` 开始，或二级标题 `## 文档章节` 开始，不能没有标题没有层级，或则随意从三级、四级标题开始
4. Markdown 中的语法符号都是英文半角符号，切勿使用中文全角符号

## Markdown 风格检查工具

为了方便大家按照上述要求检查自己的 Markdown 风格，我给大家提供一个命令行工具，使用之前需要有 `npm` 环境，怎么安装环境我就不介绍了，下面安装检查工具：

```
npm install -g hs-markdownlint-cli
```

使用也很简单，同时支持对文件和整个文件夹的风格进行检查：

```
markdownlint <file>
markdownlint <dir>
```

更多命令请通过 `markdownlint -h` 查询帮助获得：

```
$ markdownlint -h

  Usage: markdownlint [options] <files|directories|globs>

  HS MarkdownLint Command Line Interface

  Options:

    -h, --help                                  output usage information
    -V, --version                               output the version number
    -s, --stdin                                 read from STDIN (no files)
    -o, --output [outputFile]                   write issues to file (no console)
    -c, --config [configFile]                   configuration file (JSON or YAML)
    -i, --ignore [file|directory|glob]          files to ignore/exclude
    -r, --rules  [file|directory|glob|package]  custom rule files
```

### 版本更新

- `0.1.2`：根据上述约束条件进行了配置修改

### VS Code 插件

如果你使用 VS Code 作为你的 Markdown 编辑器，那么可以直接使用插件库中的 `markdownlint` 插件，因为我们使用的是同一个语法检查库，所以只需要在 VS Code 的设置中对 User->Extensions->markdownlint 添加如下配置即可：

```json
{
    "markdownlint.config": {
        "line-length": false,
        "fenced-code-language": false,
        "no-duplicate-heading": false,
        "no-bare-urls": false,
        "MD007": { "indent": 4 }
    }
}
```

不符合语法风格的部分会在 VS Code 中使用绿色波浪线标记出来，右侧 minimap 也会高亮显示，方便大家定位修改。更多的使用方法，参照插件的使用说明即可。

### 注释

有些问题也是风格检查器检查不出来，例如：

- 由于中文原因，中文与英文、中文与数字、中文与代码之间的空格检查不出来，因为在英文环境下不存在这个问题
- 标题过长无法检查出来，只能对整篇文档的 line length 做限制，但是这种做法只在英文文档中是合理的，在中文文档中不合理（空格区分词汇的语言习惯可以用硬回车代替空格）
- 在段落中引用代码的时候没有加反引号，这个只能靠自己去判断该不该加

## GFM 参考

下面给大家附上 GitHub Flavored Markdown 语法手册，其中具有多种写法的语法点，我都在上面做了约束，下面的参考手册方便不熟悉语法的同学速查。大家也可以在 GitHub 官方网站中查看到更为详细的信息：[GFM 文档](https://github.github.com/gfm/)

### 标题

Markdown 语法：

```
# 第一级标题 `<h1>`
## 第二级标题 `<h2>`
###### 第六级标题 `<h6>`
```

效果如下：

# 第一级标题 `<h1>`

## 第二级标题 `<h2>`

###### 第六级标题 `<h6>`

### 强调

Markdown 语法：

```
*这些文字会生成`<em>`*
_这些文字会生成`<u>`_

**这些文字会生成`<strong>`**
__这些文字会生成`<strong>`__
```

效果如下：

*这些文字会生成`<em>`*
_这些文字会生成`<u>`_

**这些文字会生成`<strong>`**
__这些文字会生成`<strong>`__

### 列表

#### 无序列表

Markdown 语法：

```
- 项目一 无序列表 `- + 空格键`
- 项目二
    - 项目二的子项目一 无序列表 `TAB + - + 空格键`
    - 项目二的子项目二
```

效果如下：

- 项目一 无序列表 `- + 空格键`
- 项目二
    - 项目二的子项目一 无序列表 `TAB + - + 空格键`
    - 项目二的子项目二

#### 有序列表

Markdown 语法：

```
1. 项目一 有序列表 `数字 + . + 空格键`
2. 项目二
3. 项目三
    1. 项目三的子项目一 有序列表 `TAB + 数字 + . + 空格键`
    2. 项目三的子项目二
```

效果如下：

1. 项目一 有序列表 `数字 + . + 空格键`
2. 项目二
3. 项目三
    1. 项目三的子项目一 有序列表 `TAB + 数字 + . + 空格键`
    2. 项目三的子项目二

#### 任务列表（Task lists）

Markdown 语法：

```
- [ ] 任务一 未做任务 `- + 空格 + [ ]`
- [x] 任务二 已做任务 `- + 空格 + [x]`
```

效果如下：

- [ ] 任务一 未做任务 `- + 空格 + [ ]`
- [x] 任务二 已做任务 `- + 空格 + [x]`

### 图片

Markdown 语法：

```
![GitHub set up](http://zh.mweb.im/asset/img/set-up-git.gif)
格式：![Alt Text](url)
```

效果如下：

![GitHub set up](http://zh.mweb.im/asset/img/set-up-git.gif)

### 链接

Markdown 语法：

```
email <example@example.com>
[GitHub](http://github.com)
自动生成连接  <http://www.github.com/>
```

效果如下：

Email 连接： <example@example.com>
[连接标题 Github 网站](http://github.com)
自动生成连接像： <http://www.github.com/> 这样

### 区块引用

Markdown 语法：

```
某某说：

> 第一行引用
> 第二行费用文字
```

效果如下：

某某说：

> 第一行引用
> 第二行费用文字

### 行内代码

Markdown 语法：

```
像这样即可：`<addr>` `code`
```

效果如下：

像这样即可：`<addr>` `code`

### 多行或者一段代码

Markdown 语法：

    ```js
    function fancyAlert(arg) {
        if(arg) {
        $.facebox({div:'#foo'})
        }
    }
    ```

效果如下：

```js
function fancyAlert(arg) {
    if(arg) {
    $.facebox({div:'#foo'})
    }

}
```

### 表格

Markdown 语法：

```
第一格表头 | 第二格表头
--------- | -------------
内容单元格 第一列第一格 | 内容单元格第二列第一格
内容单元格 第一列第二格 多加文字 | 内容单元格第二列第二格
```

效果如下：

第一格表头 | 第二格表头
--------- | -------------
内容单元格 第一列第一格 | 内容单元格第二列第一格
内容单元格 第一列第二格 多加文字 | 内容单元格第二列第二格

### 删除线

Markdown 语法：

加删除线像这样用： ~~删除这些~~

效果如下：

加删除线像这样用： ~~删除这些~~

### 分隔线

以下三种方式都可以生成分隔线：

```
***

*****

- - -
```

效果如下：

***

*****

- - -
