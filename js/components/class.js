class Persona {
  constructor(
    id,
    nombre,
    apellido,
    cargo,
    funcion,
    imagen,
    instagram,
    facebook,
    twitter,
    informacion,
    masInformacion
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.cargo = cargo),
      (this.funcion = funcion),
      (this.imagen = imagen),
      (this.instagram = instagram),
      (this.facebook = facebook),
      (this.twitter = twitter),
      (this.informacion = informacion),
      (this.masInformacion = masInformacion);
  }
}

class Producto {
  constructor(id, marca, rubro, nombre, precio, img) {
    (this.id = id),
      (this.marca = marca),
      (this.rubro = rubro),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.img = img);
  }
}
