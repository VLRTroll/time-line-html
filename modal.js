function openModal(date) {
  const win = window.top;
  win.modal.style.display = "block";

  console.log(date);
  const p = win.document.querySelector("#myModal p");
  p.innerText = date;
}
