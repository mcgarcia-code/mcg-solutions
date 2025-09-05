<script setup>
import heroBg from '@/assets/images/hero-background.webp'
import nosotrosBg from '@/assets/images/nosotros-bg.webp'
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div>
    <section
      class="hero-section d-flex align-items-center text-center"
      :style="{ backgroundImage: `url(${heroBg})` }"
    >
      <div class="overlay"></div>
      <div class="container position-relative">
        <div class="hero-content">
          <h1 class="display-3 text-white fw-bold">Soluciones Digitales que Impulsan tu Negocio</h1>
          <p class="lead text-white my-4">
            Creamos sitios web rápidos, modernos y optimizados para que destaques en internet.
          </p>
          <a href="#services" class="btn btn-primary btn-lg">Nuestros Servicios</a>
        </div>
        <div class="scroll-down-indicator">
          <a href="#services" aria-label="Ir a la siguiente sección">
            <i class="bi bi-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>

    <section id="services" class="bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Una Solución Integral para tu Presencia Digital</h2>
          <p class="lead text-muted">
            Desde la idea inicial hasta el soporte continuo, te acompañamos en cada paso.
          </p>
        </div>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="service-panel h-100 p-4 p-md-5 shadow-lg rounded">
              <div class="service-header mb-4">
                <i class="bi bi-code-slash service-icon"></i>
                <h3>Desarrollo Web SPA</h3>
              </div>
              <p class="text-muted mb-4">
                Construimos aplicaciones web de página única (SPA) ultra rápidas y fluidas,
                utilizando la potencia y modernidad de Vue.js.
              </p>
              <ul class="list-unstyled">
                <li class="d-flex align-items-start mb-3">
                  <i class="bi bi-check-circle-fill me-3"></i><span><strong>One Page</strong></span>
                </li>
                <li class="d-flex align-items-start mb-3">
                  <i class="bi bi-check-circle-fill me-3"></i
                  ><span><strong>Webs Corporativas</strong></span>
                </li>
                <li class="d-flex align-items-start mb-3">
                  <i class="bi bi-check-circle-fill me-3"></i
                  ><span><strong>Portafolios Digitales</strong></span>
                </li>
                <li class="d-flex align-items-start">
                  <i class="bi bi-check-circle-fill me-3"></i
                  ><span><strong>E-commerce</strong></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-panel h-100 p-4 p-md-5 shadow-lg rounded">
              <div class="service-header mb-4">
                <i class="bi bi-gear-fill service-icon"></i>
                <h3>Soporte y Optimización</h3>
              </div>
              <p class="text-muted mb-4">
                Aseguramos que tu sitio no solo funcione, sino que vuele. Mantenemos tu proyecto
                seguro, actualizado y con el máximo rendimiento.
              </p>
              <ul class="list-unstyled">
                <li class="d-flex align-items-start mb-3">
                  <i class="bi bi-check-circle-fill me-3"></i
                  ><span><strong>Mantenimiento Evolutivo</strong></span>
                </li>
                <li class="d-flex align-items-start mb-3">
                  <i class="bi bi-check-circle-fill me-3"></i
                  ><span><strong>Optimización (WPO)</strong></span>
                </li>
                <li class="d-flex align-items-start mb-4">
                  <i class="bi bi-check-circle-fill me-3"></i
                  ><span><strong>Hosting de Alto Rendimiento</strong></span>
                </li>
              </ul>
              <div class="seo-section mt-auto pt-4 border-top">
                <h5 class="fw-bold d-flex align-items-center">
                  <i class="bi bi-rocket-takeoff-fill me-2"></i>SEO Técnico Incluido
                </h5>
                <p class="small text-muted">
                  Todos nuestros desarrollos incluyen optimización On-Page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="nosotros"
      class="py-5 nosotros-section"
      :style="{ backgroundImage: `url(${nosotrosBg})` }"
    >
      <div class="overlay"></div>
      <div class="container position-relative text-white">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h2 class="fw-bold mb-5">Sobre Nosotros</h2>
            <p class="lead mb-5 col-lg-10 mx-auto">
              Somos un equipo de desarrolladores y diseñadores apasionados por la tecnología y la
              creación de soluciones digitales efectivas. Nacimos de la idea de que un sitio web no
              es solo un producto, sino una herramienta de crecimiento. Nuestra misión es
              transformar tus ideas en experiencias web de alto impacto que impulsen tu negocio.
            </p>
            <h3 class="fw-bold mb-5">¿Por Qué Elegir MCG Solutions?</h3>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 text-center">
            <div class="feature-icon-container text-white mb-3">
              <i class="bi bi-rocket-takeoff"></i>
            </div>
            <h3 class="fw-bold h4">Tecnología de Vanguardia</h3>
            <p class="text-white">
              Utilizamos Vue.js para crear SPAs que ofrecen una velocidad y fluidez imposibles de
              lograr con sitios tradicionales.
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <div class="feature-icon-container text-white mb-3">
              <i class="bi bi-palette-fill"></i>
            </div>
            <h3 class="fw-bold h4">Diseño Centrado en el Usuario</h3>
            <p class="text-white">
              Diseñamos experiencias intuitivas que guían al usuario y cumplen los objetivos de tu
              negocio.
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <div class="feature-icon-container text-white mb-3"><i class="bi bi-headset"></i></div>
            <h3 class="fw-bold h4">Soporte Integral y Continuo</h3>
            <p class="text-white">
              Nuestra relación no termina con el lanzamiento. Ofrecemos mantenimiento para que tu
              proyecto crezca y se mantenga a punto.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto"><ContactForm /></section>
  </div>
</template>

<style scoped>
section[id] {
  scroll-margin-top: 70px;
}
/* Estilos del Hero */
.hero-section {
  padding-top: 120px;
  min-height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.hero-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero-section .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(13, 27, 42, 0.45), rgba(0, 0, 0, 0.9));
  z-index: 1;
}
.hero-section .container {
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
.scroll-down-indicator {
  text-align: center;
  margin-top: auto;
  padding-bottom: 2rem;
}
.scroll-down-indicator a {
  color: #fff;
  font-size: 2.5rem;
  text-decoration: none;
}
.scroll-down-indicator i {
  animation: bounce 2.5s infinite;
}

/* Estilos de Padding de Servicios */
#services {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

/* Estilos de Paneles de Servicio */
.service-panel {
  background-color: #ffffff;
  border-left: 5px solid var(--mcg-blue);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.service-panel:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
.service-header {
  display: flex;
  align-items: center;
  color: var(--mcg-blue);
}
.service-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
}
.service-header h3 {
  margin: 0;
  font-weight: 700;
}
.service-panel ul i {
  color: var(--mcg-blue);
  font-size: 1.2rem;
  margin-top: 2px;
}
.seo-section h5 {
  color: var(--mcg-blue);
}

/* Estilos "Nosotros" */
.nosotros-section {
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.nosotros-section .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(13, 27, 42, 0.4), rgba(0, 0, 0, 0.9));
  z-index: 1;
}
.nosotros-section .container {
  z-index: 2;
}
.feature-icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 2.5rem;
  /* ===== CAMBIO DE COLOR AQUÍ ===== */
  background-color: var(--mcg-red); /* Se establece el color de fondo rojo */
}
</style>
