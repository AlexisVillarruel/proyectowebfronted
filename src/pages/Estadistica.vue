<template>
  <div class="mi-componente">
    <div class="estadisticas-container">
      <section id="estadisticas">
        <h2>Actividades Más Reservadas</h2>
        <table id="mas-reservadas">
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Empresa</th>
              <th>Total Reservas</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="actividad in actividadesReservadas"
              :key="actividad.actividad"
            >
              <td>{{ actividad.actividad }}</td>
              <td>{{ actividad.empresa }}</td>
              <td>{{ actividad.reservas }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="valoraciones">
        <h2>Actividades Mejor Valoradas</h2>
        <table id="mejor-valoradas">
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Empresa</th>
              <th>Promedio Valoración</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="actividad in actividadesValoradas"
              :key="actividad.actividad"
            >
              <td>{{ actividad.actividad }}</td>
              <td>{{ actividad.empresa }}</td>
              <td>{{ actividad.valoracion }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <footer class="footer">
      <div class="footer-ribbon">TurismoGo</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      actividadesReservadas: [
        {
          actividad: "Tour por la Ciudad Antigua",
          empresa: "Aventuras Extremas S.A.",
          reservas: 150,
        },
        {
          actividad: "Excursión a la Montaña",
          empresa: "Aventuras Extremas S.A.",
          reservas: 200,
        },
        {
          actividad: "Navegación por el Río",
          empresa: "EcoTurismo Verde",
          reservas: 250,
        },
        {
          actividad: "Visita a la Reserva Natural",
          empresa: "EcoTurismo Verde",
          reservas: 300,
        },
        {
          actividad: "Caminata Nocturna",
          empresa: "EcoTurismo Verde",
          reservas: 220,
        },
      ],
      actividadesValoradas: [
        {
          actividad: "Visita a la Reserva Natural",
          empresa: "EcoTurismo Verde",
          valoracion: 4.9,
        },
        {
          actividad: "Tour de Viñedos",
          empresa: "Gastronomía del Mundo",
          valoracion: 4.8,
        },
        {
          actividad: "Navegación por el Río",
          empresa: "EcoTurismo Verde",
          valoracion: 4.6,
        },
        {
          actividad: "Aventura en Kayak",
          empresa: "Aventuras Extremas S.A.",
          valoracion: 4.6,
        },
        {
          actividad: "Excursión a la Montaña",
          empresa: "Aventuras Extremas S.A.",
          valoracion: 4.7,
        },
      ],
    };
  },
  methods: {
    fetchData() {
      // Aquí deberías hacer la lógica para obtener los datos actualizados
      // Por ahora, estamos usando datos estáticos
      this.actividadesReservadas = [
        {
          actividad: "Tour por la Ciudad Antigua",
          empresa: "Aventuras Extremas S.A.",
          reservas: 150,
        },
        {
          actividad: "Excursión a la Montaña",
          empresa: "Aventuras Extremas S.A.",
          reservas: 200,
        },
        {
          actividad: "Navegación por el Río",
          empresa: "EcoTurismo Verde",
          reservas: 250,
        },
        {
          actividad: "Visita a la Reserva Natural",
          empresa: "EcoTurismo Verde",
          reservas: 300,
        },
        {
          actividad: "Caminata Nocturna",
          empresa: "EcoTurismo Verde",
          reservas: 220,
        },
      ];

      this.actividadesValoradas = [
        {
          actividad: "Visita a la Reserva Natural",
          empresa: "EcoTurismo Verde",
          valoracion: 4.9,
        },
        {
          actividad: "Tour de Viñedos",
          empresa: "Gastronomía del Mundo",
          valoracion: 4.8,
        },
        {
          actividad: "Navegación por el Río",
          empresa: "EcoTurismo Verde",
          valoracion: 4.6,
        },
        {
          actividad: "Aventura en Kayak",
          empresa: "Aventuras Extremas S.A.",
          valoracion: 4.6,
        },
        {
          actividad: "Excursión a la Montaña",
          empresa: "Aventuras Extremas S.A.",
          valoracion: 4.7,
        },
      ];
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.mi-componente {
  position: relative;
  text-align: center;
  background-image: url("/icons/back.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Asegura que la altura mínima sea al menos el alto de la pantalla */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.estadisticas-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 1000px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  font-weight: 700;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2em;
  font-family: "Roboto", sans-serif;
}

table,
th,
td {
  border: 1px solid #ddd;
}

th,
td {
  padding: 12px;
  text-align: left;
  font-weight: 400;
}

th {
  background-color: #f8f8f8;
  font-weight: 700;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.footer {
  width: 100%;
  position: fixed; /* Posición fija para que esté siempre visible */
  bottom: 0;
  text-align: center;
}

.footer-ribbon {
  background-color: #003366;
  height: 30px;
  width: 100%; /* Ocupa todo el ancho */
  color: white; /* Color del texto */
  font-weight: bold; /* Estilo de la fuente */
  line-height: 30px; /* Alineación vertical del texto */
}
</style>
