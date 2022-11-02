import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import ElementPlus from "element-plus"
import ko from "element-plus/es/locale/lang/ko"
import { createVuetify } from './plugins/vuetify'

loadFonts()

const app = createApp(App);

createApp(App)
  .use(router)
  .use(store)
  .use(createVuetify)
  .use(ElementPlus, {locale:ko})
  .mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import ElementPlus from "element-plus"
// import ko from "element-plus/es/locale/lang/ko"


// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'


// Vue.config.productionTip = false


// export const eventBus = new Vue()

// export default new Vuetify({
//     icons: {
//       iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
//     }
//   })
  

// Vue.use(Vuetify)

// new Vue({
//     el: '#app',
//     router,
//     store,
//     ElementPlus,
//     locale:{ko},
//     components: { App },
//     template: '<App/>',
//     vuetify: new Vuetify(),

// })



  