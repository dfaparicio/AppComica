import { createApp } from 'vue'
import { Quasar, Notify, Loading } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-icons'
import quasarLang from 'quasar/lang/es'
import App from './App.vue'
import './style.css'

import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(Quasar, {
  plugins: { Notify, Loading },
  iconSet: quasarIconSet,
  lang: quasarLang 
})

app.mount('#app')