# Quick Start

## App Introduction

CatNote is an app for macOS that allows users to quickly record information without interrupting their workflow. This includes capturing fleeting inspirations, noting down ad-hoc tasks assigned on the fly, and retaining information from conversations with colleagues.

## Core Features

By simply double-clicking the option key, you can quickly open the recording box, where the cursor is automatically positioned inside the box without the need for a mouse or touchpad. After typing, pressing the enter key will automatically save the note.

Once the recording is finished, the recording box closes automatically, and the cursor instantly returns to its original position in the workflow, allowing the user to seamlessly resume their previous task without any disruption to their thought process.

## Installation and Usage

### Installation

After downloading the app, copy or drag it into the "Applications" folder. [Click here to download](https://github.com/immotal/KittyMemo/releases).

[Backup download address](https://pan.baidu.com/s/14QpN3ec73ybiPJc8VDG0Lg?pwd=1026)

### [Permissions and Privacy](https://support.apple.com/zh-cn/guide/mac-help/mh40616/mac)
As a third-party app not verified through the App Store, clicking on the app icon for the first time will prompt a warning dialog. Follow these steps to install the app properly:

::: warning Procedure
- On your Mac, select the Apple menu > "System Settings", then click on "Privacy & Security" in the sidebar. (You may need to scroll down or look carefully)

- Go to "Security", then click "Open".
 
- Click "Open Anyway".
 
- This button is available for one hour after you try to open the app.
 
- Enter your login password, then click "OK".
:::

### Configuration File

Kitty Memo uses a configuration file to set the address for recording files. Each entry in the recording box is tagged with a timestamp and appended to the document.

The configuration file is located at `$HOME/.config/sharpTodo/config.json`.

```json
{
  "tags": "THINK",
  "localFilePath": "/Users/mac/sharpTodo.csv",
  "token": "7981e2xxxxxxxxxxxxxxxa9aac40d",
  "category": "Life"
}
```

Currently, only the `localFilePath` is active, which is the address of the file where text records are stored. The default record file is `$HOME/sharpTodo.csv`, which users can modify as needed. Other parameters are not yet supported (but will be in the future).

::: warning HOME Directory
$HOME represents the home directory, typically found in the sidebar of Finder. If it's not there, you can add it to the sidebar by following these steps: Finder status bar → Settings → Sidebar → Check the desired option.
:::

::: warning Hidden Directories
Directories and files starting with `.` are hidden by default on macOS and are not visible in Finder (though accessible via the command line). To display hidden files, use `Command + Shift + .`.
:::
