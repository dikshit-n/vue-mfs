import { createApp } from "vue"
import { pinia } from 'host/store'
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(pinia as any)
app.use(router)

app.mount("#app")
