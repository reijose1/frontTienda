<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#!">Mi Tienda Online</a>
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
            <li class="nav-item">
              <router-link class="nav-link" to="/Login">Inicia Sesión</router-link>
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
                <li><a class="dropdown-item" href="#!">Todos los productos</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#!">Mas populares</a></li>
                <li><a class="dropdown-item" href="#!">Nuevos productos</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn btn-outline-dark" type="submit">
              <i class="bi-cart-fill me-1"></i>
              <router-link to="/cartTable">Carrito</router-link>
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- Header-->
    <header class="text-center py-2 text-white" style="background-color: #8b8c3c">
      <div class="container px-2 px-lg-5 my-1">
        <div class="text-center text-white">
          <img id="logo" src="./assets/logo.png" alt="logo" />
          <img id="logo2" src="./assets/logo2.png" alt="logo" />
          <h1 class="display-4 fw-bolder">Proyecto ciclo 4 - Desarrollo Web</h1>
        </div>
      </div>
    </header>
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
    <footer class="text-center text-white" style="background-color: #8b8c3c">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: CTA -->
        <section class="">
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3">Registrate para poder comprar</span>
            <router-link to="/SignUp"><button class="btn btn-light btn-outline-dark btn-rounded">
              <span class="me-3 mx-3 text-md-start text-center">Registrate!</span>
            </button></router-link>
          </p>
        </section>
        <!-- Section: CTA -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.5)">
        © 2021 Copyright:
        <a class="text-white" href="https://www.misiontic2022.gov.co/portal/"
          >MisiónTic2022</a
        >
      </div>
      <!-- Copyright -->
    </footer>

    <!-- Footer -->
  </div>
</template>

<style lang="scss">
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
</style>
