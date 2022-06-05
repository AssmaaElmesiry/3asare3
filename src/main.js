import { createApp } from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueKinesis from "vue-kinesis";

library.add(fas, fab);

const app = createApp(App)

app.use(router)
app.use(VueKinesis);
app
.component('fa', FontAwesomeIcon)
.mount('#app')