let sidebar = document.getElementById("my-offcanvas");

sidebar.innerHTML = ` 
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas1">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Carrito de Compras</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body" >
               
    </div>
    
  </div>    
  
`;
let carritoNuevo = document.querySelector(".offcanvas-body");
const contadorCarrito = document.getElementById("contador");
//MOSTRAMOS EL PRODUCTO EN EL CARRITO
const actualizarCarrito = () => {
  

  carritoNuevo.innerHTML = "";
  carrito.forEach((element) => {
    carritoNuevo.innerHTML += `
      <div class="-modal-productos-carrito">
        <div class="col ">
          <img src="${element.imagen}" style="width: 9vh">
          <button class="btn-delete" data-id=${element.id}></button>
          <h6>${element.nombre}</h6>
        </div>
        
        <div class="col-mas-menos">
          <button class="btn btn-outline-danger" data-id=${element.id}> - </button>
          <span>${element.cantidad}</span>
          <button class="btn btn-outline-primary" data-id=${element.id}> + </button>
        </div>
      
        <div id="montoTotal"class="col-monto">
          <span>$${element.precioTotal}</span>
        </div>
        <hr>
      </div>
    `;
  });

  let miTotal = totalCarrito();
  let divTotal = document.createElement("div");
  divTotal.innerHTML = `
    <p id="totalCarritoText">TOTAL CARRITO: $${miTotal}</p>
    <div>
      <button class="btn btn-comprar">Comprar</button>
    </div>
    <div>
      <a href="./index.html"><button class="btn btn-continue">Seguir Viendo</button></a>
    </div>`;

  const carritoVacio = document.createElement("div");
  carritoVacio.innerHTML = `
    <div class="alert alert-primary d-flex align-items-center justify-content-center" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <div>
        El carrito de compras está vacío
      </div>
    </div>
  `;
  carritoNuevo.append(divTotal);
  carritoNuevo.append(carritoVacio);

  const ocultarTotal = () => {
    if (miTotal === 0) {
      $(divTotal).hide();
    }
    if (miTotal >= 1) {
      $(carritoVacio).hide();
    }
  };
  contadorCarrito.innerText = carrito.length;
  console.log(carrito)
  
  ocultarTotal();
};

const totalCarrito = () => {
  let total = carrito.reduce(
    (acumulador, iterador) => acumulador + iterador.precioTotal,
    0
  );

  return total;
};

//RESTAR PRODUCTO
const restarProducto = (event) => {
  let idProducto = event.target.getAttribute("data-id");

  carrito = carrito.map((element) => {
    if (element.id == idProducto) {
      element.cantidad--;
      element.precioTotal = element.precioTotal - element.precioPorUnidad;

      if (element.cantidad === 0 && element.precioTotal === 0) {
        element.cantidad = 1;
        element.precioTotal = element.precioPorUnidad;
      }
      return element;
    } else {
      return element;
    }
    
  });
  
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
};

const sumarProductos = (event) => {
  let idProducto = event.target.getAttribute("data-id");

  carrito = carrito.map((element) => {
    if (element.id == idProducto) {
      element.cantidad++;
      element.precioTotal = element.precioTotal + element.precioPorUnidad;

      if (element.cantidad === 0 && element.precioTotal === 0) {
        element.cantidad = 1;
        element.precioTotal = element.precioPorUnidad;
      }
      

      return element;
    } else {
      return element;
    }
  });
  console.log("carrito",carrito)
  localStorage.setItem("carrito", JSON.stringify(carrito));

  actualizarCarrito();
};

// VACIAR PRODUCTOS
const vaciarProductos = (event) => {
  let idProducto = event.target.getAttribute("data-id");
  carrito = carrito.filter((element) => element.id != idProducto);

  
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
};

//BOTONES QUITAR Y VACIAR
sidebar.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-outline-danger")) {
    restarProducto(event);
  }
  if (event.target.classList.contains("btn-outline-primary")) {
    sumarProductos(event);
  }
  if (event.target.classList.contains("btn-delete")) {
    vaciarProductos(event);
  }
});

actualizarCarrito();
