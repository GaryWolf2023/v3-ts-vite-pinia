import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './components/il8n/il8n'
import './components/iconfont/iconfont.css'
// import myPlugin from './plugins/plugins'
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import 'virtual:svg-icons-register'
// import SvgIcon from './components/SvgIcons/SvgIcon.vue'

const app = createApp(App)
// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(i18n)
// app.use(SvgIcon)
// app.use(myPlugin)
app.mount('#app')

