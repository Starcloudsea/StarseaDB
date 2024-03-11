<template>
    <div align="center">
        <div>
            <slot></slot>
        </div>
        <h1 v-if="title" data-v-72cc4481 class="title">{{ title }}</h1>
        <p v-if="tagline" data-v-72cc4481 class="tagline">{{ tagline }}</p>
        <ul align="left">
            <li v-if="imgprop" v-for="item in imgprop" ><strong>{{ item.text }}:</strong> {{ item.value }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'imageview',
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
        imgprop: {
            type: Array,
            default: () => []
        },
    },
})
</script>

<style scoped>


.title {
    max-width: 576px;
    line-height: 56px;
    font-weight: 700;
    padding-top: 30px;
}

</style>
