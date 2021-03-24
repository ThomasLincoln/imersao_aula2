var captura = "";
var resposta = "";
var img = document.getElementById("imagem");

function capturaResposta() {
  captura = document.getElementById("inputzada").value;
  resposta = captura;
}

function brilho() {
  document.getElementById("imagem").style.filter = "brightness(1)";
}

function mostra() {
  capturaResposta();
  if (resposta == "rafachu") {
    alert("parabéns, você desbloqueou a skin rara da Rafa, a rafachu!");
    brilho();
  } else {
    alert("Você errou, continue tentando!");
  }
}
