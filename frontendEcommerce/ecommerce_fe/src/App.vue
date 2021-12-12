<template>
  <div class="miHeader">
    <nav class="nav minav navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#">Mi Tienda Online</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Mercado</router-link>
            </li>
            <li class="nav-item" v-if="!is_auth">
              <router-link class="nav-link" to="/Login"
                >Inicia Sesión</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Tiendas</a
              >
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">Todos los productos</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Mas populares</a></li>
                <li><a class="dropdown-item" href="#">Nuevos productos</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <button
                class="nav-link logout-Button"
                v-if="is_auth"
                v-on:click="logOut"
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
          <form class="d-flex text-decoration-none">
            <button class="btn btn-outline-dark " type="submit">
              <i class="bi-cart-fill me-1"></i>
              <router-link class="text-decoration-none text-black-50" to="/cartTable">Carrito</router-link>
              <span class="badge bg-dark text-white ms-1 rounded-pill">{{quantity}}</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- Header-->
    <div class="row py-2">
      <header
        class="text-center py-2 text-white"
        style="background-color: #8b8c3c"
      >
        <div class="container px-2 px-lg-5">
          <div class="row">
            <div class="col col-1 col-sm-1">
              <img id="logo" src="./assets/logo.png" alt="logo" />
            </div>
            <div class="col col-10 col-md-10 text-center text-white">
              <h4 class="display-4">Proyecto ciclo 4 - Desarrollo Web</h4>
            </div>
            <div class="col col-1 col-sm-1">
              <img id="logo2" src="./assets/logo2.png" alt="logo" />
            </div>
          </div>
          <div class=""></div>
        </div>
      </header>
    </div>

    <!-- Section-->
    <div class="container">
      <div class="row">
        <router-view
          v-on:completedLogIn="completedLogIn"
          v-on:completedSignUp="completedSignUp"
        >
        </router-view>
      </div>
    </div>
    <!-- Footer-->
    <footer
      class="miFooter text-center text-white"
      style="background-color: #3f3f24"
    >
      <div class="container">
        <div class="row py-1">
          <div class="col mt-2">
            <section class="" v-if="!is_auth">
              <span class="me-3 text-md-start">Registrate para poder comprar</span>
              <router-link to="/SignUp"
                ><button class="btn btn-light btn-outline-dark btn-rounded">
                  <span class="me-3 mx-3 text-md-start text-center"
                    >Registrate!</span
                  >
                </button></router-link
              >
            </section>
          </div>
          <div class="miCopy col col-md-4 text-start py-3">
            © 2021 Copyright:
            <a
              class="text-white"
              href="https://www.misiontic2022.gov.co/portal/"
              >MisiónTic2022</a
            >
          </div>
        </div>
      </div>
    </footer>

    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "App",

  data: function () {
    return {
      quantity:0,
      is_auth: false,
    };
  },

  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false) this.$router.push({ name: "Login" });
      else this.$router.push({ name: "Home" });
    },
    loadLogIn: function () {
      this.$router.push({ name: "login" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("lastname", data.lastname);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },

    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    created: function () {
      this.verifyAuth();
    },
  },
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#logo {
  width: 100px;
}

#logo2 {
  width: 200px;
}

.logout-Button {
  border: none;
  background-color: #f8f9fa;
}

.minav {
  position: fixed;
  top: 0;
  width: 100%;
}

.miHeader {
  width: 100%;
}

.miFooter {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-block-end: 0;
  justify-content: flex-end;
}

.miCopy {
  display: -webkit-inline-flex;
  flex-wrap: wrap;
  background-color: #3f3f24;
}


</style>
