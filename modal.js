function openModal(date) {
  const win = window.top;
  win.modal.style.display = "block";

  const manisfest = win.manifests[date];
  const p = win.document.querySelector("#myModal p");

  manisfest.photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo;

    p.appendChild(img);
  });

  const audio = new Audio(manisfest.audio);
  win.audio = audio;
  audio.play();
}
