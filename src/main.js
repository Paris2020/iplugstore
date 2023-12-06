import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import VeeValidateComponents from "../plugins/veevalidate-components"
import VeeValidateRules from "../plugins/veevalidate-rules"
import AnimatedCounter from "vue-animated-counter"

createApp(App).
    use(store).
    use(VeeValidateComponents).
    use(VeeValidateRules).
    component('AnimatedCounter', AnimatedCounter).mount('#app')
