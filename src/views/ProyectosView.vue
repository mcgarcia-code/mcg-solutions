<script setup>
import { ref, computed } from 'vue'
// 1. Importamos la imagen de fondo
import heroBg from '@/assets/images/hero-background.webp'

// --- Base de Datos de tus Proyectos ---
const proyectos = ref([
  {
    id: 1,
    title: 'Tienda de Ropa "UrbanStyle"',
    category: 'E-commerce',
    image: new URL('../assets/images/proyecto-1.webp', import.meta.url).href,
    description: 'Desarrollo de una tienda online completa con carrito de compras y pagos.',
  },
  {
    id: 2,
    title: 'Web Institucional "Fintech"',
    category: 'Corporativo',
    image: new URL('../assets/images/proyecto-2.webp', import.meta.url).href,
    description: 'Sitio web corporativo para una empresa de tecnología financiera.',
  },
  {
    id: 3,
    title: 'Portafolio de Fotografía',
    category: 'Portafolio',
    image: new URL('../assets/images/proyecto-3.webp', import.meta.url).href,
    description: 'Portafolio digital minimalista para un fotógrafo profesional.',
  },
  {
    id: 4,
    title: 'Landing Page "AppLaunch"',
    category: 'One Page',
    image: new URL('../assets/images/proyecto-4.webp', import.meta.url).href,
    description: 'One page para la campaña de lanzamiento de una nueva aplicación móvil.',
  },
  {
    id: 5,
    title: 'E-commerce de Vinos',
    category: 'E-commerce',
    image: new URL('../assets/images/proyecto-5.webp', import.meta.url).href,
    description: 'Tienda online elegante para una bodega de vinos boutique.',
  },
  {
    id: 6,
    title: 'Sitio Web para Estudio de Abogados',
    category: 'Corporativo',
    image: new URL('../assets/images/proyecto-6.webp', import.meta.url).href,
    description: 'Página web institucional que transmite seriedad y confianza.',
  },
])

// --- Lógica del Filtro ---
const categories = ['Todos', 'E-commerce', 'Corporativo', 'Portafolio', 'One Page']
const activeFilter = ref('Todos')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') {
    return proyectos.value
  }
  return proyectos.value.filter((p) => p.category === activeFilter.value)
})

const setFilter = (category) => {
  activeFilter.value = category
}
</script>

<template>
  <div class="proyectos-page">
    <section class="proyectos-hero py-5 text-center" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="overlay"></div>
      <div class="container position-relative">
        <h1 class="display-4 fw-bold text-white">Nuestro Trabajo</h1>
        <p class="lead text-dark-50">
          Explora algunos de los proyectos que hemos transformado en soluciones digitales exitosas.
        </p>
      </div>
    </section>

    <div class="container py-5">
      <div class="row mb-5">
        <div class="col text-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="setFilter(category)"
            class="btn btn-outline-dark mx-1 mb-2"
            :class="{ 'active-filter': activeFilter === category }"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="row g-4">
        <div v-for="proyecto in filteredProjects" :key="proyecto.id" class="col-lg-4 col-md-6">
          <div class="project-card shadow-sm">
            <img :src="proyecto.image" class="img-fluid" :alt="proyecto.title" />
            <div class="card-overlay">
              <div class="overlay-content">
                <h5 class="text-white fw-bold">{{ proyecto.title }}</h5>
                <p class="text-white-50">{{ proyecto.category }}</p>
                <a href="#" class="btn btn-sm btn-primary">Ver Detalles</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-5 text-center">
      <div class="container">
        <h2 class="fw-bold">¿Te gusta lo que ves?</h2>
        <p class="lead text-muted mb-4">Hagamos que tu proyecto sea el próximo caso de éxito.</p>
        <a href="/#contacto" class="btn btn-primary btn-lg">Contáctanos</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* --- Código CSS limpio y sin caracteres invisibles --- */
.proyectos-page {
  padding-top: 70px;
}

.proyectos-hero {
  position: relative;
  background-size: cover;
  background-position: center;
  color: #fff;
  min-height: 62vh; /* Establece una altura mínima (40% de la altura de la ventana) */
  display: flex;
  align-items: center; /* Centra el contenido verticalmente */
}
.proyectos-hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(13, 27, 42, 0.45), rgba(0, 0, 0, 0.9));
  z-index: 1;
}
.proyectos-hero .container {
  z-index: 2;
}

.active-filter {
  background-color: var(--mcg-blue) !important;
  color: #fff !important;
  border-color: var(--mcg-blue) !important;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;
}
.project-card img {
  transition: transform 0.4s ease;
}
.project-card:hover img {
  transform: scale(1.1);
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(13, 27, 42, 0.9), rgba(0, 0, 0, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-end;
}
.project-card:hover .card-overlay {
  opacity: 1;
}
.overlay-content {
  padding: 1.5rem;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}
.project-card:hover .overlay-content {
  transform: translateY(0);
}
</style>
