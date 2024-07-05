<template>
  <div class="actividad-item">
    <div class="actividad-details">
      <div class="actividad-imagen">
        <img :src="actividad.imagen_actividad" alt="Imagen de la actividad" />
      </div>

      <div class="actividad-info">
        <h2 class="actividad-titulo">{{ actividad.titulo }}</h2>
        <p class="actividad-descripcion">{{ actividad.descripcion_pequeña }}</p>

        <p class="actividad-fecha">{{ actividad.fecha }}</p>
      </div>

      <div class="empresa-imagen">
        <img :src="actividad.imagen_empresa" alt="Imagen de la empresa" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActividadItem",
  props: {
    actividad: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.actividad-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.actividad-details {
  display: flex;
  align-items: center;
  width: 100%;
}

.actividad-imagen {
  flex: 0 0 auto;
  margin-right: 10px;
}

.actividad-imagen img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.actividad-info {
  flex: 1 1 auto;
}

.actividad-titulo {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.actividad-descripcion {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.actividad-fecha {
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
}

.empresa-imagen {
  flex: 0 0 auto;
}

.empresa-imagen img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
