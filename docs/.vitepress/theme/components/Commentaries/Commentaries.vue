<template>
    <div class="comment">
        <component
            v-if="isDark"
            :is="'script'"
            src="https://giscus.app/client.js"
            data-repo="Starcloudsea/StarseaDB"
            data-repo-id="R_kgDOLYAhKw"
            data-category="Commentaries"
            data-category-id="DIC_kwDOLYAhK84Cd6h4"
            data-mapping="url"
            data-strict="1"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="top"
            data-theme="dark_tritanopia"
            data-lang="zh-CN"
            crossorigin="anonymous"
            async>
        </component>
        <component
            v-else
            :is="'script'"
            src="https://giscus.app/client.js"
            data-repo="Starcloudsea/StarseaDB"
            data-repo-id="R_kgDOLYAhKw"
            data-category="Commentaries"
            data-category-id="DIC_kwDOLYAhK84Cd6h4"
            data-mapping="url"
            data-strict="1"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="top"
            data-theme="light_tritanopia"
            data-lang="zh-CN"
            crossorigin="anonymous"
            async>
        </component>
    </div>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';
    // 获取当前配色方案
    const { isDark } = useData();
</script>

<style scoped>
    .comment {
        margin-top: 20px;
    }
</style>