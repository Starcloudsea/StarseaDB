<template>
    <div align="center">
        <div>
            <slot></slot>
        </div>
        <h1 v-if="title" class="text">{{ title }}</h1>
        <p v-if="tagline" class="taglinetext">{{ tagline }}</p>
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


.text {
    max-width: 392px;
    letter-spacing: -0.4px;
    line-height: 40px;
    font-size: 27px;
    font-weight: 700;
    white-space: pre-wrap;
    padding-top: 30px;
}

@media (min-width: 640px) {
    .text {
        max-width: 528px;
        line-height: 56px;
        font-size: 38px;
        padding-top: 30px;
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

</style>
