// Obtén el botón
var botonSubir = document.getElementById("subir");

// Mostrar el botón cuando el usuario haya desplazado 20px desde la parte superior de la página
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonSubir.style.display = "block";
  } else {
    botonSubir.style.display = "none";
  }
}

// Cuando el usuario haga clic en el botón, ir hacia arriba en la página
botonSubir.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
