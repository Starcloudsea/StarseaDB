import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const enUSConfig = defineConfig({

  lang: 'en-US',

  title: "Starcloudsea D&B",
  description: "The blog and documentation of the Nebula Sea Monster, who wants to do everything but \"doesn't know anything\" about editing videos and writing code (but will climb up to your window at night ψ(｀∇´)ψ)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/enUS/' },
      {
        text: 'Blogs',
        items: [
          {text: 'Home', link: '/enUS/Blogs/Home'},
          { 
            text: 'Texts',
            items: [
              { text: 'Articles', link: '/enUS/Blogs/Texts/Articles' },
            ] 
          },
          
          { 
            text: 'Resources', 
            items: [
              { text: 'Pieces', link: '/enUS/Blogs/Resources/Pieces' },
              { text: 'Share', link: '/enUS/Blogs/Resources/Share' },
            ] 
          },
          { 
            text: 'Media Library',
            items: [
              { text: 'Images', link: '/enUS/Blogs/MediaLibrary/Images' },
              { text: 'Videos', link: '/enUS/Blogs/MediaLibrary/Videos' },
              { text: 'Audios', link: '/enUS/Blogs/MediaLibrary/Audios' },
            ]
          },
        ]
      },
      { 
        text: 'Docs',
        items: [
          {text: 'Home', link: '/enUS/Docs/Home'},
          {
            text: 'Docs for the Starcloudsea project',
            items: [
              { text: 'BlockMetro.Avalonia', link: '/enUS/Docs/StarcloudseaProjectDocs/BlockMetroAvalonia' },
              { text: 'Other Documents', link: '/enUS/Docs/StarcloudseaProjectDocs/OtherDocuments' },
            ]
          },
          {
            text: 'Docs of other people\'s projects',
            items: [
              { text: 'Other Documents', link: '/enUS/Docs/OtherPersonProjectDocs/OtherDocuments' },
            ]
          },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer: {
      message: 'The site uses the <a href="https://github.com/Starcloudsea/StarseaDB.github.io/blob/main/LICENSE">Apache 2.0</a> open source protocol and is deployed on <a href="https://github.com/Starcloudsea/StarseaDB.github.io">GitHub Pages</a>. (Please give me a Star QAQ)<br/><strong>All content created and published by Starcloudsea</strong> on this site is shared under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"</a>CC BY-NC-SA 4.0</a> license for non-commercial content and the <a href="https://creativecommons.org/licenses/by-sa/4.0/"</a>CC BY-SA 4.0</a> license for commercial content, <strong>where not otherwise indicated</strong>.',
      copyright: 'Copyright 2024 <a href="https://github.com/Starcloudsea">Starcloudsea</a> & <a href="https://github.com/BadMC-Studio">BadMC Studio</a>'
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
  }
})
