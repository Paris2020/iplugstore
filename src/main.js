import { createApp } from 'vue'
import App from './App.vue'

import VeeValidateComponents from "../plugins/veevalidate-components"
import VeeValidateRules from "../plugins/veevalidate-rules"

const app = createApp(App);

app.use(VeeValidateComponents)
app.use(VeeValidateRules)

app.mount("#app");
//createApp(App).mount('#app')
