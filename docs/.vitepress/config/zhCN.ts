import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

export const zhCNConfig = defineConfig({
  lang: 'zh-CN',
  title: "Starcloudsea D&B",
  description: "啥都想搞的Starcloudsea怪物的博客和文档，\"完全不懂\"剪视频和写代码(但会晚上爬你窗子ψ(｀∇´)ψ)",
  themeConfig: {
    
    sidebar: generateSidebar([
      //About
      {
        debugPrint: true,
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/About/',
        resolvePath: 'zhCN/About/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '关于Starcloudsea'
      },
      //Blogs -> Texts : News
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Blogs/Texts/News/',
        resolvePath: 'zhCN/Blogs/Texts/News/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '动态'
      },
      //Blogs -> Texts : Articles
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Blogs/Texts/Articles/',
        resolvePath: 'zhCN/Blogs/Texts/Articles/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '文章'
      },
      //Blogs -> Resources : Pieces
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Blogs/Resources/Pieces/',
        resolvePath: 'zhCN/Blogs/Resources/Pieces/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '作品'
      },
      //Blogs -> Resources : Share
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Blogs/Resources/Share/',
        resolvePath: 'zhCN/Blogs/Resources/Share/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '分享'
      },
      //Blogs -> MediaLibrary : Images
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Blogs/MediaLibrary/Images/',
        resolvePath: 'zhCN/Blogs/MediaLibrary/Images/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '图库',
      },
      //Blogs -> MediaLibrary : Audios
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Blogs/MediaLibrary/Audios/',
        resolvePath: 'zhCN/Blogs/MediaLibrary/Audios/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '音频',
      },
      //Blogs -> MediaLibrary : Videos
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Blogs/MediaLibrary/Videos/',
        resolvePath: 'zhCN/Blogs/MediaLibrary/Videos/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '视频',
      },
      //Docs -> StarcloudseaProjectDocs : OtherDocs
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Docs/StarcloudseaProjectDocs/OtherDocs/',
        resolvePath: 'zhCN/Docs/StarcloudseaProjectDocs/OtherDocs/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '其它文档(Starcloudsea的项目)',
      },
      //Docs -> OtherPersonProjectDocs : OtherDocs
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Docs/OtherPersonProjectDocs/OtherDocs/',
        resolvePath: 'zhCN/Docs/OtherPersonProjectDocs/OtherDocs/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: '其它文档(别人的项目)',
      },
      //Docs -> StarcloudseaProjectDocs : BlockMetro.Avalonia
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Docs/StarcloudseaProjectDocs/BlockMetroAvalonia/',
        resolvePath: 'zhCN/Docs/StarcloudseaProjectDocs/BlockMetroAvalonia/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'BlockMetro.Avalonia',
      },
      //Docs -> StarcloudseaProjectDocs : MinecraftLaunch
      {
        documentRootPath: '/docs',
        scanStartPath: 'zhCN/Docs/OtherPersonProjectDocs/MinecraftLaunch/',
        resolvePath: 'zhCN/Docs/OtherPersonProjectDocs/MinecraftLaunch/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'MinecraftLaunch',
      },
    ]),

    nav: [
      { text: 'Home', link: '/zhCN/' },
      { text: '关于Starcloudsea', link: '/zhCN/About/Home' },
      {
        text: 'Blogs',
        items: [
          {text: 'Home', link: '/zhCN/Blogs/Home'},
          { 
            text: '文本',
            items: [
              { text: '动态', link: '/zhCN/Blogs/Texts/News/Home' },
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
              { text: '其它文档', link: '/zhCN/Docs/StarcloudseaProjectDocs/OtherDocs/Home' },
            ]
          },
          {
            text: '别人项目的文档',
            items: [
              { text: 'MinecraftLaunch', link: '/zhCN/Docs/OtherPersonProjectDocs/MinecraftLaunch/Home' },
              { text: '其它文档', link: '/zhCN/Docs/OtherPersonProjectDocs/OtherDocs/Home' },
            ]
          },
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/Starcloudsea/StarseaDB/tree/main/docs/:path',
      text: '在GitHub上查看或编辑此页'
    },

    lastUpdatedText: "最近更新时间",

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

    footer: {
      message: '网站使用 <a href="https://github.com/Starcloudsea/StarseaDB/blob/main/LICENSE">Apache 2.0</a> 开源协议，并在 <a href="https://github.com/Starcloudsea/StarseaDB">GitHub Pages</a> 上部署(拜托给我点个Star QAQ)<br/>该网站<strong>由Starcloudsea创作并发布的所有内容</strong>在<strong>不特别标注</strong>的情况下，对于非商业内容，使用<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"</a>CC BY-NC-SA 4.0</a>协议共享，对于商业内容，使用<a href="https://creativecommons.org/licenses/by-sa/4.0/"</a>CC BY-SA 4.0</a>协议共享',
      copyright: '<a href="https://github.com/Starcloudsea">Starcloudsea</a> & <a href="https://github.com/BadMC-Studio">BadMC Studio</a> 版权所有 2024'
    },
  }
})
