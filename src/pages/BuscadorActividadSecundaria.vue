<template>
  <div class="mi-componente">
    <div class="fondo-container">
      <div class="filtro-container">
        <label class="filtro-label">Filtros</label>

        <div class="filter-group">
          <label for="destinos">Destinos</label>
          <select id="destinos" v-model="destination">
            <option value="Lima">Lima</option>
            <option value="Cusco">Cusco</option>
            <option value="Arequipa">Arequipa</option>
          </select>
        </div>
        <div class="filter-group">
          <label for="fecha">Fecha</label>
          <input type="date" id="fecha" v-model="date" />
        </div>
        <button @click="search">Buscar</button>
      </div>
      <div class="scroll-container">
        <div class="act-page">
          <div class="act-list">
            <ActividadList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ActividadList from "src/components/Actividades/ActividadList.vue";

export default {
  name: "BuscadorActividadSecundaria",
  components: {
    ActividadList,
  },
  data() {
    return {
      destination: "Lima",
      date: "",
    };
  },
  methods: {
    search() {
      localStorage.setItem("selectedDestination", this.destination);
      localStorage.setItem("selectedDate", this.date);

      const url = "http://localhost:5290/api/Actividades";
      axios
        .get(url)
        .then((response) => {
          console.log("Solicitud exitosa:", response.data);
          localStorage.setItem("ActividadData", JSON.stringify(response.data));
          this.$router.push("/dashboard/BuscadorActSec");
        })
        .catch((error) => {
          console.error("Error fetching Item data:", error);
        });
    },
  },
};
</script>

<style scoped>
.mi-componente {
  position: relative;
  text-align: center;
  background-image: url("/icons/fondo.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 24px;
}

.fondo-container {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 75vh;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
}

.filtro-container {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 5px;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
}

.scroll-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 290px);
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.filtro-label {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
}

.filter-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: white;
}

select,
input[type="date"] {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4e8cff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: auto;
}

button:hover {
  background-color: #0077ff;
}

.fondo-container h1 {
  margin-bottom: 20px;
}

.act-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.act-list {
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
