const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'KittyMemo',
      description: 'Record inspiration quickly without interrupting the workflow, ready to jot down on the go.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '小猫速记',
      description: '不打断工作流程，快速记录灵感信息，立记可走'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/immotal/KittyMemo',
    repoLabel: 'github',
    docsRepo: 'https://github.com/immotal/KittyMemo',
    editLinks: true,
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/api/': getApiSidebar(),
          // '/guide/': getGuideSidebar('Guide', 'Advanced'),
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/api/': getApiSidebar(),
          '/zh/guide/': getGuideSidebar('指南', '其他'),
          // '/zh/posts/': getPostsSidebar('文章', '周刊')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart'],
    ['vuepress-plugin-element-tabs']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ]
})

function getApiSidebar() {
  return [
    'cli',
    'node'
  ]
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        '安装视频',
        '演示视频'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        '其他工具类网站'
      ]
    }
  ]
}

// const weeklyPosts = fs
//   .readdirSync(path.resolve(__dirname, '../zh/posts/weekly'))
//   .map(filename => 'weekly/' + filename.slice(0, -3))
//   .reverse()
//
// function getPostsSidebar(groupA, groupB) {
//   return [
//     {
//       title: groupA,
//       collapsable: false,
//       children: [
//         'copywriting-style-guide',
//         'markdown-lint'
//       ]
//     },
//     {
//       title: groupB,
//       collapsable: false,
//       children: weeklyPosts
//     }
//   ]
// }
