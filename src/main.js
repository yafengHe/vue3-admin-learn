import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import ElementPlus from "element-plus" // 这里我们直接全量引入
import "element-plus/dist/index.css"

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(ElementPlus)

app.mount("#app")
