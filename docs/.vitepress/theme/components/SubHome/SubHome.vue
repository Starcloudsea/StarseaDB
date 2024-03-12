<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'subhome',
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        tagline: {
            type: String,
            default: ''
        },
        buttons: {
            type: Array,
            default: () => []
        },
        tiptitle: {
            type: String,
            default: ''
        },
    },
})
</script>

<template>
    <div align="center">
        <div>
            <slot></slot>
        </div>
        <h1 class="texth1">
            <span class="textspan">{{ title }}</span>
        </h1>
        <p v-if="subtitle" class="subtext">{{ subtitle }}</p>
        <p v-if="tagline" class="taglinetext">{{ tagline }}</p>
        <div class="actions">
            <a :target="item.target" :class="item.class" v-for="item in buttons" :href="item.link" :key="item">{{ item.text }}</a>
        </div>
        <h1 style="margin-top: 30px;" v-if="tiptitle">{{ tiptitle }}</h1>
    </div>
</template>

<style scoped>

.texth1 {
    color: var(--vp-home-hero-name-color);
    max-width: 392px;
    letter-spacing: -0.4px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 700;
    white-space: pre-wrap;
}

@media (min-width: 640px) {
    .texth1 {
        max-width: 576px;
        line-height: 56px;
        font-size: 48px;
    }
}

.texth1 {
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.subtext {
    max-width: 392px;
    letter-spacing: -0.4px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 700;
    white-space: pre-wrap;
}

@media (min-width: 640px) {
    .subtext {
        max-width: 528px;
        line-height: 56px;
        font-size: 48px;
    }
}

.taglinetext {
    padding-top: 8px;
    max-width: 392px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
    color: var(--vp-c-text-2);
}

@media (min-width: 640px) {
    .taglinetext {
        padding-top: 12px;
        max-width: 576px;
        line-height: 32px;
        font-size: 20px;
    }
}

.actions {
    flex-shrink: 0;
    padding: 6px;
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

.altbutton {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
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
</style>
