<template>
    <div align="center">
        <div>
            <slot></slot>
        </div>
        <h1 class="name" data-v-72cc4481>
            <span data-v-72cc4481 class="clip">{{ title }}</span>
        </h1>
        <p v-if="subtitle" data-v-72cc4481 class="text">{{ subtitle }}</p>
        <p v-if="tagline" data-v-72cc4481 class="tagline">{{ tagline }}</p>
        <div data-v-72cc4481 class="action">
            <a data-v-2dba8ca9 :class="item.class" v-for="item in buttons" :href="item.link" :key="item">{{ item.text }}</a>
        </div>
        <h1 v-if="tiptitle">{{ tiptitle }}</h1>
    </div>
</template>

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

<style scoped>
a {
    text-decoration: none;
    margin-right: 5px;
    margin-left: 5px
}
</style>
