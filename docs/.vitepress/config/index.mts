import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared'
import { enUSConfig } from './enUS'
import { zhCNConfig } from './zhCN'

export default defineConfig({
  ...sharedConfig,
  locales: {
    zhCN: { label: '中文(简体)', lang: 'zh-CN', link: '/zhCN/', ...zhCNConfig },
    enUS: { label: 'English(US)', lang: 'en-US', link: '/enUS/', ...enUSConfig }
  }
})
