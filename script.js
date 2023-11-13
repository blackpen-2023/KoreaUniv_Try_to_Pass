let numb = "비어있음";
let name = "비어있음";
let root = "비어있음";
let cls = "비어있음";
let yr = "비어있음";
let mt = "비어있음";
let dy = "비어있음";

function getData() {
  numb = document.getElementById("numb").value;
  name = document.getElementById("name").value;
  root = document.getElementById("root").value;
  cls = document.getElementById("cls").value;
  yr = document.getElementById("yr").value;
  mt = document.getElementById("mt").value;
  dy = document.getElementById("dy").value;
  location.href = "%08kUniv.html";
}

function setAll() {
  document.querySelector("#alllll").innerHTML = ``;
}
