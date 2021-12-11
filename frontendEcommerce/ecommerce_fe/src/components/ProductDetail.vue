<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img class="card-img-top mb-5 mb-md-0" v-bind:src="image" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="small mb-1">Categoria: {{ category_product }}</div>
          <h2 class="display-5 fw-bolder">{{ name }}</h2>
          <h5 class="small mb-3 fw-light">
            Unidad de Medida: {{ measure_unit }}
          </h5>
          <div class="fs-5 mb-5">
            <span>COP $ {{ price }}</span>
          </div>
          <h4 class="small mb-3 fw-bolder">Descripción:</h4>
          <p class="lead">
            {{ description }}
          </p>
          <div class="d-flex justify-content-center">
            <h5 class="small mb-3 fw-light">
              Cantidad disponible: {{ stock }}
            </h5>
          </div>
          <h6>Ingresa la cantidad que deseas</h6>
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

<style></style>
