<script setup>
import { RouterLink } from 'vue-router'
import logoWhite from '@/assets/images/logo-white.png'
</script>

<template>
  <footer class="bg-dark text-white pt-5 pb-4">
    <div class="container text-center text-md-start">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
          <RouterLink to="/">
            <img :src="logoWhite" alt="MCG Solutions Logo" class="footer-logo mb-3" />
          </RouterLink>
          <p>
            Desarrollamos experiencias web modernas y funcionales para potenciar tu marca en el
            mundo digital, dominando los ecosistemas más potentes del mercado como React y Vue.js
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 fw-bold">Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="/#services" class="footer-link">Servicios</a>
            </li>
            <li class="mb-2">
              <a href="/#nosotros" class="footer-link">Nosotros</a>
            </li>
            <li class="mb-2">
              <RouterLink to="/proyectos" class="footer-link">Proyectos</RouterLink>
            </li>
            <li class="mb-2">
              <a href="/#contacto" class="footer-link">Contacto</a>
            </li>
          </ul>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 fw-bold">Contacto</h5>
          <ul class="list-unstyled">
            <li
              class="mb-3 d-flex align-items-start justify-content-center justify-content-md-start"
            >
              <i class="bi bi-geo-alt-fill me-3 mt-1"></i>
              <span>Buenos Aires, Argentina</span>
            </li>
            <li
              class="mb-3 d-flex align-items-start justify-content-center justify-content-md-start"
            >
              <i class="bi bi-envelope-fill me-3 mt-1"></i>
              <span>contacto@mcgsolutions.com</span>
            </li>
            <li
              class="mb-3 d-flex align-items-start justify-content-center justify-content-md-start"
            >
              <i class="bi bi-whatsapp me-3 mt-1"></i>
              <span>+54 11 4938 0486</span>
            </li>
          </ul>
        </div>
      </div>

      <hr class="mb-4" />

      <div class="row align-items-center">
        <div class="col-md-7 col-lg-8">
          <p class="mb-md-0">
            © {{ new Date().getFullYear() }} MCG Solutions. Todos los derechos reservados.
          </p>
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="text-center text-md-end">
            <a href="https://wa.me/5491149380486" class="social-icon"
              ><i class="bi bi-whatsapp"></i
            ></a>
            <a href="https://www.linkedin.com/in/mariana-celeste-garcia" class="social-icon"
              ><i class="bi bi-linkedin"></i
            ></a>
            <a href="https://github.com/mcgarcia-code" class="social-icon"
              ><i class="bi bi-github"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Código CSS limpio y sin caracteres invisibles */
.footer-logo {
  height: 70px;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--mcg-red);
}

.social-icon {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: var(--mcg-red);
}
</style>
