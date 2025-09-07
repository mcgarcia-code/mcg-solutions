import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/servicio/:slug', // ej: /servicio/ecommerce
    name: 'ServiceDetail',
    // Carga el componente de la página de servicio cuando se visita la ruta
    component: () => import('../views/ServiceDetailView.vue'),
    props: true, // Esto permite pasar el 'slug' como una prop
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    // Creamos un nuevo componente para esta vista
    component: () => import('../views/ProyectosView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Sube al principio de la página cada vez que se cambia de ruta
  scrollBehavior(to, _from, _savedPosition) {
    // Si la ruta a la que vamos tiene un "hash" (ej: /#contacto)...
    if (to.hash) {
      // ...nos desplazamos a ese elemento con un efecto suave.
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      // Si no, es un cambio de página normal, así que vamos al principio.
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router
