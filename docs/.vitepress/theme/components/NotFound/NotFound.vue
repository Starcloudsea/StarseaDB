<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'
const { site } = useData()
</script>

<template>
  <div class="NotFound">
    <img src="/Images/docs/NotFoundPage.png"/>
    <h1 class="title">ERROR 404</h1>
    <h1 class="subtitle">Page Not Found</h1>
    <p class="information">
      We can't find the page that this link navigates to.
      <br/>It could be because you entered the wrong URL or simply because Starcloudsea didn't write it.
      <br/>If this is indeed a bug, please open an issues on GitHub.
    </p>
    <div class="action">
      <a class="brandbutton" :href="site.base" aria-label="Back to Home"> Back to Home </a>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 30px 24px 96px;
  text-align: center;
}
@media (min-width: 768px) {
  .NotFound {
    padding: 30px 32px 168px;
  }
}
img {
  max-width: 600px;
  max-height: 600px;
  display: inline;
}
.title {
  margin-top: 30px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 56px;
  font-size: 48px;
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}
.subtitle {
  font-size: 30px;
  line-height: 56px;
  font-weight: 700;
  letter-spacing: -0.4px;
}
.information {
  padding-top: 12px;
  line-height: 32px;
  font-size: 20px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}
.brandbutton {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px
}
.action {
  padding-top: 20px;
}
</style>
