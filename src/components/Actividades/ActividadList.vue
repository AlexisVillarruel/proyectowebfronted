<template>
  <div>
    <div class="title-bar">
      <h3 class="list-title">Listado de Actividades</h3>
    </div>
    <div class="act-list">
      <div class="act-item-wrapper" v-for="act in acts" :key="act.actividadId">
        <ActividadItem :act="act" />
      </div>
    </div>
  </div>
</template>

<script>
import ActividadItem from "./ActividadItem.vue";

export default {
  name: "ActividadList",
  components: {
    ActividadItem,
  },
  data() {
    return {
      actsData: [],
    };
  },
  computed: {
    acts() {
      return this.actsData;
    },
  },
  mounted() {
    const actData = localStorage.getItem("ActividadData");
    if (actData) {
      this.actsData = JSON.parse(actData);
      console.log("Datos de actividades recuperados:", this.actsData); // Añade este log para depurar
    } else {
      console.error(
        "No se encontraron datos de actividades en el almacenamiento local."
      );
    }
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

.act-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.act-item-wrapper {
  background-color: red;
  padding: 5px;
  border-radius: 8px;
}
</style>
