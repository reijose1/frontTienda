<template>
  <div class="px-4 px-lg-5 mt-5 py-5">
    <!--seccion de las categorias -->
        <div class="mySecCat-1 col-mb-1">
          <div>
            <div class="input-group-text" id="btnGroupAddon">Categoria</div>
            <input
              type="text"
              class="form-control"
              placeholder="Ingresa la categoría"
              aria-label="Input group"
              aria-describedby="btnGroupAddon"
            />
            <div class="">
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
    <div>
      <div class="mySecCat">        
        <!--seccion de las categorias -->
        <div class="mySecCat-2 col mb-5">
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
                <button class="btn btn-outline-dark mt-auto">Agrega</button> &nbsp;
                <button class="btn btn-outline-dark mt-auto" v-on:click="verDetalle(product)">
                  Ver mas
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
  name: "ProductHome",
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
  methods: {
    verDetalle: function(x){
      localStorage.setItem("id",x.id);
      localStorage.setItem("name",x.name);
      localStorage.setItem("description",x.description);
      localStorage.setItem("image", x.image);
      localStorage.setItem("measure_unit", x.measure_unit);
      localStorage.setItem("category_product", x.category_product);
      localStorage.setItem("price", x.price);
      localStorage.setItem("stock", x.stock);      
      console.log(localStorage.getItem("image"))
      this.$router.push({ name: "ProductDetail" });
    },

    }
  };

</script>
<style scoped>
.mySecCat-1 {
  position: absolute;
  z-index: 10;
  left: 50px;
}

.mySecCat-2 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background: #eeecec;
}

.card {
  width: 350px;
  height: 450px;
  margin: 10px;
  border: 2px solid black;
}

.card img {
  width: 50%;
  height: 200px;
  
}
</style>
