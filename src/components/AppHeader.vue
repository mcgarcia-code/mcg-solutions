<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/logo.svg'

// --- LÓGICA PARA EL CAMBIO DE COLOR CON SCROLL ---
const scrolledNav = ref(false)
const updateScroll = () => {
  scrolledNav.value = window.scrollY > 50
}

// --- LÓGICA PARA EL MENÚ MÓVIL (CORREGIDA) ---
const navbarToggler = ref(null)
const navbarNav = ref(null)

// 1. La función ahora recibe el objeto 'event' para saber qué elemento se clickeó
const closeMenuOnClick = (event) => {
  // 2. Si el elemento clickeado es el que despliega el sub-menú, no hacemos nada.
  // Esto permite que Bootstrap haga su trabajo de abrir el desplegable.
  if (event.target.classList.contains('dropdown-toggle')) {
    return
  }

  // 3. Si el clic fue en cualquier otro enlace, cerramos el menú principal.
  if (navbarNav.value && navbarNav.value.classList.contains('show')) {
    navbarToggler.value.click()
  }
}

// --- CICLOS DE VIDA (ONMOUNTED/ONBEFOREUNMOUNT) ---
onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <header>
    <nav
      class="navbar navbar-expand-lg fixed-top shadow-sm"
      :class="{
        'bg-white navbar-light': !scrolledNav,
        'bg-dark navbar-dark': scrolledNav,
      }"
    >
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img :src="logo" alt="MCG Solutions Logo" width="90" />
        </RouterLink>

        <button
          ref="navbarToggler"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>

        <div ref="navbarNav" class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto" @click="closeMenuOnClick($event)">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Inicio</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul
                class="dropdown-menu"
                :class="{ 'dropdown-menu-dark': scrolledNav }"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <RouterLink class="dropdown-item" to="/servicio/one-page">One Page</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/servicio/web-corporativa"
                    >Sitios Corporativos</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/servicio/portafolio-digital"
                    >Portafolios Digitales</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/servicio/ecommerce">E-commerce</RouterLink>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <RouterLink class="dropdown-item" to="/servicio/mantenimiento-web"
                    >Mantenimiento Web</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/servicio/wpo"
                    >Optimización (WPO)</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/servicio/hosting">Hosting</RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#nosotros">Nosotros</a>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/proyectos">Proyectos</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* (No hay cambios en los estilos, son los mismos de antes) */
/* Estilos para la transición y colores del navbar dinámico */
.navbar {
  transition: background-color 0.4s ease-in-out;
}
.nav-link {
  font-weight: 600;
  transition: color 0.3s ease-in-out;
}
.navbar-light .nav-link {
  color: #343a40;
}
.navbar-light .nav-link.router-link-active.router-link-exact-active {
  color: var(--mcg-blue) !important;
}
.navbar-dark .nav-link {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .nav-link.router-link-active.router-link-exact-active {
  color: #ffffff !important;
}

/* --- EFECTO HOVER MODIFICADO --- */
.nav-link:hover {
  color: var(--mcg-red) !important;
}
.dropdown-item:hover {
  color: var(--mcg-red);
  background-color: rgba(0, 0, 0, 0.04);
}
.dropdown-menu-dark .dropdown-item:hover {
  color: var(--mcg-red);
  background-color: rgba(255, 255, 255, 0.08);
}

/* Estilos del dropdown */
.dropdown-menu {
  border-radius: 0.5rem;
  border: 1px solid #eee;
}
.dropdown-item {
  font-weight: 500;
}
.dropdown-item:active {
  background-color: var(--mcg-blue);
  color: #fff;
}
.dropdown-menu-dark .dropdown-item:active {
  background-color: #343a40;
}
.navbar-toggler {
  border: 2px solid var(--mcg-red) !important;
  padding: 0.25rem 0.5rem;
}
.navbar-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(232, 59, 58, 0.5);
}
.navbar-toggler i {
  color: var(--mcg-red);
  font-size: 2rem;
}
@media (max-width: 991.98px) {
  .navbar-nav .nav-link,
  .navbar-nav .dropdown-toggle {
    text-align: right;
    padding-right: 1rem;
  }
  .navbar-nav .dropdown-menu {
    text-align: right;
    border: none;
    background-color: transparent;
  }
  .navbar-dark .dropdown-item {
    color: rgba(255, 255, 255, 0.75);
  }
  .navbar-dark .dropdown-item:hover {
    background-color: #343a40;
    color: #fff;
  }
  .navbar-light .dropdown-item:hover {
    background-color: #eee;
  }
}
</style>
