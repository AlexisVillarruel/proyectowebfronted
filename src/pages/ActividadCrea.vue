<template>
  <div class="main-container">
    <div class="container">
      <div class="title">Publicar Actividades</div>
      <div class="content">
        <!-- Formulario para ingresar actividades -->
        <form @submit.prevent="publicarActividad">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Título</span>
              <input
                type="text"
                v-model="nuevaActividad.titulo"
                placeholder="Ingrese el título"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Descripción Corta</span>
              <input
                type="text"
                v-model="nuevaActividad.descripcion_corta"
                placeholder="Ingrese una descripción corta"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Descripción Larga</span>
              <textarea
                v-model="nuevaActividad.descripcion_larga"
                placeholder="Ingrese una descripción detallada"
              ></textarea>
            </div>
            <div class="input-box">
              <span class="details">Destino</span>
              <input
                type="text"
                v-model="nuevaActividad.destino"
                placeholder="Ingrese el destino"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Fecha</span>
              <input type="date" v-model="nuevaActividad.fecha" required />
            </div>
            <div class="input-box">
              <span class="details">Hora de Inicio</span>
              <input
                type="time"
                v-model="nuevaActividad.hora_inicio"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Hora de Fin</span>
              <input type="time" v-model="nuevaActividad.hora_fin" required />
            </div>
            <div class="input-box">
              <span class="details">Precio</span>
              <input
                type="number"
                v-model="nuevaActividad.precio"
                placeholder="Ingrese el precio"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Capacidad</span>
              <input
                type="number"
                v-model="nuevaActividad.capacidad"
                placeholder="Ingrese la capacidad"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Imagen URL</span>
              <input
                type="text"
                v-model="nuevaActividad.imagen_actividad"
                placeholder="Ingrese la URL de la imagen"
              />
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Publicar Actividad" />
          </div>
        </form>
      </div>

      <!-- Contenedor para mostrar actividades publicadas -->
      <div class="activities-container">
        <div class="title">Actividades Publicadas</div>
        <div class="activities">
          <!-- Tarjeta para cada actividad -->
          <div
            v-for="(actividad, index) in actividadesPublicadas"
            :key="index"
            class="activity-card"
          >
            <img
              :src="actividad.imagen_actividad"
              alt="Imagen de la actividad"
              class="activity-image"
            />
            <div class="activity-details">
              <h3>{{ actividad.titulo }}</h3>
              <p>{{ actividad.descripcion_corta }}</p>
              <div class="details-row">
                <div><strong>Destino:</strong> {{ actividad.destino }}</div>
                <div><strong>Fecha:</strong> {{ actividad.fecha }}</div>
              </div>
              <div class="details-row">
                <div>
                  <strong>Hora:</strong> {{ actividad.hora_inicio }} -
                  {{ actividad.hora_fin }}
                </div>
                <div>
                  <strong>Precio:</strong> ${{ actividad.precio.toFixed(2) }}
                </div>
              </div>
              <div class="details-row">
                <div>
                  <strong>Capacidad:</strong> {{ actividad.capacidad }} personas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pie de página -->
    <footer class="footer">
      <div class="footer-content">
        <p>TurismoGo</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ActividadCrea",
  data() {
    return {
      nuevaActividad: {
        titulo: "",
        descripcion_corta: "",
        descripcion_larga: "",
        destino: "",
        fecha: "",
        hora_inicio: "",
        hora_fin: "",
        precio: 0,
        capacidad: 0,
        imagen_actividad: "",
      },
      actividadesPublicadas: [], // Arreglo para almacenar las actividades publicadas
    };
  },
  methods: {
    publicarActividad() {
      // Simular inserción en la base de datos o almacenamiento local
      this.actividadesPublicadas.push({ ...this.nuevaActividad });

      // Limpiar formulario después de publicar la actividad
      this.nuevaActividad = {
        titulo: "",
        descripcion_corta: "",
        descripcion_larga: "",
        destino: "",
        fecha: "",
        hora_inicio: "",
        hora_fin: "",
        precio: 0,
        capacidad: 0,
        imagen_actividad: "",
      };
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative; /* Añadido para el posicionamiento relativo */
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

.title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.content {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.input-box {
  margin-bottom: 15px;
  width: calc(50% - 10px);
}

.input-box span.details {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-box input,
.input-box textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.button {
  text-align: center;
  margin-top: 15px;
}

.button input[type="submit"] {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.activities-container {
  margin-top: auto; /* Hace que se ajuste automáticamente al espacio disponible */
  margin-bottom: 20px; /* Espacio entre actividades y pie de página */
}

.activities {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.activity-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.activity-image {
  width: 100%;
  border-radius: 8px;
}

.activity-details {
  margin-top: 15px;
}

.details-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.details-row div {
  font-size: 14px;
  color: #666;
}

.footer {
  background-color: #1a1a2e;
  color: #fff;
  text-align: center;
  padding: 5px;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.footer-content {
  font-size: 18px;
}
</style>
