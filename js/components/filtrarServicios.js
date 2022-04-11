// const botonMasajes = document.getElementById("btn-masajes")
// const botonLifting = document.getElementById("btn-lifting")
// const botonEstetica = document.getElementById("btn-estetica")
// const botonDepilacion = document.getElementById("btn-depilacion")
// const botonHimfu = document.getElementById("btn-himfu")
// const botonTodos = document.getElementById("btn-todos")

// $(botonMasajes).on("click", () =>{
//     $(".MASAJES").show()
//     $(".LIFTING").hide()
//     $(".DEPILACION").hide()
//     $(".ESTETICA").hide()
//     $(".HIMFU").hide()
// })

// $(botonEstetica).on("click", () =>{
//     $(".MASAJES").hide()
//     $(".LIFTING").hide()
//     $(".DEPILACION").hide()
//     $(".ESTETICA").show()
//     $(".HIMFU").hide()
// })

// $(botonLifting).on("click", () =>{
//     $(".MASAJES").hide()
//     $(".LIFTING").show()
//     $(".DEPILACION").hide()
//     $(".ESTETICA").hide()
//     $(".HIMFU").hide()
// })

// $(botonDepilacion).on("click", () =>{
//     $(".MASAJES").hide()
//     $(".LIFTING").hide()
//     $(".DEPILACION").show()
//     $(".ESTETICA").hide()
//     $(".HIMFU").hide()
// })

// $(botonHimfu).on("click", () =>{
//     $(".MASAJES").hide()
//     $(".LIFTING").hide()
//     $(".DEPILACION").hide()
//     $(".ESTETICA").hide()
//     $(".HIMFU").show()
// })

// $(botonTodos).on("click", () =>{
//     $(".MASAJES").show()
//     $(".LIFTING").show()
//     $(".DEPILACION").show()
//     $(".ESTETICA").show()
//     $(".HIMFU").show()
// })
let servicios = document.getElementById("servicio");

const filtrarServicios = () => {
  if (servicios.value == "all") {
    agregarServiciosAlHtml(stockServicios);
  } else {
    const arrayFiltrado = stockServicios.filter(
      (e) => e.rubro == servicios.value
    );
    agregarServiciosAlHtml(arrayFiltrado);
  }
};

servicios.addEventListener("change", function () {
  filtrarServicios();
});

let filtrarPrecio = document.getElementById("precios")
filtrarPrecio.addEventListener("change",()=>{
  if (filtrarPrecio.value == 1) {
    stockServicios.sort((a,b)=> a.precio - b.precio)
    filtrarServicios(stockServicios)
  }else{
    stockServicios.sort((a,b)=>b.precio - a.precio)
    filtrarServicios(stockServicios)
  }
})