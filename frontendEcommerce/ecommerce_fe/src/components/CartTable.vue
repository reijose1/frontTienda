<template>
  <div class="container py-3 py-md-2">
    <div class="row">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex flex-column">
          <div class="h3">Mis productos para ordenar</div>
        </div>
        <div class="ml-auto btn"><span class="fas fa-cog"></span></div>
        <div class="btn" id="sub">+ Agregar a mis favoritos</div>
      </div>
    </div>
    <div class="row wraper">
      <div id="table" class="bg-white rounded">
        <hr />
        <div class="table-responsive">
          <table class="table activitites">
            <thead>
              <tr>
                <th scope="col" class="text-uppercase header">Producto</th>
                <th scope="col" class="text-uppercase">Cantidad</th>
                <th scope="col" class="text-uppercase">Precio</th>
                <th scope="col" class="text-uppercase">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="item">
                  <div class="editors d-flex">
                    <img
                      src="https://static.merqueo.com/images/products/large/1330b8ea-a2de-47b4-86f0-bd98948a1bc0.jpg"
                      alt=""
                    />
                    <div class="pl-2">Crema de Leche Parmalat por 200 ml</div>
                  </div>
                </td>
                <td>12</td>
                <td class="d-flex flex-column">
                  <span class="red">$3500.00</span>
                  <del class="cross">$4000.00</del>
                </td>
                <td class="font-weight-bold">
                  $43200
                  <div class="close">&times;</div>
                  <button
                    class="d-flex justify-content-end btn border btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr>
                <td class="item">
                  <div class="editors d-flex align-items-start">
                    <img
                      src="https://www.freepnglogos.com/uploads/corona-png-logo/corona-bottle-transparent-png-logo-27.png"
                      alt=""
                    />
                    <div>Cerveza Corona 350 ml</div>
                  </div>
                </td>
                <td>6</td>
                <td class="d-flex flex-column">$3000</td>
                <td class="font-weight-bold">
                  $18000
                  <div class="close">&times;</div>
                  <button
                    class="
                      d-flex
                      justify-content-end
                      align-items-end
                      btn
                      border
                      btn-danger
                    "
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
              <transition-group name="list-shopping-cart" tag="tbody">
                <app-cart-item> </app-cart-item>
              </transition-group>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="d-flex justify-content-between">
        <div class="text-muted">
          <button
            class="btn"
            type="button"
            data-toggle="collapse"
            data-target="#table"
            aria-expanded="false"
            aria-controls="table"
          >
            <span class="fas fa-minus"></span>
          </button>
        </div>
        <div class="d-flex flex-column justify-content-end align-items-end">
          <div class="d-flex px-3 pr-md-5 py-1 subtotal">
            <div class="px-4">Total</div>
            <div class="h5 font-weight-bold px-md-2">$61200</div>
          </div>
          <button class="btn btn-light btn-outline-dark">
            Confirmar el Pago
          </button>
          <button class="btn py-2 btn-rounded">Agregar más productos al carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["cartItem"],
  computed: {
    subtotal() {
      return this.cartItem.quantity * this.cartItem.price;
    },
  },
  methods: {
    ...mapActions(["updateCart", "removeItemInCart"]),
    removeItem() {
      let vm = this;
      this.removeItemInCart({
        item: vm.cartItem,
      });
    },
    updateQuantity(event) {
      let vm = this;
      this.updateCart({
        item: vm.cartItem,
        quantity: parseInt(event.target.value),
        isAdd: false,
      });
    },
  },
};
</script>

<style>
.wrapper {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
}

.table {
  overflow: hidden;
}

.table thead tr th {
  letter-spacing: 0.08rem;
  font-weight: normal;
}

.table tr td,
.table tr th {
  border: none;
  text-align: center;
}

.table.activitites thead {
  border-bottom: 1px solid #54e346;
  font-size: 0.8rem;
  font-weight: 700;
}

.table thead {
  font-size: 0.8rem;
  font-weight: 700;
}

.table.activitites {
  position: relative;
}

.table.activitites thead::after {
  position: absolute;
  background: #fff;
  padding: 0px 8px;
  top: 38px;
  letter-spacing: 0.08rem;
  font-size: 0.6rem;
  color: #54e346;
  font-weight: 600;
}

.table tbody td.item {
  font-family: Helvetica;
  font-size: 1.2rem;
  font-weight: 900;
  text-align: left;
}

.editors {
  position: relative;
}

.editors img {
  object-fit: cover;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 5px solid #fff;
}

#img {
  position: absolute;
  top: -15px;
  left: -50px;
}
</style>
