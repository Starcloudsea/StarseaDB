import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const sharedConfig = defineConfig({
  base: '/StarseaDB/',
  outDir: "../public",
  title: "Starcloudsea D&B",
  description: "The blog and documentation of the Nebula Sea Monster, who wants to do everything but \"doesn't know anything\" about editing videos and writing code (but will climb up to your window at night ψ(｀∇´)ψ)",
  head: [
    ['link', { rel: 'icon', href: '/Images/PageIcons/StarseaDB.ico' }]
  ],
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/Images/PageIcons/StarseaD&B.svg',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Starcloudsea' },
      { icon: {
        svg: '<svg height="2404" viewBox="-.1 .5 960.1 923.7" width="2500" xmlns="http://www.w3.org/2000/svg"> <path d="m958.9 442.4c1.1 26.1-2 52.1-9.2 77.2-7.1 25.1-18.3 48.8-33.1 70.3a240.43 240.43 0 0 1 -53.6 56.2l-.5.4-199.9 149.8-98.3 74.5-59.9 45.2c-3.5 2.7-7.4 4.7-11.5 6.1s-8.5 2.1-12.9 2.1c-4.3 0-8.7-.7-12.8-2.1s-8-3.4-11.5-6.1l-59.9-45.2-98.3-74.5-198.7-148.9-1.2-.8-.4-.4c-20.9-15.7-39-34.7-53.8-56.2s-26-45.3-33.2-70.4c-7.2-25.1-10.3-51.2-9.2-77.3 1.2-26.1 6.5-51.8 15.8-76.2l1.3-3.5 130.7-340.5q1-2.5 2.4-4.8 1.3-2.3 3.1-4.3 1.7-2.1 3.7-3.9 2-1.7 4.2-3.2c3.1-1.9 6.3-3.3 9.8-4.1 3.4-.9 7-1.3 10.5-1.1 3.6.2 7.1.9 10.4 2.2 3.3 1.2 6.5 3 9.3 5.2q2 1.7 3.9 3.6 1.8 2 3.2 4.3 1.5 2.2 2.6 4.7 1.1 2.4 1.8 5l88.1 269.7h356.6l88.1-269.7q.7-2.6 1.9-5 1.1-2.4 2.6-4.7 1.4-2.2 3.2-4.2 1.8-2 3.9-3.7c2.8-2.2 5.9-3.9 9.2-5.2 3.4-1.2 6.9-1.9 10.4-2.1 3.6-.2 7.1.1 10.6 1 3.4.9 6.7 2.3 9.7 4.2q2.3 1.4 4.3 3.2 2 1.7 3.7 3.8 1.7 2.1 3.1 4.4 1.3 2.3 2.3 4.8l130.5 340.6 1.3 3.5c9.3 24.3 14.6 50 15.7 76.1z"/> </svg>'
      }, link: 'https://gitlab.com/Starcloudsea'},
      { icon: 'discord', link: 'https://discord.gg/jfZPPpC3Av'},
      { icon: {
        svg: '<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/> </g> </svg>'
      }, link: 'https://space.bilibili.com/2123349162'},
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.086-10.432c.24-.84 1.075-1.541 1.99-1.648.187.694.388 1.373.545 2.063.053.23.037.495-.018.727-.213.892-1.248 1.242-1.978.685-.53-.405-.742-1.12-.539-1.827zm3.817-.197c-.125-.465-.256-.927-.393-1.42.5.13.908.36 1.255.698 1.257 1.221 1.385 3.3.294 4.731-1.135 1.49-3.155 2.134-5.028 1.605-2.302-.65-3.808-2.952-3.441-5.316.274-1.768 1.27-3.004 2.9-3.733.407-.182.58-.56.42-.93-.157-.364-.54-.504-.944-.343-2.721 1.089-4.32 4.134-3.67 6.987.713 3.118 3.495 5.163 6.675 4.859 1.732-.165 3.164-.948 4.216-2.347 1.506-2.002 1.297-4.783-.463-6.499-.666-.65-1.471-1.018-2.39-1.153-.083-.013-.217-.052-.232-.106-.087-.313-.18-.632-.206-.954-.029-.357.29-.64.65-.645.253-.003.434.13.603.3.303.3.704.322.988.062.29-.264.296-.678.018-1.008-.566-.672-1.586-.891-2.43-.523-.847.37-1.321 1.187-1.2 2.093.038.28.11.557.167.842l-.26.072c-.856.24-1.561.704-2.098 1.414-.921 1.22-.936 2.828-.041 3.947 1.274 1.594 3.747 1.284 4.523-.568.284-.676.275-1.368.087-2.065z"/> </g> </svg>'
      }, link: 'https://music.163.com/#/user/home?id=4947833811'},
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zhCN: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '找不到任何内容:',
                resetButtonTitle: '清除所有查询条件',
                footer: {
                  selectText: '导航到选中项',
                  navigateText: '切换选项',
                  closeText: '关闭搜索'
                }
              }
            }
          },
          enUS: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'Couldn\'t find anything:',
                resetButtonTitle: 'Clear all queries',
                footer: {
                  selectText: 'Navigate to the selection',
                  navigateText: 'Toggle selection',
                  closeText: 'Close Search'
                }
              }
            }
          }
        }
      }
    },

    footer: {
      message: 'The site uses the <a href="https://github.com/Starcloudsea/StarseaDB/blob/main/LICENSE">Apache 2.0</a> open source protocol and is deployed on <a href="https://github.com/Starcloudsea/StarseaDB">GitHub Pages</a>. (Please give me a Star QAQ)<br/><strong>All content created and published by Starcloudsea</strong> on this site is shared under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"</a>CC BY-NC-SA 4.0</a> license for non-commercial content and the <a href="https://creativecommons.org/licenses/by-sa/4.0/"</a>CC BY-SA 4.0</a> license for commercial content, <strong>where not otherwise indicated</strong>.',
      copyright: 'Copyright 2024 Starcloudsea & BadMC Studio'
    },

    lightModeSwitchTitle: 'Switch to light color mode',
    darkModeSwitchTitle: 'Switch to Dark Mode',

    langMenuLabel: 'Change language'
  }
})
