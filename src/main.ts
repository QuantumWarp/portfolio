
import { createApp } from 'vue'
import App from './App.vue'
import { tooltip } from './common/tooltip'

const app = createApp(App)

app.directive('tooltip', tooltip)

app.mount('#app')

