<template>
  <div class="container px-4 px-lg-5 mt-5 py-5">
    <div>
      <div
        class="
          row
          gx-4 gx-lg-5
          row-cols-2 row-cols-md-3 row-cols-xl-4
          justify-content-center
        "
      >
        <!--seccion de las categorias -->
        <div class="col-mb-1">
          <div class="input-group">
            <div class="input-group-text" id="btnGroupAddon">Categoria</div>
            <input
              type="text"
              class="form-control"
              placeholder="Ingresa la categoría"
              aria-label="Input group"
              aria-describedby="btnGroupAddon"
            />
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <h3
                        class="
                          fw-bold
                          fst-italic
                          my-3
                          d-flex
                          flex-row
                          bd-highlight
                          mb-3
                        "
                        style="color: #8b8c3c"
                      >
                        Nuestras Categorias
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody v-for="category in categories" :key="category.id">
                  <tr >
                    <td>{{category.description}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!--seccion de las categorias -->
        <div class="col mb-5">
          <div class="card" v-for="product in products" :key="product.id">
            <!-- Product image-->
            <img class="card-img-top" v-bind:src="product.image" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
              <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{ product.name }}</h5>
                <!-- Product Unidad de Medida-->
                <div
                  class="d-flex justify-content-center small text-warning mb-2"
                >
                  {{ product.measure_unit }}
                </div>
                <!-- Product price-->
                $ {{ product.price }}
              </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <button class="btn btn-outline-dark mt-auto">Agrega</button> |
                <button class="btn btn-outline-dark mt-auto">
                  <router-link class="text-decoration-none" to="/ProductDetail"
                    >Ver mas</router-link
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";

export default {
  name: "Account",
  data: function () {
    return {
      products: [],
      categories: [],
    };
  },

  apollo: {
    products: {
      query: gql`
        query Products {
          products {
            name
            description
            image
            measure_unit
            category_product
            price
            stock
            id
          }
        }
      `,
    },
    categories: {
      query: gql`
        query Products {
          categories {
            id
            description
          }
        }
      `,
    },
  },
  created: function () {
    this.$apollo.queries.products.refetch();
    this.$apollo.queries.categories.refetch();
    console.log(this.categories);
  },
};
</script>
<style></style>
