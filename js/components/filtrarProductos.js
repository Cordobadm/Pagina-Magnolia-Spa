// const botonMake = document.getElementById("btn-makeUp")
// const botonPeinado = document.getElementById("btn-peinado")
// const botonSalud = document.getElementById("btn-salud")
// const botonTodos = document.getElementById("btn-todos")

// $(botonMake).on("click", () =>{
//     $(".MAKEUP").show()
//     $(".PEINADO").hide()
//     $(".SALUD").hide()
// })

// $(botonPeinado).on("click", () =>{
//     $(".PEINADO").show()
//     $(".MAKEUP").hide()
//     $(".SALUD").hide()
// })

// $(botonSalud).on("click", () =>{
//     $(".SALUD").show()
//     $(".PEINADO").hide()
//     $(".MAKEUP").hide()
// })

// $(botonTodos).on("click", () =>{
//     $(".SALUD").show()
//     $(".PEINADO").show()
//     $(".MAKEUP").show()
// })
let productos = document.getElementById("produtos");
const filtrarProductos = () => {
  if (productos.value === "all") {
    agregarProductosAlhtml(stockProductos);
  } else {
    const arrayFiltrado = stockProductos.filter(
      (el) => el.rubro == productos.value
    );
    agregarProductosAlhtml(arrayFiltrado);
  }
};

productos.addEventListener("change", function () {
  filtrarProductos();
});

const filtrarPrecios = document.getElementById("precio");
filtrarPrecios.addEventListener("change", () => {
  if (filtrarPrecios.value == 1) {
    stockProductos.sort((a, b) => a.precio - b.precio);
    filtrarProductos(stockProductos);
  } else {
    stockProductos.sort((a, b) => b.precio - a.precio);
    filtrarProductos(stockProductos);
  }
});
