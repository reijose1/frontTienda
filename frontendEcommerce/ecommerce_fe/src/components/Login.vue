<template>
  <div id="body">
    <div class="container h-100">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Inicio de Sesión</h3>
            <span class="card-title">Ingrese sus credenciales de Acceso</span>
          </div>
          <div class="card-body bg-dark">
            <form>
              <div class="p-3 col-12">
                <input type="email" class="col-12" placeholder="Email" />
              </div>
              <div class="p-3 col-12">
                <input type="password" class="col-12" placeholder="Password" />
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              <button
                class="text-decoration-none link-light btn btn-lg"
                style="background-color: #8b8c3c"
              >
                Accede
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#body {
  padding: 0%;
  margin: 0%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
h3 {
  color: rgb(31, 30, 20);
}
.card {
  -webkit-backdrop-filter: blur(20px);
  /*backdrop-filter: blur(20px);*/
  border-radius: 15px;
}
.card-header,
.card-footer {
  border-color: rgba(255, 255, 255, 0.06);
}
.card-title {
  color: #868686;
}

input {
  padding: 0.2em;
  background: rgba(255, 255, 255, 0.06);
  border: 0;
  color: #ddd;
  outline: none;
}
</style>
