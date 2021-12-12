<template>
  <div id="body">
    <div class="container h-100">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Inicio de Sesión</h3>
            <span class="card-title">Ingrese sus credenciales de Acceso</span>
          </div>
          <div class="card-body bg-dark">
            <form v-on:submit.prevent="processLogInUser">
              <div class="p-3 col-12">
                <input type="text" v-model="user.username" class="col-12" placeholder="Username" />
              </div>
              <div class="p-3 col-12">
                <input type="password" v-model="user.password" class="col-12" placeholder="Password" />
              </div>
              <button
                type= "submit"
                class="text-decoration-none link-light btn btn-lg"
                style="background-color: #8b8c3c"
              >
                Accede
              </button>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",

  data: function() {
    return {
      user: {
        username: "",
        password: "",
        name_user: "",
      }
    }
  },

  methods: {
    processLogInUser: function() {
      console.log(this.user);
      axios.post(
        "https://doker-auth-p12c4g2.herokuapp.com/login/",
        this.user,
        {headers: {}}
        )
        .then(result => {
            console.log(result.data)

            let dataLogin = {
              token_access: result.data.token,
              username: result.data.user.username,
              name: result.data.user.name,
              lastname: result.data.user.last_name,
              email: result.data.user.email,
              message: result.data.message,
              
            }
           
            // console.log(dataLogin)
            this.$emit('completedLogIn', dataLogin)
            console.log("pasó");
        })
        .catch((error) => {

          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        })
    }
  }
};
</script>

<style>
#body {
  padding: 0%;
  margin: 0%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
h3 {
  color: rgb(31, 30, 20);
}
.card {
  -webkit-backdrop-filter: blur(20px);
  /*backdrop-filter: blur(20px);*/
  border-radius: 15px;
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
  border: 0;
  color: #ddd;
  outline: none;
}
</style>
