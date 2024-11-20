import { createApp,defineAsyncComponent } from "vue"
import {pinia} from 'host/store'
import App from "./App.vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"

const app = createApp(App)

app.use(pinia as any)
app.use(ElementPlus)
app.use(router)

app.mount("#app")
