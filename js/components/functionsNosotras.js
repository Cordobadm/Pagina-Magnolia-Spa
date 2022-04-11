const obtenerPersonas = () => {
  const URLGET = "../js/costants/personas.json";

  $.getJSON(URLGET, (data) => {
    for (const card of data) {
      $("#cardNosotras").append(`
        <div class=" mt-3 col-12 col-md-4">
        <div class="card" id="cardNos">
          <img
          src="${card.imagen}"
          class="card-img-top"
          alt="imagenDra"
          />
        
        <div class="card-body">
          <div class="badges">
            <span class="badge rounded-pill bg-warning text-dark"
              >${card.cargo}</span
            >
            <span class="badge rounded-pill bg-primary">${card.profesion}</span>
          </div>
          <h5 id="name"class="card-title p-2">${card.nombre} ${card.apellido}</h5>
  
          
          <p id="info"class="card-text">
            ${card.informacion}
          </p>
          <button class="btn btn-nosotras btnMostrar">Leer Más</button>
  
          <p id="info" class="masInfo">${card.masInformacion}</p>
          <button class="btn btn-nosotras btnOcultar">Leer Menos</button>
          
          <div id="redesNosotras" class="social text-center">
            <a
              href="${card.instagram}"
              target="_blank"
              ><img src="../img/imgRedes/iconoig.png" alt="instagram"
            /></a>
            <a
              href="${card.facebook}"
              target="_blank"
            >
              <img src="../img/imgRedes/iconoFace.png" alt="facebook"
            /></a>
            <a href="${card.twitter}" target="_blank">
              <img src="../img/imgRedes/iconoTwitter.png" alt="twitter"
            /></a>
          </div>
          
        </div>
      </div>
      </div>`);
    }

    let botones = document.querySelectorAll(".btnMostrar");
    let botonesOcultar = document.querySelectorAll(".btnOcultar");
    let masInfo = document.querySelectorAll(".masInfo");

    

    for (let i = 0; i < botones.length; i++) {
      botones[i].addEventListener("click", function () {
        $(botones[i]).hide();
        $(botonesOcultar[i]).show();
        for (let e = 0; e < botones.length; e++) {
          $(masInfo[i]).slideDown(600);
        }
      });
    }

    for (let i = 0; i < botonesOcultar.length; i++) {
      botonesOcultar[i].addEventListener("click", function () {
        $(botonesOcultar[i]).hide();

        for (let e = 0; e < botones.length; e++) {
          $(masInfo[i]).hide();
          $(botones[i]).show();
        }
      });
    }
  });
};

obtenerPersonas();
