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
        <h1 id="texth1">
            <span id="textspan">{{ title }}</span>
        </h1>
        <p v-if="subtitle" id="subtext">{{ subtitle }}</p>
        <p v-if="tagline" id="taglinetext">{{ tagline }}</p>
        <div id="actions">
            <a :target="item.target" :id="item.class" v-for="item in buttons" :href="item.link" :key="item">{{ item.text }}</a>
        </div>
        <h1 style="margin-top: 30px;" v-if="tiptitle">{{ tiptitle }}</h1>
    </div>
</template>

<style scoped>

</style>
