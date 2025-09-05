<script setup>
import { ref } from 'vue'

const nombre = ref('')
const apellido = ref('')
const asunto = ref('')
const mensaje = ref('')

const sendWhatsAppMessage = () => {
  // IMPORTANTE: Reemplaza con tu número de teléfono real (ej: 54911xxxxxxxx para Argentina)
  const phoneNumber = '5491149380486'

  let fullMessage = `¡Hola! Quisiera solicitar un presupuesto.\n\n`
  fullMessage += `*Nombre:* ${nombre.value} ${apellido.value}\n`
  fullMessage += `*Asunto:* ${asunto.value}\n\n`
  fullMessage += `*Mensaje:*\n${mensaje.value}`

  const encodedMessage = encodeURIComponent(fullMessage)
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  window.open(url, '_blank')
}
</script>

<template>
  <section id="contact-form" class="py-5 bg-light">
    <div class="container">
      <div class="row g-0">
        <div
          class="col-lg-5 bg-dark text-white p-4 p-md-5 d-flex flex-column justify-content-center rounded-start"
        >
          <h2 class="fw-bold mb-3">¿Listo para empezar tu próximo proyecto?</h2>
          <p class="lead mb-4">
            Contáctame directamente o completa el formulario. Estoy aquí para transformar tus ideas
            en una realidad digital.
          </p>
          <hr class="border-light" />
          <ul class="list-unstyled mt-4 contact-info">
            <li class="d-flex align-items-center mb-3">
              <i class="bi bi-envelope-fill me-3"></i>
              <span>contacto@mcgsolutions.com</span>
            </li>
            <li class="d-flex align-items-center mb-3">
              <i class="bi bi-whatsapp me-3 whatsapp-icon"></i> <span>+54 11 4938 0486</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-clock-fill me-3"></i> <span>Lunes a Viernes de 9:00 a 16:00 hs.</span>
            </li>
          </ul>
        </div>

        <div class="col-lg-7 p-4 p-md-5 bg-white rounded-end">
          <form @submit.prevent="sendWhatsAppMessage">
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="nombre" class="form-label">Nombre</label>
                <input v-model="nombre" type="text" class="form-control" id="nombre" required />
              </div>
              <div class="col-md-6">
                <label for="apellido" class="form-label">Apellido</label>
                <input v-model="apellido" type="text" class="form-control" id="apellido" required />
              </div>
            </div>
            <div class="mb-3">
              <label for="asunto" class="form-label">Asunto</label>
              <input v-model="asunto" type="text" class="form-control" id="asunto" required />
            </div>
            <div class="mb-3">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea
                v-model="mensaje"
                class="form-control"
                id="mensaje"
                rows="5"
                required
              ></textarea>
            </div>

            <div class="d-flex justify-content-start mt-4">
              <button type="submit" class="btn btn-primary btn-lg">
                <i class="bi bi-whatsapp me-2"></i> Enviar por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-control:focus {
  border-color: var(--mcg-blue);
  box-shadow: 0 0 0 0.25rem rgba(33, 50, 93, 0.25);
}

.row.g-0 {
  /* Aplica al contenedor del row */
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
}

/* Estilos para la nueva columna de contacto */
.contact-info i {
  font-size: 1.5rem;
  color: var(--mcg-red); /* Por defecto los íconos rojos */
}

/* Color específico para el ícono de WhatsApp en la columna de contacto */

.contact-info span {
  font-size: 1.1rem;
}

/* Estilos para el botón de WhatsApp dentro del formulario */
.btn-primary.btn-lg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Espacio entre el ícono y el texto */
  font-size: 1rem; /* Asegura que el botón sea grande */
}

.btn-primary.btn-lg i {
  font-size: 1.25rem; /* Tamaño del ícono dentro del botón */
  /* Aquí no necesitamos color específico, ya que el ícono hereda el color del texto del botón (blanco) */
}
</style>
