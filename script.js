// Variables
let preguntas = [];
let file;

let question = document.getElementById("question");
let btn = document.getElementById("btn");
let btnMusic = document.getElementById("btn-music");
let imgMusic = document.getElementById("img-music");
let audio = document.getElementById("audio");
let selectType = document.getElementById("select-type");
let body = document.getElementById("body");

// Funciones
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function cargarArray(file) {
  preguntas = [];
  fetch(file)
    .then((res) => res.text())
    .then((content) => {
      let lines = content.split(/\n/);
      lines.forEach((line) => preguntas.push(line));
    });
}

function cambiarFondo(section) {
  switch (section) {
    case "Básicas":
      body.className = "";
      break;

    case "Filosóficas":
      body.className = "";
      body.classList.add("bg-blue");
      break;

    case "Graciosas":
      body.className = "";
      body.classList.add("bg-orange");
      break;

    case "Incómodas":
      body.className = "";
      body.classList.add("bg-purple");
      break;

    case "Interesantes":
      body.className = "";
      body.classList.add("bg-yellow");
      break;

    case "Sexuales":
      body.className = "";
      body.classList.add("bg-red");
      break;

    default:
      body.className = "";
      break;
  }
}

// Botón para lanzar preguntas
btn.addEventListener("click", () => {
  let index = getRandomInt(preguntas.length - 1);
  question.innerHTML = preguntas[index];
});

// Botón para la música
btnMusic.addEventListener("click", () => {
  if (imgMusic.getAttribute("src") === "./images/sound-on.png") {
    localStorage.setItem("muted", true);
    audio.muted = true;
    imgMusic.setAttribute("src", "./images/sound-off.png");
  } else {
    localStorage.setItem("muted", false);
    audio.muted = false;
    audio.autoplay = true;
    imgMusic.setAttribute("src", "./images/sound-on.png");
  }
});

// Selección de tipos de preguntas
window.addEventListener("load", function (event) {
  file = "./questions/Básicas.txt";
  cargarArray(file);
});

selectType.addEventListener("change", () => {
  file = `./questions/${selectType.value}.txt`;
  cargarArray(file);
  cambiarFondo(selectType.value);
  question.innerHTML = "Selecciona el tipo de preguntas y lanza.";
});

// LocalStorage para la música
if (localStorage.getItem("muted") == "true") {
  audio.muted = true;
  imgMusic.setAttribute("src", "./images/sound-off.png");
}
