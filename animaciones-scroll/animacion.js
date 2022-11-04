window.addEventListener("scroll", () => {
  let animacion = document.querySelectorAll(".animacion");
  //let posicionObj = animacion.getBoundingClientRect().top;
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  for (var i = 0; i < animacion.length; i++) {
    let alturaAnimado = animacion[i].offsetTop;
    if (alturaAnimado - 400 < scrollTop) {
      animacion[i].style.opacity = 1;

      animacion[i].classList.add("mostrarArriba");
    }
  }
});

window.addEventListener("scroll", () => {
  //let posicionObj = animacion.getBoundingClientRect().top;

  let animacionIzquierda = document.querySelectorAll(".animacionIzquierda");
  let scrollTopIzquierda = document.documentElement.scrollTop;
  for (var i = 0; i < animacionIzquierda.length; i++) {
    let alturaAnimacion = animacionIzquierda[i].offsetTop;

    if (alturaAnimacion - 400 < scrollTopIzquierda) {
      animacionIzquierda[i].style.opacity = 1;

      animacionIzquierda[i].classList.add("mostrarIzquierda");
    }
  }
});
