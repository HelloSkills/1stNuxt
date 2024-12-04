export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    ssr: true,

    css: [
        'assets/scss/main.scss',
        'assets/scss/root.scss',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
            @use "assets/scss/variables.scss" as *;
`,
                },
            },
        },
    },

    modules: [
        '@unocss/nuxt',
        '@nuxt/content'
    ],

    content: {
        yaml: {},
    }

});