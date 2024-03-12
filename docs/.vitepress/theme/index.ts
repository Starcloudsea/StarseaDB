// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import SubHome from './components/SubHome/SubHome.vue'
import ImageView from './components/ImageView/ImageView.vue'
import NotFound from './components/NotFound/NotFound.vue'
import Commentaries from './components/Commentaries/Commentaries.vue'
import './style.css'

export default {
  extends: DefaultTheme, 
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound),
      'doc-after': () => h(Commentaries),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('subhome' , SubHome)
    app.component('imageview' , ImageView)
  }
} satisfies Theme
