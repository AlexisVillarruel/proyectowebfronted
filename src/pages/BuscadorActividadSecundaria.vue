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
      <h1>Ejemplo de imagen como fondo en Vue</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      destination: "Lima",
      date: "",
    };
  },
  mounted() {
    const selectedDestination = localStorage.getItem("selectedDestination");
    const selectedDate = localStorage.getItem("selectedDate");

    if (selectedDestination && selectedDate) {
      this.destination = selectedDestination;
      this.date = selectedDate;
    }
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
  background-color: white;
  opacity: 0.8;
  padding: 20px;
  box-sizing: border-box;
}

.filtro-container {
  background-color: #000;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
</style>
