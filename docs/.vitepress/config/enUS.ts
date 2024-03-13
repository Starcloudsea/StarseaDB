import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

export const enUSConfig = defineConfig({

  lang: 'en-US',

  title: "Starcloudsea D&B",
  description: "The blog and documentation of the Nebula Sea Monster, who wants to do everything but \"doesn't know anything\" about editing videos and writing code (but will climb up to your window at night ψ(｀∇´)ψ)",
  themeConfig: {

    sidebar: generateSidebar([
      //About
      {
        debugPrint: true,
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Other/',
        resolvePath: '/enUS/Other/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Other'
      },
      //Blogs -> Texts : News
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Blogs/Texts/News',
        resolvePath: '/enUS/Blogs/Texts/News/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'News'
      },
      //Blogs -> Texts : Articles
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Blogs/Texts/Articles',
        resolvePath: '/enUS/Blogs/Texts/Articles/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Articles'
      },
      //Blogs -> Resources : Pieces
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Blogs/Resources/Pieces',
        resolvePath: '/enUS/Blogs/Resources/Pieces/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Pieces'
      },
      //Blogs -> Resources : Share
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Blogs/Resources/Share',
        resolvePath: '/enUS/Blogs/Resources/Share/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Resources shared on the web'
      },
      //Blogs -> MediaLibrary : Images
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Blogs/MediaLibrary/Images',
        resolvePath: '/enUS/Blogs/MediaLibrary/Images/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Images',
      },
      //Blogs -> MediaLibrary : Audios
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Blogs/MediaLibrary/Audios',
        resolvePath: '/enUS/Blogs/MediaLibrary/Audios/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Audios',
      },
      //Blogs -> MediaLibrary : Videos
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Blogs/MediaLibrary/Videos',
        resolvePath: '/enUS/Blogs/MediaLibrary/Videos/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Videos',
      },
      //Docs -> StarcloudseaProjectDocs : OtherDocs
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Docs/StarcloudseaProjectDocs/OtherDocs',
        resolvePath: '/enUS/Docs/StarcloudseaProjectDocs/OtherDocs/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Other documents (related items produced by Starcloudsea)',
      },
      //Docs -> OtherPersonProjectDocs : OtherDocs
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Docs/OtherPersonProjectDocs/OtherDocs',
        resolvePath: '/enUS/Docs/OtherPersonProjectDocs/OtherDocs/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'Other documents (related items produced by others)',
      },
      //Docs -> StarcloudseaProjectDocs : BlockMetro.Avalonia
      {
        documentRootPath: '/docs',
        scanStartPath: 'enUS/Docs/StarcloudseaProjectDocs/BlockMetroAvalonia',
        resolvePath: '/enUS/Docs/StarcloudseaProjectDocs/BlockMetroAvalonia/',
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
        scanStartPath: 'enUS/Docs/OtherPersonProjectDocs/MinecraftLaunch',
        resolvePath: '/enUS/Docs/OtherPersonProjectDocs/MinecraftLaunch/',
        useFolderTitleFromIndexFile: true,
        useTitleFromFrontmatter: true,
        sortMenusByName: true,
        includeEmptyFolder: true,
        collapseDepth: 10,
        rootGroupText: 'MinecraftLaunch',
      },
    ]),
    
    nav: [
      { text: 'Home', link: '/enUS/' },
      { text: 'Other', items: [
        {text: 'About Starcloudsea', 
          items: [
            { text: 'Home', link: '/zhCN/Other/About/Home' },
          ]},
        {text: 'Friendly Link', link: '/zhCN/Other/FriendlyLinks'},
      ]},
      {
        text: 'Blogs',
        items: [
          {text: 'Home', link: '/enUS/Blogs/Home'},
          { 
            text: 'Text',
            items: [
              { text: 'News', link: '/enUS/Blogs/Texts/News/Home' },
              { text: 'Articles', link: '/enUS/Blogs/Texts/Articles/Home' },
            ] 
          },
          
          { 
            text: 'Resources', 
            items: [
              { text: 'Pieces', link: '/enUS/Blogs/Resources/Pieces/Home' },
              { text: 'Resources Found on the web', link: '/enUS/Blogs/Resources/Share/Home' },
            ] 
          },
          { 
            text: 'Media Library',
            items: [
              { text: 'Images', link: '/enUS/Blogs/MediaLibrary/Images/Home' },
              { text: 'Videos', link: '/enUS/Blogs/MediaLibrary/Videos/Home' },
              { text: 'Audios', link: '/enUS/Blogs/MediaLibrary/Audios/Home' },
            ]
          },
        ]
      },
      { 
        text: 'Docs',
        items: [
          {text: 'Home', link: '/enUS/Docs/Home'},
          {
            text: 'Documentation for Starcloudsea\'s projects',
            items: [
              { text: 'BlockMetro.Avalonia', link: '/enUS/Docs/StarcloudseaProjectDocs/BlockMetroAvalonia/Home' },
              { text: 'Other Documents', link: '/enUS/Docs/StarcloudseaProjectDocs/OtherDocs/Home' },
            ]
          },
          {
            text: 'Documentation for other people\'s projects',
            items: [
              { text: 'MinecraftLaunch', link: '/enUS/Docs/OtherPersonProjectDocs/MinecraftLaunch/Home' },
              { text: 'Other Documents', link: '/enUS/Docs/OtherPersonProjectDocs/OtherDocs/Home' },
            ]
          },
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/Starcloudsea/StarseaDB/tree/main/docs/:path',
      text: 'View or edit this page on GitHub'
    },

    docFooter: {
      prev: 'Go to previous page',
      next: 'Go to next page'
    },

    lightModeSwitchTitle: 'Switch to light color mode',
    darkModeSwitchTitle: 'Switch to Dark Mode',

    sidebarMenuLabel: 'Menu',

    returnToTopLabel: 'Return to top',

    langMenuLabel: 'Change language',

    externalLinkIcon: true,

    footer: {
      message: 'The site uses the <a href="https://github.com/Starcloudsea/StarseaDB/blob/main/LICENSE">Apache 2.0</a> open source protocol and is deployed on <a href="https://github.com/Starcloudsea/StarseaDB">GitHub Pages</a>. (Please give me a Star QAQ)<br/><strong>All content created and published by Starcloudsea</strong> on this site is shared under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"</a>CC BY-NC-SA 4.0</a> license for non-commercial content and the <a href="https://creativecommons.org/licenses/by-sa/4.0/"</a>CC BY-SA 4.0</a> license for commercial content, <strong>where not otherwise indicated</strong>.',
      copyright: 'Copyright 2024 <a href="https://github.com/Starcloudsea">Starcloudsea</a> & <a href="https://github.com/BadMC-Studio">BadMC Studio</a>'
    },
  }
})
