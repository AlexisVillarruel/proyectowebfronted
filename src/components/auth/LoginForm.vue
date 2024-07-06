<template>
  <div class="login-container">
    <h2 class="login-title">TurismoGo - Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="correoElectronico">Correo Electrónico:</label>
        <input
          type="email"
          v-model="correoElectronico"
          id="correoElectronico"
          class="form-control"
          required
        />
      </div>
      <div v-if="!esEmpresa" class="form-group">
        <label for="contraseña">Contraseña:</label>
        <input
          type="password"
          v-model="contraseña"
          id="contraseña"
          class="form-control"
          required
        />
      </div>
      <div v-else class="form-group">
        <label for="telefono">Número de Teléfono:</label>
        <input
          type="tel"
          v-model="telefono"
          id="telefono"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <input type="checkbox" v-model="esEmpresa" id="esEmpresa" />
        <label for="esEmpresa" class="checkbox-label"
          >Iniciar sesión como Empresa</label
        >
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      </div>
    </form>

    <!-- Enlaces para registrar como Empresa o Usuario -->
    <div class="registration-links">
      <router-link to="/registroEmpresa" class="registration-link"
        >Registrar como Empresa</router-link
      >
      <router-link to="/registroUsuario" class="registration-link"
        >Registrar como Usuario</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      correoElectronico: "",
      contraseña: "",
      telefono: "",
      esEmpresa: false,
    };
  },
  methods: {
    async login() {
      const URL = "http://localhost:5290/api/Usuarios"; // URL base para usuarios normales
      const empresaURL = "http://localhost:5290/api/Empresas"; // URL base para empresas

      try {
        let response;
        let usuario = null;

        if (this.esEmpresa) {
          response = await axios.get(empresaURL); // Obtener datos de empresas
          const empresas = response.data;

          usuario = empresas.find(
            (empresa) =>
              empresa.correoElectronico === this.correoElectronico &&
              empresa.telefono === this.telefono
          );
        } else {
          response = await axios.get(URL); // Obtener datos de usuarios normales
          const usuarios = response.data;

          usuario = usuarios.find(
            (user) =>
              user.correoElectronico === this.correoElectronico &&
              user.contraseña === this.contraseña
          );
        }

        if (usuario) {
          console.log("Login exitoso, usuario: " + JSON.stringify(usuario));
          // Maneja el login exitoso (por ejemplo, guarda la información en localStorage o Vuex)
          localStorage.setItem("usuario", JSON.stringify(usuario));
          this.$router.push("/dashboard/actividades");
        } else {
          console.log("Login fallido: Credenciales inválidas");
          alert("Credenciales inválidas");
        }
      } catch (error) {
        console.log("Error: " + JSON.stringify(error));
        alert("Error al intentar iniciar sesión");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-image: url("path_to_your_background_image.jpg");
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-title {
  color: #333;
  font-size: 28px;
  margin-bottom: 20px;
}

.login-form {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 5px;
  text-align: left;
}

.form-group label[for="esEmpresa"] {
  /* Estilos para el label específico */
  font-weight: bold;
  color: #333;
  margin-left: 9px; /* Ejemplo: Ajustar el margen izquierdo */
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.checkbox-label {
  margin-left: 5px;
  margin-right: 5px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  display: block;
  margin: auto; /* Añadir margen automático para centrar horizontalmente */
}

.btn-primary:hover {
  background-color: #0056b3;
}

.registration-links {
  margin-top: 20px;
}

.registration-link {
  margin-right: 20px;
  color: #007bff;
  text-decoration: none;
}

.registration-link:hover {
  text-decoration: underline;
}
</style>
