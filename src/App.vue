<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style>
/* Estilos Globales y Variables de Color */
:root {
  --mcg-red: #e83b3a;
  --mcg-blue: #21325d;
}

/* ===== CAMBIOS EN LOS BOTONES AQUÍ ===== */

/* --- Estilo principal del botón --- */
.btn-primary {
  /* 1. Color de fondo inicial es azul */
  background-color: var(--mcg-blue) !important;
  border-color: var(--mcg-blue) !important;
  /* 2. Se añade una transición para un cambio de color suave */
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

/* --- Estilo al pasar el mouse por encima (hover) --- */
.btn-primary:hover {
  /* 3. Color de fondo al pasar el mouse es rojo */
  background-color: var(--mcg-red) !important;
  border-color: var(--mcg-red) !important;
}

/* --- Colores de Acento de la Marca (estos no cambian) --- */
.text-primary {
  color: var(--mcg-blue) !important;
}

.bg-primary {
  background-color: var(--mcg-blue) !important;
}

/* --- Fuente Principal --- */
body {
  font-family: 'Raleway', sans-serif;
}
</style>
