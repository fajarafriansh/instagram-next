import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLayout from './layouts/AppLayout'

import './assets/app.css'

const app = createApp(App)

app.config.globalProperties.$filters = {
  truncate(value, length) {
    if (value.length > length) {
      return value.substring(0, length - 1) + '...'
    }
    return value
  },
  date(value) {
    const date = new Date(value)
    return date.toLocaleDateString(['en-US'], {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    })
  },
}

app.use(router)
  .component('AppLayout', AppLayout)
  .mount('#app')
