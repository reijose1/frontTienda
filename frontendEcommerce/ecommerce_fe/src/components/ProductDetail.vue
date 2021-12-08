<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img
            class="card-img-top mb-5 mb-md-0"
            src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <div class="small mb-1">Categoria: xxx</div>
          <h2 class="display-5 fw-bolder">Nombre del Producto</h2>
          <h5 class="small mb-3 fw-light">Unidad de Medida: xxx</h5>
          <div class="fs-5 mb-5">
            <span class="text-decoration-line-through">$4500.00</span>
            <span>$4000.00</span>
          </div>
          <h4 class="small mb-3 fw-bolder">Descripción:</h4>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi
            alias magni, accusamus eius blanditiis delectus ipsam minima ea iste
            laborum vero?
          </p>
          <div class="d-flex">
            <h5 class="small mb-3 fw-light">Cantidad:</h5>
            <input
              class="form-control text-center me-3"
              id="inputQuantity"
              type="num"
              value="1"
              style="max-width: 3rem"
            />
            <button class="btn btn-outline-dark flex-shrink-0" type="button">
              <i class="bi-cart-fill me-1"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>






</template>

<script>
export default {};
</script>

<style></style>
