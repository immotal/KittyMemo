(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{343:function(t,e,a){"use strict";a.r(e);var s=a(25),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),e("h2",{attrs:{id:"app-introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-introduction"}},[t._v("#")]),t._v(" App Introduction")]),t._v(" "),e("p",[t._v("CatNote is an app for macOS that allows users to quickly record information without interrupting their workflow. This includes capturing fleeting inspirations, noting down ad-hoc tasks assigned on the fly, and retaining information from conversations with colleagues.")]),t._v(" "),e("h2",{attrs:{id:"core-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-features"}},[t._v("#")]),t._v(" Core Features")]),t._v(" "),e("p",[t._v("By simply double-clicking the option key, you can quickly open the recording box, where the cursor is automatically positioned inside the box without the need for a mouse or touchpad. After typing, pressing the enter key will automatically save the note.")]),t._v(" "),e("p",[t._v("Once the recording is finished, the recording box closes automatically, and the cursor instantly returns to its original position in the workflow, allowing the user to seamlessly resume their previous task without any disruption to their thought process.")]),t._v(" "),e("h2",{attrs:{id:"installation-and-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-usage"}},[t._v("#")]),t._v(" Installation and Usage")]),t._v(" "),e("h3",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v('After downloading the app, copy or drag it into the "Applications" folder. '),e("a",{attrs:{href:"https://github.com/immotal/KittyMemo/releases/tag/v1.0.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Click here to download"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"permissions-and-privacy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permissions-and-privacy"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://support.apple.com/zh-cn/guide/mac-help/mh40616/mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("Permissions and Privacy"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("As a third-party app not verified through the App Store, clicking on the app icon for the first time will prompt a warning dialog. Follow these steps to install the app properly:")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Procedure")]),t._v(" "),e("ul",[e("li",[e("p",[t._v('On your Mac, select the Apple menu > "System Settings", then click on "Privacy & Security" in the sidebar. (You may need to scroll down or look carefully)')])]),t._v(" "),e("li",[e("p",[t._v('Go to "Security", then click "Open".')])]),t._v(" "),e("li",[e("p",[t._v('Click "Open Anyway".')])]),t._v(" "),e("li",[e("p",[t._v("This button is available for one hour after you try to open the app.")])]),t._v(" "),e("li",[e("p",[t._v('Enter your login password, then click "OK".')])])])]),t._v(" "),e("h3",{attrs:{id:"configuration-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file"}},[t._v("#")]),t._v(" Configuration File")]),t._v(" "),e("p",[t._v("Kitty Memo uses a configuration file to set the address for recording files. Each entry in the recording box is tagged with a timestamp and appended to the document.")]),t._v(" "),e("p",[t._v("The configuration file is located at "),e("code",[t._v("$HOME/.config/sharpTodo/config.json")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tags"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"THINK"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"localFilePath"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/mac/sharpTodo.csv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7981e2xxxxxxxxxxxxxxxa9aac40d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"category"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Life"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Currently, only the "),e("code",[t._v("localFilePath")]),t._v(" is active, which is the address of the file where text records are stored. The default record file is "),e("code",[t._v("$HOME/sharpTodo.csv")]),t._v(", which users can modify as needed. Other parameters are not yet supported (but will be in the future).")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("HOME Directory")]),t._v(" "),e("p",[t._v("$HOME represents the home directory, typically found in the sidebar of Finder. If it's not there, you can add it to the sidebar by following these steps: Finder status bar → Settings → Sidebar → Check the desired option.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Hidden Directories")]),t._v(" "),e("p",[t._v("Directories and files starting with "),e("code",[t._v(".")]),t._v(" are hidden by default on macOS and are not visible in Finder (though accessible via the command line). To display hidden files, use "),e("code",[t._v("Command + Shift + .")]),t._v(".")])])])}),[],!1,null,null,null);e.default=r.exports}}]);