
  const imagenes = [
    "images/Mardel_centro.jpg",
    "images/bariloche_img.jpg",
    "images/183CC25C-9C75-4F9A-9570-8842F53F1F9B.jpg",
    "images/20170515_105905.jpg",
    "images/20170515_112434.jpg",
    "images/20170515_114959.jpg",
    "images/20170806_171448(1).jpg",
    // agregás más imágenes acá
  ];

  const galeria = document.getElementById("cuadrantes");

  imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "foto";
    img.style.width = "200px";
    img.style.margin = "10px";
    img.style.backgroundColor = "#795548";
    img.style.padding = "2px";
    img.style.borderRadius = "2px";
    img.style.filter= "grayscale(10%) contrast(90%) saturate(190%) sepia(60%)";
    img.addEventListener("click", function() {
      abrirImagen(this.src);
    });
    galeria.appendChild(img);
  });

 function abrirImagen(src) {
    const modal = document.getElementById("modal");
    const imagenModal = document.getElementById("imagen-modal");

    imagenModal.src = src;
    modal.style.display = "block";

    const cerrarModal = document.getElementById("cerrar-modal");
    cerrarModal.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }