import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueScrollTo from 'vue-scrollto'

//import Email from "../plugins/smtp"
import VeeValidateComponents from "../plugins/veevalidate-components"
import VeeValidateRules from "../plugins/veevalidate-rules"
import AnimatedCounter from "vue-animated-counter"

createApp(App).
    use(store).
    use(VeeValidateComponents).
    use(VeeValidateRules).
    //use(Email).
    use(VueScrollTo, {
        container: "body",
        duration: 500,
        easing: "ease",
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    }).
    component('AnimatedCounter', AnimatedCounter).mount('#app')
