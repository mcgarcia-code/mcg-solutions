import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- IMPORTANTE: Importa el router

// Imports de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router) // <-- IMPORTANTE: Usa el router

app.mount('#app')
