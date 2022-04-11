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
              <li id="turnos">
                <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola+Chicas%21&app_absent=0" target="_blank">
                <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp">Reservar Turno</a>
              </li>
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
