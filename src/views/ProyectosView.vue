<script setup>
import { ref, computed } from 'vue'
import heroBg from '@/assets/images/hero-background.webp'

// --- Base de Datos de tus Proyectos ---
const proyectos = ref([
  {
    id: 1,
    title: 'Concepto Kinésico - Rehabilitación y Bienestar',
    category: 'One Page',
    image: new URL('../assets/images/concepto.png', import.meta.url).href,
    description: 'Desarrollo de one page para clínica de kinesiología.',
    link: 'https://conceptokinesico.com.ar/', // Reemplaza # con la URL real
  },
  {
    id: 2,
    title: 'Web Institucional "Asociación Argentina Árbitros Balonmano"',
    category: 'Corporativo',
    image: new URL('../assets/images/aaab.webp', import.meta.url).href,
    description: 'Sitio web corporativo para Árbitros de Handball.',
    link: 'https://arbitroshandball.com.ar/', // URL real del proyecto
  },
  {
    id: 3,
    title: 'Landing Page "AppLaunch"',
    category: 'One Page',
    image: new URL('../assets/images/app-launch.png', import.meta.url).href,
    description: 'One page para la campaña de lanzamiento de una nueva aplicación móvil.',
    link: 'https://app-launch-landing.vercel.app/', // Reemplaza # con la URL real
  },
  /*
  {
    id: 4,
    title: 'Portafolio de Fotografía',
    category: 'Portafolio',
    image: new URL('../assets/images/proyecto-3.webp', import.meta.url).href,
    description: 'Portafolio digital minimalista para un fotógrafo profesional.',
    link: '#', // Reemplaza # con la URL real
  },
  {
    id: 5,
    title: 'E-commerce de Vinos',
    category: 'E-commerce',
    image: new URL('../assets/images/proyecto-5.webp', import.meta.url).href,
    description: 'Tienda online elegante para una bodega de vinos boutique.',
    link: '#', // Reemplaza # con la URL real
  },
  {
    id: 6,
    title: 'Sitio Web para Estudio de Abogados',
    category: 'Corporativo',
    image: new URL('../assets/images/proyecto-6.webp', import.meta.url).href,
    description: 'Página web institucional que transmite seriedad y confianza.',
    link: '#', // Reemplaza # con la URL real
  },*/
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
    <section class="proyectos-hero" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="overlay"></div>
      <div class="container position-relative">
        <h1 class="display-4 fw-bold text-white">Nuestro Trabajo</h1>
        <p class="lead text-white">
          Explora algunos de los proyectos que hemos transformado en soluciones digitales exitosas.
        </p>
      </div>
    </section>

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
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
                    <a
                      v-if="proyecto.link && proyecto.link !== '#'"
                      :href="proyecto.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-sm btn-primary"
                    >
                      Visitar Sitio
                    </a>
                  </div>
                </div>
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
  min-height: 75vh;
  display: flex;
  align-items: center;
  text-align: center;
}
.proyectos-hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(13, 27, 42, 0.85), rgba(0, 0, 0, 0.9));
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

/* --- MODIFICACIONES AQUI para que las tarjetas sean del mismo tamaño --- */
.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 100%; /* Asegura que la tarjeta ocupe toda la altura disponible en su columna */
  display: flex; /* Para que el contenido interno (imagen, overlay) maneje bien el tamaño */
  flex-direction: column; /* Coloca los elementos uno debajo del otro */
}

.project-card img {
  width: 100%; /* La imagen ocupa todo el ancho de la tarjeta */
  height: 180px; /* <--- ALTURA FIJA PARA LAS IMÁGENES: AJUSTA ESTE VALOR */
  object-fit: contain; /* <--- O "cover": decide cómo la imagen llena el espacio */
  /* 'contain': La imagen se escala para caber completamente dentro del contenedor, manteniendo su relación de aspecto. Puede dejar espacios vacíos (barras) si la relación de aspecto no coincide.
     'cover': La imagen se escala para cubrir completamente el contenedor, recortando las partes que no quepan. NO deja espacios vacíos. */
  transition: transform 0.4s ease;
  padding: 15px; /* Añade un padding interno a la imagen si usas 'contain' para que no se pegue a los bordes */
  background-color: #fff; /* Fondo blanco para las imágenes si usas padding o 'contain' */
}

/* Si quieres que la imagen se vea siempre, te sugiero un fondo blanco y object-fit: contain
   Si quieres que la imagen rellene, usa object-fit: cover, pero se recortará */

.project-card:hover img {
  transform: scale(
    1.05
  ); /* Escala un poco menos para evitar que se recorte mucho con object-fit: contain */
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
  padding: 15px; /* Ajusta el padding para el contenido del overlay */
}
.project-card:hover .card-overlay {
  opacity: 1;
}
.overlay-content {
  /* No necesitamos padding extra aquí si ya lo pusimos en .card-overlay */
  transform: translateY(20px);
  transition: transform 0.4s ease;
  width: 100%; /* Asegura que el contenido del overlay ocupe todo el ancho */
}
.project-card:hover .overlay-content {
  transform: translateY(0);
}
</style>
