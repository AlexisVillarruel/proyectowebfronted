<template>
  <div class="act-item">
    <div class="details">
      <div class="imagenact">
        <img :src="act.imagenActividad" :alt="act.titulo" />
      </div>
      <div class="title-and-date">
        <h2 class="act-title">{{ act.titulo }}</h2>
        <p>{{ act.fecha }}</p>
      </div>
      <div class="description_peque">
        <p>{{ act.descripcionPequeña }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActividadItem",
  props: {
    act: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.act-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  color: #333;
}

.act-item .imagenact {
  margin-bottom: 10px;
}

.act-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.act-item .title-and-date {
  margin-bottom: 10px;
}

.act-title {
  font-size: 24px;
  font-family: "Arial Black", sans-serif;
  color: #000;
  margin-bottom: 5px;
}

.act-item .title-and-date p {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.act-item .description_peque {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
</style>
