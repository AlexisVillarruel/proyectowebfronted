<template>
  <div class="container">
    <!-- Formulario para rellenar reseñas -->
    <div class="card">
      <div class="card-header">Deja tu reseña</div>
      <form id="reviewForm">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div class="form-group">
          <label for="actividad">Actividad:</label>
          <select id="actividad" name="actividad" required>
            <option value="">Selecciona una actividad</option>
            <!-- Opciones de actividades se generan dinámicamente -->
          </select>
        </div>
        <div class="form-group">
          <label for="comentario">Comentario:</label>
          <textarea
            id="comentario"
            name="comentario"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="valoracion">Valoración:</label>
          <input
            type="number"
            id="valoracion"
            name="valoracion"
            min="1"
            max="5"
            step="0.1"
            required
          />
        </div>
        <div class="form-group">
          <label for="imagen">URL de la Imagen:</label>
          <input type="url" id="imagen" name="imagen" required />
          <small>Ingresa la URL de la imagen de tu reseña.</small>
        </div>
        <button type="submit" class="btn">Enviar reseña</button>
      </form>
    </div>

    <!-- Reseñas existentes -->
    <div class="card">
      <div class="card-header">Reseñas existentes</div>
      <div class="reviews" id="existingReviews">
        <!-- Plantilla para una reseña existente -->
        <template id="reviewTemplate">
          <div class="review-card">
            <div><strong>Usuario:</strong> <span class="usuario"></span></div>
            <div>
              <strong>Actividad:</strong> <span class="actividad"></span>
            </div>
            <div>
              <strong>Comentario:</strong> <span class="comentario"></span>
            </div>
            <div>
              <strong>Valoración:</strong> <span class="valoracion"></span>
            </div>
            <div>
              <strong>Fecha de reseña:</strong> <span class="fecha"></span>
            </div>
            <img class="imagen" src="" alt="Imagen de la reseña" />
          </div>
        </template>
        <!-- Fin de la plantilla -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResenaFormulario",
  mounted() {
    this.cargarReseñasSimuladas(); // Llamar a la función al montar el componente
  },
  methods: {
    cargarReseñasSimuladas() {
      // Datos simulados de reseñas (simula ser datos de SQL)
      const reseñas = [
        {
          usuario: "Juan Pérez",
          actividad: "Actividad 1",
          comentario: "¡Una actividad increíble! Muy recomendada.",
          valoracion: 4.5,
          fecha: "2023-06-25",
          imagen: "imagen_resena1.jpg",
        },
        {
          usuario: "María Rodríguez",
          actividad: "Actividad 3",
          comentario: "Experiencia maravillosa, volvería sin dudarlo.",
          valoracion: 5.0,
          fecha: "2023-07-10",
          imagen: "imagen_resena2.jpg",
        },
        {
          usuario: "Ana Martínez",
          actividad: "Actividad 4",
          comentario: "El servicio al cliente fue excepcional.",
          valoracion: 4.0,
          fecha: "2023-09-15",
          imagen: "imagen_resena4.jpg",
        },
        // Agregar más reseñas según sea necesario
      ];

      // Obtener la plantilla y el contenedor de reseñas existentes
      const template = document.getElementById("reviewTemplate");
      const container = document.getElementById("existingReviews");

      // Limpiar el contenedor antes de agregar nuevas reseñas
      container.innerHTML = "";

      // Iterar sobre cada reseña y crear elementos HTML
      reseñas.forEach((reseña) => {
        // Clonar el contenido de la plantilla
        const clone = document.importNode(template.content, true);

        // Llenar los elementos clonados con datos de la reseña actual
        clone.querySelector(".usuario").textContent = reseña.usuario;
        clone.querySelector(".actividad").textContent = reseña.actividad;
        clone.querySelector(".comentario").textContent = reseña.comentario;
        clone.querySelector(".valoracion").textContent = reseña.valoracion;
        clone.querySelector(".fecha").textContent = reseña.fecha;
        clone.querySelector(".imagen").src = reseña.imagen;

        // Agregar el elemento clonado al contenedor de reseñas
        container.appendChild(clone);
      });
    },
  },
};
</script>

<style>
/* Estilos específicos del componente ResenaFormulario.vue */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
}
.container {
  max-width: 800px;
  margin: auto;
}
.card {
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.card-header {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  font-weight: bold;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  background-color: #45a049;
}
.reviews {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.review-card {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  width: calc(50% - 10px);
  margin-bottom: 20px;
}
.review-card img {
  max-width: 100%;
  border-radius: 4px;
}
</style>
