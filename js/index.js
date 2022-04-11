
$("#productosInicio").append("<h1>Productos Destacados</h1>");

$("#serviciosInicio").append("<hr><h1>Servicios Destacados</h1>");

// ---------- SECCION NOSOTRAS ---------
$("#textoNosotras").append("<h1>Conocenos un poco<h1>");

$("#formasPago").append(`
<div class="card-informacion">
  <div class="row g-0">
    <div class="col-md-3">
      <img src="../img/envios.png" class="img-fluid" alt="envios">
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title">Envios</h5>
        <p class="card-text">Gratis a Y.B y capital a partir de tu compra de $3000</p>
      </div>
    </div>
  </div>
</div>

<div class="card-informacion">
  <div class="row g-0">
    <div class="col-md-3">
      <img src="../img/tarjetas.png" class="img-fluid" alt="tarjetas">
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title">Tarjetas de Créditos</h5>
        <p class="card-text">Recibimos todas las tarjetas</p>
      </div>
    </div>
  </div>
</div>

<div class="card-informacion">
  <div class="row g-0">
    <div class="col-md-3">
      <img src="../img/wasap.png" class="img-fluid" alt="wsp">
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title">WhatsApp</h5>
        <p class="card-text">Saca tu turno por whatsapp</p>
      </div>
    </div>
  </div>
</div>
`)


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let cantidaCarrito;

//-------------Pop UP-------------------
const modal = document.getElementById("modalPopUp");
const span = document.getElementsByClassName("close")[0];

const productoAgregado = () => {
  $(modal).fadeIn();

  $(modal).fadeOut();
};

