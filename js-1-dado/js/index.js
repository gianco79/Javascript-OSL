var dado = document.getElementById('dado');

function lanzar() {
  var numero = Math.random() *5 +1;
  var numero = Math.floor(Math.random() *6 )+1
  dado.innerHTML = numero;
}