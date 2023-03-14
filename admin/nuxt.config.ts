// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {lang: 'tr'},
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'qr menu'},
                {name: 'keywords', content: 'qr menu'},
                {name: 'robots', content: 'index follow'},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '_nuxt/static/favicon.ico' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap',
                    crossorigin: ''
                },    {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
                }
            ]
        }
    },
    css: [
        '@/assets/css/global.css'
    ]
})