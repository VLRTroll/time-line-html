function openModal(date) {
  const win = window.top;
  win.modal.style.display = "block";
  win.modal.classList.add(`t${date.replace(/\//g, "_")}`);

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

  audio.onended = () => {
    setTimeout(() => {
      win.handleCloseModal();
    }, 500);
  };
}
