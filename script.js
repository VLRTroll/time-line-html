// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

const handleCloseModal = () => {
  modal.style.display = "none";

  window.audio.pause();
  window.audio.currentTime = 0;

  const p = document.querySelector("#myModal p");
  p.innerText = "";
};
window.handleCloseModal = handleCloseModal;

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = handleCloseModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    handleCloseModal();
  }
};

window.manifests = {
  "13/08/2019": {
    audio: "../manifest/13A_AGOSTO_2019/13a.mp3",
    photos: [
      "assets/manifest/13A_AGOSTO_2019/Foto 03.jpg",
      "assets/manifest/13A_AGOSTO_2019/Foto 02.jpg",
      "assets/manifest/13A_AGOSTO_2019/Foto 01.jpg",
    ],
  },
  "15/05/2019": {
    audio: "../manifest/15M_MAIO_2019/15m.mp3",
    photos: [
      "assets/manifest/15M_MAIO_2019/Foto 03.jpg",
      "assets/manifest/15M_MAIO_2019/Foto 02.jpg",
      "assets/manifest/15M_MAIO_2019/Foto 01.jpg",
    ],
  },
  "30/05/2019": {
    audio: "../manifest/30M_MAIO_2019/30m.mp3",
    photos: [
      "assets/manifest/30M_MAIO_2019/Foto 03.jpg",
      "assets/manifest/30M_MAIO_2019/Foto 02.jpg",
      "assets/manifest/30M_MAIO_2019/Foto 01.jpg",
    ],
  },
  "01/10/2019": {
    audio: "../manifest/GREVE GERAL_OUTUBRO_2019/01o.mp3",
    photos: [
      "assets/manifest/GREVE GERAL_OUTUBRO_2019/Foto 03.jpg",
      "assets/manifest/GREVE GERAL_OUTUBRO_2019/Foto 02.jpg",
      "assets/manifest/GREVE GERAL_OUTUBRO_2019/Foto 01.jpg",
    ],
  },
  "18/03/2020": {
    audio: "../manifest/18M_MARÇO_2020/18m.mp3",
    photos: [
      "assets/manifest/18M_MARÇO_2020/Foto 02.jpg",
      "assets/manifest/18M_MARÇO_2020/Foto 01.jpg",
    ],
  },
};

/* - - - - - - - FILTRAGEM DE MESES  - - - - - - - - */

const objects = document.querySelectorAll("object");
const scopeSelect = document.querySelector("#scope-select select");
const yearSelect = document.querySelector("#year-select select");

const handleFilterUpdate = () => {
  const scope = scopeSelect.value;
  const year = yearSelect.value;

  Array.from(objects).forEach((obj) => {
    obj.style.display =
      obj.classList.contains(scope) && obj.classList.contains(year)
        ? "block"
        : "none";
  });
};

scopeSelect.addEventListener("change", handleFilterUpdate);
yearSelect.addEventListener("change", handleFilterUpdate);
handleFilterUpdate();
