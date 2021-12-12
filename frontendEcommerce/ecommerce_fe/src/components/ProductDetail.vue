<template>
  <section class="py-2">
    <div class="container px-4 px-lg-5 my-2 mb-5 pb-5 py-5">
      <div class="row gx-4 gx-lg-2 align-items-center">
        <div class="col-md-3">
          <img class=" myImg card-img-top mb-2 mb-md-0" v-bind:src="image" alt="..." />
        </div>
        <div class="col-md-9">
          <div class="small mb-1">Categoria: {{ category_product }}</div>
          <h3 class="display-5 d-flex justify-content-center fw-bolder">{{ name }}</h3>
          <h5 class="small mb-3 fw-light">Unidad de Medida: {{ measure_unit }}</h5>
          <div class="fs-5 mb-2"><span>COP $ {{ price }}</span></div>
          <h5 class="small mb-3 fw-bolder">Descripción:</h5>
          <p class="lead justify-content-between">{{ description }} </p>
          <div class="d-flex justify-content-center">
            <h4 class="small mb-3 fw-light">
              Cantidad disponible: <h4> {{ stock }} </h4>
            </h4>
          </div>
          <h5>Ingresa la cantidad que deseas</h5>
          <br />
          <div class="btn-group" role="group" aria-label="Basic example">
            <input
              class="form-control text-center me-3"
              id="inputQuantity"
              type="num"
              value="1"
              style="max-width: 3rem"
            />
            <button class="btn btn-outline-dark flex-shrink-0" type="button">
              <i class="bi-cart-fill me-1"></i>
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductDetail",
  data: function () {
    return {
      id: localStorage.getItem("id"),
      name: localStorage.getItem("name"),
      description: localStorage.getItem("description"),
      image: localStorage.getItem("image"),
      measure_unit: localStorage.getItem("measure_unit"),
      category_product: localStorage.getItem("category_product"),
      price: localStorage.getItem("price"),
      stock: localStorage.getItem("stock"),
    };
  },
};
</script>

<style>
  .myImg {
    display: inline-flex;
    flex-wrap: wrap;
    height: 400px;
    width: 300px;
  }
</style>
