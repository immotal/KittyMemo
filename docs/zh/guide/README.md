# 快速开始

## App 简介

小猫速记是一款应用于 macOS 上的 App，用户在进行连续的工作流过程中，使用小猫速记可以在不打断工作流的情况下，快速记录信息，包括瞬息而来的灵感，
临时分配的附加工作，同事交谈中的信息等场景。

## 核心卖点

只需双击 option 键，即可快速打开记录框，光标立即自动定位到记录框内，无需使用鼠标或者触控板手动定位，输入完成之后，点击回车键即可自动记录。

记录结束后，自动关闭记录框，同时光标即刻自动回到原工作流位置，用户可立即无缝衔接的回归原来的工作状态，不打断工作思路。

## 安装与使用

### 安装

下载 App 后，复制或者拖放到「应用程序」内即可，[下载地址请点击这里](https://github.com/immotal/KittyMemo/releases)。

如果点击此链接无法加载，说明无法访问 Github 地址，请从此[备用地址](https://pan.baidu.com/s/14QpN3ec73ybiPJc8VDG0Lg?pwd=1026)下载最新版本

### [权限与隐私](https://support.apple.com/zh-cn/guide/mac-help/mh40616/mac)
因为是第三方 App，没有经过 app store 的校验，因此点击 App 图标后，第一次会弹出一个警告对话框，这个时候需要按照以下流程进行操作即可正常安装 App。

::: warning 流程
- 在 Mac 上，选取苹果菜单  > 「系统设置」，然后点按边栏中的「隐私与安全性」。（你可能需要向下滚动或者仔细查找）
 
- 前往「安全性」，然后点按「打开」。
 
- 点按「仍要打开」。
 
- 此按钮在你尝试打开该 App 后一小时内可用。
 
- 输入你的登录密码，然后点按「好」即可。
:::

### 配置文件

小猫速记通过使用配置文件的方式设置文件记录的地址，每次记录框内记录的信息，都会打上时间的标签，然后追加到文档内。

配置文件的地址为 `$HOME/.config/sharpTodo/config.json`。

```json
{
  "tags" : "THINK",
  "localFilePath" : "\/Users\/mac\/sharpTodo.csv",
  "token" : "7981e2xxxxxxxxxxxxxxxa9aac40d",
  "category" : "生活"
}
```

目前生效的只有 `localFilePath` 地址，此地址即用户记录的文字信息的文件地址，默认的记录文件是 `$HOME/sharpTodo.csv`，用户可自行修改，其他参数目前都未生效（之后会支持）。

::: warning HOME 目录
$HOME 代表家目录，一般在访达（Finder）的左侧边栏， 如果没有则需要按如下流程添加到侧边栏， 访达状态栏 → 设置 → 边栏 → 选中即可
:::

::: warning 隐藏目录
`.` 开头的是隐藏目录和文件，一般情况下在 Mac 的访达中是无法直接看到的（命令行不受影响），可以使用 `Command + Shift + .` 即可显示隐藏文件
:::
