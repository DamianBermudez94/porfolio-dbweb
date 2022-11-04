function menu() {
  // Animacion del menu
  let btnMenu = document.querySelector("#btn-menu");
  let menu = document.querySelector(".menu");

  let listMenu = document.querySelector(".list");
  let activador = true;

  btnMenu.addEventListener("click", function () {
    document.querySelector("#btn-menu i").classList.toggle("fa-times");

    if (activador) {
      menu.style.left = "0";
      menu.style.transition = "0.6s";
      activador = false;
    } else {
      activador = false;
      menu.style.left = "-100%";
      menu.style.transition = "0.6s";
      activador = true;
    }
  });

  const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");

        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

        if (entry.isIntersecting) {
          document.querySelector(".menu a.active").classList.remove("active");
          console.log("soy la entry", entry);
          menuLink.classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      document.querySelector("#btn-menu i").classList.toggle("fa-times");

      if (activador) {
        menu.style.left = "0";
        menu.style.transition = "0.6s";
        activador = false;
      } else {
        activador = false;
        menu.style.left = "-100%";
        menu.style.transition = "0.6s";
        activador = true;
      }

      //listMenu.classList.remove("menu_opened");
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });

  const btnSwitch = document.querySelector("#switch");
  btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    //Guardamos el modo en localStorage
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "flase");
    }
  });
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
  } else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
  }
}

// Efecto Scroll
function scrolTop() {
  let containerMenu = document.querySelector(".menu-container");

  let goTop = document.querySelector(".go-top");
  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    let currenScrolPos = window.pageYOffset;
    // Mostrar y ocultar menu
    if (prevScrollPos > currenScrolPos) {
      containerMenu.style.top = "0";
      containerMenu.style.transition = "0.5s";
    } else {
      containerMenu.style.top = "-140px";
      containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrolPos;

    // Mostrar y ocultar estilos del menu

    let arriba = window.pageYOffset;

    if (arriba <= 600) {
      containerMenu.style.borderBottom = "none";
      containerMenu.style.boxShadow = "none";
      goTop.style.right = "-100%";
    } else {
      containerMenu.style.borderBottom = "3px solid #ff2e63";
      containerMenu.style.boxShadow = "5px 0 25px rgb(0 ,0 ,0 , 0.6)";
      goTop.style.right = "0";
      goTop.style.transition = "0.6s";
    }
  };

  // Boton de arriba y abajo

  goTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  let verAbajo = document.querySelector("#abajo");
  verAbajo.addEventListener("click", () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
  });
}

// Slider-Proyects
function slider() {
  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  console.log("Holis", sliderSection);

  const btnRight = document.querySelector("#btn-right");
  const btnLeft = document.querySelector("#btn-left");

  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  function nextRight() {
    let sliderSectionFirts = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "0";
    slider.style.transition = "0.8s ease-in-out";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirts);
      slider.style.marginLeft = "-100%";
    }, 500);
  }
  function Prev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 2];
    console.log("Soy la img", sliderSectionLast);
    slider.style.marginLeft = "0";
    slider.style.transition = "0.8s ease-in-out";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }
  btnLeft.addEventListener("click", function () {
    Prev();
  });

  btnRight.addEventListener("click", function () {
    nextRight();
  });
}
function enviarFormulario() {
  const form = document.querySelector("#formulario");
  const buttonEnviar = document.querySelector("#enviar-mail");
  form.addEventListener("submit", handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    buttonEnviar.setAttribute(
      "href",
      `mailto:bermudezdamian7@gmail.com?subject= Nombre:${form.get(
        "nombre"
      )}Email:${form.get("correo")} Telefono:${form.get(
        "telefono"
      )}&body=${form.get("mensaje")} `
    );
    console.log(buttonEnviar);
    buttonEnviar.click();
  }
}

function main() {
  menu();
  enviarFormulario();
  scrolTop();
  slider();
}
main();
