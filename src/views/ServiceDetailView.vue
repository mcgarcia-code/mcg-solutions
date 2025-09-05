<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ContactForm from '../components/ContactForm.vue'
import serviceImage from '@/assets/images/ServiceDetail.png'
import heroBg from '@/assets/images/hero-background.webp'

const servicesData = {
  'one-page': {
    title: 'Sitios One Page',
    description:
      'Desarrollamos sitios de una sola página, perfectos para presentar un producto, evento o portafolio de manera directa y con un alto impacto visual.',
    idealFor:
      'Startups, freelancers, eventos, o para el lanzamiento de un producto específico. Excelente para campañas que requieren un llamado a la acción claro y conciso.',
    icon: 'bi-file-earmark-text-fill',
  },
  'web-corporativa': {
    title: 'Webs Corporativas e Institucionales',
    description:
      'Construimos la presencia online que tu empresa merece. Sitios web profesionales, seguros y autogestionables que reflejan la identidad y los valores de tu marca.',
    idealFor:
      'PyMEs, grandes empresas, instituciones y profesionales que buscan consolidar su imagen de marca en internet y ofrecer un canal de comunicación formal.',
    icon: 'bi-building',
  },
  'portafolio-digital': {
    title: 'Portafolios Digitales',
    description:
      'Tu trabajo merece ser exhibido de la mejor manera. Creamos portafolios interactivos y visualmente atractivos que capturan la atención.',
    idealFor:
      'Fotógrafos, diseñadores, artistas, arquitectos, desarrolladores y cualquier creativo que necesite una plataforma elegante para mostrar su talento.',
    icon: 'bi-image-fill',
  },
  ecommerce: {
    title: 'E-commerce',
    description:
      'Creamos tiendas online robustas y optimizadas para la conversión. Te entregamos una solución completa para que empieces a vender en línea de manera efectiva.',
    idealFor:
      'Emprendedores, PyMEs y empresas que buscan digitalizar sus ventas y alcanzar un mercado más amplio. Ideal para quienes necesitan una plataforma autogestionable y escalable.',
    icon: 'bi-cart-check-fill',
  },
  'mantenimiento-web': {
    title: 'Mantenimiento Web Evolutivo',
    description:
      'Tu sitio web es un activo que debe evolucionar. Nos encargamos de mantenerlo seguro, actualizado y funcionando a la perfección.',
    idealFor:
      'Clientes que ya tienen un sitio web y necesitan garantizar su seguridad, rendimiento y adaptarse a nuevas necesidades del negocio sin tener que rediseñar todo desde cero.',
    icon: 'bi-shield-lock-fill',
  },
  wpo: {
    title: 'Optimización de Rendimiento (WPO)',
    description:
      'La velocidad importa. Analizamos y optimizamos cada aspecto de tu sitio web para reducir los tiempos de carga al mínimo.',
    idealFor:
      'Sitios web con bajo rendimiento, altas tasas de rebote o que buscan mejorar su puntaje en herramientas como Google PageSpeed Insights.',
    icon: 'bi-speedometer2',
  },
  hosting: {
    title: 'Hosting de Alto Rendimiento',
    description:
      'No dejes que un mal hosting arruine tu sitio. Ofrecemos soluciones de alojamiento rápidas, seguras y confiables.',
    idealFor:
      'Todo tipo de proyectos que requieran un hosting fiable y no quieran preocuparse por la gestión técnica del servidor.',
    icon: 'bi-server',
  },
}

const route = useRoute()
const service = ref({})

const updateServiceData = (slug) => {
  service.value = servicesData[slug] || {
    title: 'Servicio no encontrado',
    description: '',
    idealFor: '',
  }
}

watch(
  () => route.params.slug,
  (newSlug) => {
    updateServiceData(newSlug)
  },
)

onMounted(() => {
  updateServiceData(route.params.slug)
})
</script>

<template>
  <div class="service-detail-page">
    <section class="service-hero" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="overlay"></div>
      <div class="container text-center position-relative">
        <i class="display-1 mb-3 service-icon-color" :class="[service.icon]"></i>
        <h1 class="display-4 fw-bold text-white">{{ service.title }}</h1>
        <p class="lead text-white col-lg-8 mx-auto">{{ service.description }}</p>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container gx-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h2 class="fw-bold">¿Es este servicio ideal para ti?</h2>
            <p>{{ service.idealFor }}</p>
            <a href="/#contacto" class="btn btn-primary btn-lg mt-3">Solicitar Presupuesto</a>
          </div>
          <div class="col-lg-6">
            <img
              :src="serviceImage"
              alt="Ilustración de Desarrollo Web"
              class="img-fluid service-detail-image"
            />
          </div>
        </div>
      </div>
    </section>

    <ContactForm />
  </div>
</template>

<style scoped>
/* Si tu navbar es fixed-top y mide ~70px, esto evita que lo tape.
   Si NO es fixed, puedes bajar a 0 este padding-top. */
.service-detail-page {
  padding-top: 70px;
  overflow-x: clip; /* seguridad contra scroll lateral */
}

.service-icon-color {
  color: var(--mcg-red) !important;
}

.service-hero {
  position: relative;
  background-size: cover;
  background-position: center;
  color: #fff;
  min-height: 75vh;
  display: flex;
  align-items: center;

  /* ⬇️ MÁS AIRE ARRIBA DEL CONTENIDO DEL HERO */
  /* Usa la altura del navbar (70px por defecto) + notch iOS + margen extra */
  padding-top: calc(var(--nav-h, 70px) + env(safe-area-inset-top) + 1.25rem);
  padding-bottom: 2.5rem;
}

/* En pantallas grandes, un poco más de aire (opcional) */
@media (min-width: 992px) {
  .service-hero {
    padding-top: calc(var(--nav-h, 70px) + 2rem);
    padding-bottom: 3rem;
  }
}

.service-hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(13, 27, 42, 0.85), rgba(0, 0, 0, 0.9));
  z-index: 1;
}
.service-hero .container {
  z-index: 2;
}

/* Evita que el ícono (tipografía grande) se “recorte” por line-height */
.service-hero .display-1 {
  line-height: 1;
}

/* Imagen del detalle */
.service-detail-image {
  max-width: 200px;
  display: block;
  margin: auto;
}
</style>
