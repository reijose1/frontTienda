<template>
  <section id="body">
    <div class="card h-70" style="width: 20rem">
      <div class="card-body">
        <div class="card-user">
          <h5 class="card-text align-items-center" style="color: white">
            Bienvenido
          </h5>
          <h5 class="card-text align-items-center" style="color: white">
            {{ name }} {{last_name}}
          </h5>
        </div>
        <br />
        <p class="card-text">Puedes acceder a:</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-header">Carrito de compras</div>
          <div class="card-body">
            <p class="card-text">
              Puedes ir a pagar tu pedido con total seguridad.
            </p>
            <router-link class="btn btn-info list-group-item" to="/cartTable"
              >Llevame Allí</router-link
            >
          </div>
        </div>
        <div class="card">
          <div class="card-header">Nuestro mercado</div>
          <div class="card-body">
            <p class="card-text">
              Puedes continuar agregando productos a tu carrito si lo deseas.
            </p>
            <router-link class="btn btn-info list-group-item" to="/"
              >Llevame Allí</router-link
            >
          </div>
        </div>
        <div class="card">
          <div class="card-header">Cerrar Sesión</div>
          <div class="card-body">
            <p class="card-text">
              Queremos tenerte siempre con nosotros, pero si debes ausentarte,
              esperamos verte pronto por acá.
            </p>
            <router-link class="btn btn-info list-group-item" to="/Login"
              >Cerrar Sesión</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",
  data: function () {
    return {
      name: localStorage.getItem("name") || "none",
      last_name: localStorage.getItem("last_name") || "none",
      username: localStorage.getItem("username") || "none",
    };
  },
};
</script>

<style>
#body {
  padding: 0%;
  margin: 0%;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  justify-content: center;
}

.card-user {
  background-color: #8b8c3c;
  border-radius: 15px;
}
.card-cs {
  color: black;
}
</style>
