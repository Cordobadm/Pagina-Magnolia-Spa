let cardServ = document.getElementById("rowServ");
let stockServicios = [];

const URLGETSERV = "../js/costants/servicios.json";
$.getJSON(URLGETSERV, (data) => {
  stockServicios = data;
  agregarServiciosAlHtml(stockServicios);
});

function agregarServiciosAlHtml(arrayServ) {
  cardServ.innerHTML = "";

  arrayServ.map((e) => {
    let id = uuid.v1();
    e.id = id;
    cardServ.innerHTML += `
            <div id="cardServ" class= "${e.rubro} col-6 col-lg-2"> 
              <img src="${e.img}">
              <hr>
              <h6 class="card-title">${e.nombre}</h6>
              <h4>Precio: $<span>${e.precio}</span></h4>
              <h3>stock: ${e.stock}</h3>
              <button class="btn2 btn-magnolia" data-id="${id}" data-toggle="modal">Agregar</button>
            </div>
          `;
  });

  let btnAddCarrito = document.querySelectorAll(".btn2");
  //Eventos en el boton agregar
  btnAddCarrito.forEach((element) => {
    element.addEventListener("click", (event) => {
      enviarCardAlCarrito(event.target.parentElement);
      productoAgregado();
    });
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//enviamos la card del producto al carrito
function enviarCardAlCarrito(datos) {
  let productoAlCarrito = {
    imagen: datos.querySelector("img").src,
    nombre: datos.querySelector("h6").textContent,
    stock: datos.querySelector("h3").textContent,
    precioPorUnidad: Number(datos.querySelector("h4 span").textContent),
    precioTotal: Number(datos.querySelector("h4 span").textContent),
    cantidad: 1,
    id: datos.querySelector("button").getAttribute("data-id"),
  };

  let existeProductoEnCarrito = carrito.some(
    (element) => element.id === productoAlCarrito.id
  );

  if (existeProductoEnCarrito) {
    carrito = carrito.map((element) => {
      if (element.id === productoAlCarrito.id) {
        element.cantidad++;
        element.precioTotal = element.precioPorUnidad * element.cantidad;
        return element;
      } else {
        return element;
      }
    });
  } else {
    carrito.push(productoAlCarrito);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  actualizarCarrito();
}
