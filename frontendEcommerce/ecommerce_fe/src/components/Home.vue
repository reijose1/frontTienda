i
<template>
  <section id="body">
    <div class="card h-70" style="width: 20rem">
      <div class="card-body">
        <div class="card-user">
          <h5 class="card-text align-items-center" style="color: white">
            Bienvenido
          </h5>
          <h5 class="card-text align-items-center" style="color: white">
            {{ username }}
          </h5>
        </div>
        <br />
        <p class="card-text">Puedes acceder a:</p>
      </div>
    </div>
    <div class="container">
      <div class="row py-5 mt-5 pt-lg-5 pt-5">
        <div class="miStUn col col-4 col-md-4">
          <div class="miCard card">
            <div class="card-header">
              <strong
                ><h4 class="text-color-light fw-bold">Carrito de Compras</h4>
              </strong>
            </div>
            <img
              class="miImgChiquita"
              src="https://media.istockphoto.com/photos/friendly-customer-couple-paying-for-their-groceries-with-credit-card-picture-id1152067793?k=20&m=1152067793&s=170667a&w=0&h=Bwyfy1m_exj1LZttFVkA9dmpaVhagOF3DN4ZeWsBwiY="
              alt="pagar"
            />
            <div class="card-body d-grid gap-1">
              <p class="card-text">
                Puedes ir a pagar tu pedido con total seguridad.
              </p>
              <button
                class="btn miBtnUn btn-light btn-outline-dark py-0 fw-bold"
              >
                <router-link class="text-decoration-none" to="/cartTable">Llevame Allí</router-link>
              </button>
            </div>
          </div>
        </div>
        <div class="col col-4 col-md-4">
          <div class="miCard card">
            <div class="card-header">
              <strong
                ><h4 class="text-color-light fw-bold">
                  Nuestro Mercado
                </h4></strong
              >
            </div>
            <img
              class="miImgChiquita"
              src="https://www.elpais.com.co/files/article_main_small/uploads/2018/04/15/5ad40670aedc6.jpeg"
              alt="pagar"
            />
            <div class="card-body d-grid gap-1">
              <p class="card-text">
                Puedes continuar agregando productos a tu carrito si lo deseas.
              </p>
              <button
                class="btn miBtnUn btn-light btn-outline-dark py-0 fw-bold"
              >
                <router-link class="text-decoration-none" to="/">Llevame Allí</router-link>
              </button>
            </div>
          </div>
        </div>
        <div class="col col-4 col-md-4">
          <div class="card miCard">
            <div class="card-header">
              <strong
                ><h4 class="text-color-light fw-bold">Cerrar Sesión</h4></strong
              >
            </div>
            <img
              class="miImgChiquita"
              src="https://st.depositphotos.com/1011643/4757/i/600/depositphotos_47579171-stock-photo-store-employee-with-crossed-arms.jpg"
              alt="pagar"
            />
            <div class="card-body d-grid gap-2">
              <p class="card-text text-center text-wrap">
                Queremos tenerte siempre con nosotros, pero si debes ausentarte,
                esperamos verte pronto por acá.
              </p>
              <button
                class="btn miBtnUn btn-light btn-outline-dark py-0 fw-bold"
              >
                <router-link class="text-decoration-none" to="/Login">Cerrar Sesión</router-link>
              </button>
            </div>
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
      name_user: localStorage.getItem("name") || "none",
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

.miStUn {
  height: 80px;
}

.miCard {
  background-color: darkslategrey !important;
  height: 400px;
  color: aliceblue;
  border-radius: 15px !important;
}

.card-user {
  background-color: #8b8c3c;
  border-radius: 15px;
}
.card-cs {
  color: black;
}

.miBtnUn {
  position: relative;
  bottom: 0.1em;
}

.miImgChiquita {
  margin: 0 auto;
  padding: 0.1em;
  height: 140px;
  width: 220px;
  justify-content: center;
  border-radius: 20px;
}
</style>
