let stockProductos = [];
let contenedorProductos = document.getElementById("contendedor-productos");

const URLGET = "../js/costants/productos.json";

$.getJSON(URLGET, (data) => {
  stockProductos = data;
  agregarProductosAlhtml(stockProductos);
  
});



function agregarProductosAlhtml(array) {
  contenedorProductos.innerHTML=""
  array.map((element) => {
    let div = document.createElement("div");
    let id = uuid.v1()
    element.id = id
    div.classList.add("col-md-2");
    div.innerHTML += `
            <i class="${element.rubro}"> 
            <img src="${element.img}">
            <hr>
            <h6 class="card-title">${element.nombre}</h6>
            <h4>Precio: $<span>${element.precio}</span></h4>
            <h3>stock: ${element.stock}</h3>
            <button class="btn1 btn-magnolia" data-id="${id}" data-toggle="modal">Agregar</button>
            </div>
        `;
        
    contenedorProductos.appendChild(div);
  });

  let btnAddCarrito = document.querySelectorAll(".btn1");
  //Eventos en el boton agregar
  btnAddCarrito.forEach((element) => {
    element.addEventListener("click", (event) => {
      enviarCardAlCarrito(event.target.parentElement);
      productoAgregado();
    });
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));
}

agregarProductosAlhtml(stockProductos);

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
  
  actualizarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function generarId(){
  
  console.log(stockProductos.id)
}

generarId()