<template>
  <div>
    <div class="title-bar">
      <h3 class="list-title">Listado de Actividades</h3>
    </div>
    <div class="actividad-list">
      <div
        class="actividad-item-wrapper"
        v-for="actividades in actividades"
        :key="actividades.date"
      >
        <ActividadItem :actividad="actividad" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ActividadItem from "./ActividadItem.vue";

export default {
  name: "ActividadList",
  components: {
    ActividadItem,
  },
  data() {
    return {
      actividadData: [],
    };
  },
  computed: {
    actividad() {
      return this.actividadData;
    },
  },
};
</script>

<style scoped>
.title-bar {
  background-color: #161718;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.list-title {
  font-size: 2.5rem;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
}

.actividad-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.actividad-item-wrapper {
  background-color: red;
  padding: 5px;
  border-radius: 8px;
}
</style>
