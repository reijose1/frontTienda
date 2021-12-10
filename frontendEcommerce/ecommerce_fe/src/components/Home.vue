<template>
<section id="body" >
<div class="card h-70 " style="width: 20rem;">
  <div class="card-body">
    <div class="card-user"> 
    <h5 class="card-text align-items-center" style="color: white;"> Bienvenido </h5>
    <h5 class="card-text align-items-center" style="color: white;">{{username}}</h5>
    </div>
    <br>
    <p class="card-text"> Puedes acceder a:</p>
  </div>
  <ul class="list-group list-group-flush">
    <router-link  class="list-group-item" to="/cartTable">Carrito de compras</router-link>
    <router-link class="list-group-item" to="/">Nuestro mercado</router-link>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link card-cs">Cerrar Sesión</a>
  </div>
</div>
</section>
</template>
<script>
export default {
  name: "Home",
  data: function () {
    return {
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

.card-user{
  background-color: #8b8c3c;
  border-radius: 15px;
}
.card-cs{
  color: black;
}
</style>