// i18n.ts
import { createI18n } from 'vue-i18n'
import zh from './language/zh'
import en from './language/en'

const getCurrentLanguage = () :string => {
    const UAlang = navigator.language // zh-CN
    const langCode = UAlang.indexOf('zh') !==-1 ? 'zh' : 'en'
    window.localStorage.setItem('Lang', langCode)
    return langCode
}

const i18n = createI18n({
    legacy: false,  // 没有该参数可能会报错
    globalInjection: true,
    locale: getCurrentLanguage() || 'zh',
    messages: {
        zh,
        en
    }
})



export default i18n