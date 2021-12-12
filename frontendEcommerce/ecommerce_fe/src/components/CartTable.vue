<template>
<div class="d-flex align-items-center justify-content-between">
        <div class="d-flex flex-column">
            <div class="h3">Mis productos para ordenar</div>
        </div>
        <div class="ml-auto btn"><span class="fas fa-cog"></span></div>
        <div class="btn" id="sub"> + Agregar a mis favoritos </div>
    </div>
    <div id="table" class="bg-white rounded">
  <div class="container table-responsive">
    <table id="cart" class="table table-hover table-sm">
      <thead>
        <tr>
          <th style="width:55%">Product</th>
          <th style="width:9%">Price</th>
          <th style="width:7%">Quantity</th>
          <th style="width:20%" class="text-center">Subtotal</th>
          <th style="width:9%"></th>
        </tr>
      </thead>

      <transition-group name="list-shopping-cart" tag="tbody">
        <app-cart-item>

        </app-cart-item>
      </transition-group>

      <tfoot>
        <tr class="d-table-row d-sm-none">
          <td class="text-center">
            <strong>Total $xxx</strong>
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-success">
              <i class="fa fa-angle-left"></i> Guardar y Seguir Comprando
            </button>
          </td>
          <td colspan="2" class="d-none d-sm-table-cell"></td>
          <td class="d-none d-sm-table-cell text-center">
            <strong>Total $xxx</strong>
          </td>
          <td class="px-0">
            <button class="btn btn-info">
              <span class="text-nowrap"
                >Pagar <i class="fa fa-angle-right d-inline"></i
              ></span>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  </div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		props: ['cartItem'],
		computed: {
			subtotal() {
				return this.cartItem.quantity * this.cartItem.price;
			}
		},
		methods: {
			...mapActions(['updateCart', 'removeItemInCart']),
			removeItem() {
				let vm = this;
				this.removeItemInCart({
					item: vm.cartItem
				});
			},
			updateQuantity(event) {
				let vm = this;
				this.updateCart({
					item: vm.cartItem,
					quantity: parseInt(event.target.value),
					isAdd: false
				});
			}
		}
	}
</script>

<style>

</style>
