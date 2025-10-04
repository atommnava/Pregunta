// Mensajes que se mostrarán en el botón "No"
var noClickCount = 0;
var noMessages = [
  "En serio?",
  "Y si insisto?",
  "Se me acaban los mensajes...",
  "si?"
];

function selectOption(option) {
  if (option === "yes") {
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none"; // Ocultar pregunta
      displayCatHeart(); // Mostrar imagen

      // Mostrar mensaje con la fuente Sacramento
      displayMessage("Súper!");
    });
  } else if (option === "no") {
    if (noClickCount < noMessages.length) {
      document.getElementById("no-button").innerText = noMessages[noClickCount];
      noClickCount++;
    }

    var yesButton = document.getElementById("yes-button");
    var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue("font-size");
    var newSize = parseFloat(currentFontSize) * 1.5;
    yesButton.style.fontSize = newSize + "px";
  } else {
    alert("Opción inválida.");
  }
}

function flashRainbowColors(callback) {
  var colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"];
  var i = 0;
  var interval = setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200);
  setTimeout(function () {
    clearInterval(interval);
    document.body.style.backgroundColor = "";
    if (callback) callback();
  }, 2000);
}

function displayCat() {
  var imageContainer = document.getElementById("image-container");
  var catImage = new Image();
  catImage.src = "oia-uia.gif";
  catImage.alt = "Cat";
  catImage.onload = function () {
    imageContainer.appendChild(catImage);
  };
}

function displayCatHeart() {
  document.getElementById("image-container").innerHTML = "";
  var imageContainer = document.getElementById("image-container");
  var catHeartImage = new Image();
  catHeartImage.src = "bambi-GIF.gif";
  catHeartImage.alt = "Cat Heart";
  catHeartImage.onload = function () {
    imageContainer.appendChild(catHeartImage);
    document.getElementById("options").style.display = "none";
  };
}

// Nueva función para mostrar el mensaje
function displayMessage(text) {
  var messageContainer = document.createElement("div");
  messageContainer.innerText = text;
  messageContainer.style.fontFamily = "'Sacramento', bold";
  messageContainer.style.fontSize = "50px";
  messageContainer.style.color = "#ff1493";
  messageContainer.style.textAlign = "center";

  // Posicionamiento centrado
  messageContainer.style.position = "absolute";
  messageContainer.style.top = "75%";
  messageContainer.style.left = "50%";
  messageContainer.style.transform = "translate(-50%, -50%)";


  document.body.appendChild(messageContainer);
}

// Asegurar que la función selectOption está disponible en el HTML
window.selectOption = selectOption;

displayCat();