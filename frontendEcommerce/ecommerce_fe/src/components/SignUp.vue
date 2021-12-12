<template>
  <div id="body">
    <div class="container h-130">
      <div class="row py-5 mt-5">
        <div class="d-flex justify-content-center align-items-center">
          <div class="myCard card">
            <div class="card-header">
              <h3>Registro de Usuarios</h3>
              <span class="card-title"
                >Complete los siguientes datos para crear una cuenta</span
              >
            </div>
            <div class="card-body bg-dark">
              <form v-on:submit.prevent="processSignUp">
                <div class="p-3 col-12">
                  <input
                    type="text"
                    v-model="user.name"
                    class="col-12"
                    placeholder="Nombre"
                  />
                </div>
                <div class="p-3 col-12">
                  <input
                    type="text"
                    v-model="user.lastName"
                    class="col-12"
                    placeholder="Apellido"
                  />
                </div>
                <div class="p-3 col-12">
                  <input
                    type="text"
                    v-model="user.username"
                    class="col-12"
                    placeholder="Nombre de usuario"
                  />
                </div>
                <div class="p-3 col-12">
                  <input
                    type="email"
                    v-model="user.email"
                    class="col-12"
                    placeholder="Email"
                  />
                </div>
                <div class="p-3 col-12">
                  <input
                    type="password"
                    v-model="user.password"
                    class="col-12"
                    placeholder="Contraseña"
                  />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                <button
                  class="text-decoration-none link-light btn btn-lg"
                  style="background-color: #8b8c3c"
                >
                  Hazte nuestro cliente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",

  data: function () {
    return {
      user: {
        name: "",
        lastName: "",
        username: "",
        email: "",
        isActive: true,
        isStaff: false,
      },
    };
  },

  methods: {
    processSignUp: function () {
      axios
        .post("https://doker-auth-p12c4g2.herokuapp.com/users/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataSignUp = {
            name: this.user.name,
            last_name: this.user.lastName,
            username: this.user.username,
            email: this.user.email,
            is_active: this.user.isActive,
            is_staff: this.user.isStaff,
          };

          this.$emit("completedSignUp", dataSignUp);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Fallo en el registro.");
        });
    },
  },
};
</script>

<style>
#body {
  height: 110vh;
  background-size: cover;
  background-repeat: no-repeat;
}
h3 {
  color: rgb(31, 30, 20);
}
.card {
  -webkit-backdrop-filter: blur(20px);
  margin: 0.2em auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  /*backdrop-filter: blur(20px);*/
  border-radius: 15px;
  margin-top: 12em;
  margin-bottom: 5em;
}
.card-header,
.card-footer {
  border-color: rgba(255, 255, 255, 0.06);
}
.card-title {
  color: #868686;
}

input {
  padding: 0.2em;
  background: rgba(255, 255, 255, 0.06);
  border: 1;
  color: #ddd;
  outline: none;
}
</style>
