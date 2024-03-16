import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { basename, extname } from 'path'
import { config } from '@xytoki/asset-loader'
import { inject } from '@vercel/analytics';
config.urlToKey = function(url) {
    return basename(url).replace(extname(url), '')
}
inject();
createApp(App)
    .use(router)
    .mount('#toki')
