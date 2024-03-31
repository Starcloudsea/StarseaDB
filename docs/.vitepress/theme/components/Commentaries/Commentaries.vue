<template>
    <div class="comment">
        <component
            v-if="refresh"
            :is="'script'"
            src="https://giscus.app/client.js"
            data-repo="Starcloudsea/StarseaDB"
            data-repo-id="R_kgDOLYAhKw"
            data-category="Commentaries"
            data-category-id="DIC_kwDOLYAhK84Cd6h4"
            data-mapping="title"
            data-strict="1"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="top"
            :data-theme="isDark === true ? 'dark_tritanopia' : 'light_tritanopia'"
            :data-lang="lang === 'zh-CN' ? 'zh-CN' : 'en'"
            crossorigin="anonymous"
            async>
        </component>

    </div>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';
    import { nextTick, ref, watch } from 'vue'
    import { useRoute } from 'vitepress'
    // 获取当前配色方案
    const { isDark } = useData();
    const { lang } = useData();


    const route = useRoute()
    const refresh = ref(true);

    watch([route, lang, isDark], async () => {
        refresh.value = false;
        await nextTick();
        refresh.value = true;
    })

</script>

<style scoped>
    .comment {
        margin-top: 20px;
    }
</style>