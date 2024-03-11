import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zhCNConfig = defineConfig({
  lang: 'zh-CN',
  title: "Starcloudsea D&B",
  description: "啥都想搞的Starcloudsea怪物的博客和文档，\"完全不懂\"剪视频和写代码(但会晚上爬你窗子ψ(｀∇´)ψ)",
  themeConfig: {
    sidebar: {
      'zhCN/Blogs/Texts/Newsfeed/': [
        { text: 'Home', link: '/zhCN/Blogs/Texts/Newsfeed/Home' },
        {
          text: 'Starcloudsea的收藏',
          items: [
            { text: 'Test', link: '/zhCN/Blogs/Texts/Newsfeed/src/Favorite/PendingChange' },
          ]
        },
        {
          text: 'Starcloudsea的最新发布',
          items: [
            { text: 'Test', link: '/zhCN/Blogs/Texts/Newsfeed/src/Last/PendingChange' },
          ]
        },
        {
          text: '其它动态(也许特别多)',
          items: [
            { text: 'Test', link: '/zhCN/Blogs/Texts/Newsfeed/src/Last/PendingChange' },
          ]
        }
      ],

      'zhCN/Blogs/Texts/Articles/': [
        { text: 'Home', link: '/zhCN/Blogs/Texts/Articles/Home' },
        {
          text: 'Starcloudsea的收藏',
          items: [
            { text: 'Test', link: '/zhCN/Blogs/Texts/Articles/src/Favorite/PendingChange' },
          ]
        },
        {
          text: 'Starcloudsea的最新发布',
          items: [
            { text: 'Test', link: '/zhCN/Blogs/Texts/Articles/src/Last/PendingChange' },
          ]
        },
        {
          text: '其它文章(也许特别多)',
          items: [
            { text: 'Test', link: '/zhCN/Blogs/Texts/Articles/src/Last/PendingChange' },
          ]
        }
      ],

    },

    nav: [
      { text: 'Home', link: '/zhCN/' },
      {
        text: 'Blogs',
        items: [
          {text: 'Home', link: '/zhCN/Blogs/Home'},
          { 
            text: '文本',
            items: [
              { text: '动态', link: '/zhCN/Blogs/Texts/Newsfeed/Home' },
              { text: '文章', link: '/zhCN/Blogs/Texts/Articles/Home' },
            ] 
          },
          
          { 
            text: '资源', 
            items: [
              { text: '作品', link: '/zhCN/Blogs/Resources/Pieces/Home' },
              { text: '分享', link: '/zhCN/Blogs/Resources/Share/Home' },
            ] 
          },
          { 
            text: '媒体库',
            items: [
              { text: '图片', link: '/zhCN/Blogs/MediaLibrary/Images/Home' },
              { text: '视频', link: '/zhCN/Blogs/MediaLibrary/Videos/Home' },
              { text: '音频', link: '/zhCN/Blogs/MediaLibrary/Audios/Home' },
            ]
          },
        ]
      },
      { 
        text: 'Docs',
        items: [
          {text: 'Home', link: '/zhCN/Docs/Home'},
          {
            text: 'Starcloudsea项目的文档',
            items: [
              { text: 'BlockMetro.Avalonia', link: '/zhCN/Docs/StarcloudseaProjectDocs/BlockMetroAvalonia/Home' },
              { text: '其它文档', link: '/zhCN/Docs/StarcloudseaProjectDocs/OtherDocuments/Home' },
            ]
          },
          {
            text: '别人项目的文档',
            items: [
              { text: '其它文档', link: '/zhCN/Docs/OtherPersonProjectDocs/OtherDocuments/Home' },
            ]
          },
        ]
      }
    ],


    footer: {
      message: '网站使用 <a href="https://github.com/Starcloudsea/StarseaDB.github.io/blob/main/LICENSE">Apache 2.0</a> 开源协议，并在 <a href="https://github.com/Starcloudsea/StarseaDB.github.io">GitHub Pages</a> 上部署(拜托给我点个Star QAQ)',
      copyright: '<a href="https://github.com/Starcloudsea">Starcloudsea</a> & <a href="https://github.com/BadMC-Studio">BadMC Studio</a> 版权所有 2024'
    },

    docFooter: {
      prev: '转到上一页',
      next: '转到下一页'
    },

    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    sidebarMenuLabel: '菜单',

    returnToTopLabel: '返回到顶部',

    langMenuLabel: '切换语言',

    externalLinkIcon: true,
  }
})
