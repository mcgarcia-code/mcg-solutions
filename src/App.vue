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

/* --- Estilos para Botones Principales --- */
.btn-primary {
  background-color: var(--mcg-blue) !important;
  border-color: var(--mcg-blue) !important;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--mcg-red) !important;
  border-color: var(--mcg-red) !important;
}

/* --- Colores de Acento de la Marca --- */
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
