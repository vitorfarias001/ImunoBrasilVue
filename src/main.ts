import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import {store} from './store'
import { loadFonts } from './plugins/webfontloader'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import elptbr from 'element-plus/dist/locale/pt-br.mjs'
import 'dayjs/locale/pt-br'

import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

library.add(fas);
library.add(fab);

loadFonts()

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(ElementPlus, {
    locale: elptbr
  })
  .use(moshaToast)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
