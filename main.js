import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDiveceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilter from "./filtro-busquedas.js";
import getGeolacation from "./geolocalizacion.js";
import speechWrite from "./escritor.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import darkTheme from "./modo_oscuro.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { alarm, digitalClock } from "./reloj.js";
import scrollSpy from "./scroll-espia.js";
import draw from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";
import contactFormValidation from "./validaciones_formulario.js";
import smartVideo from "./video-inteligente.js";

 

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu .ul .a");
  digitalClock(".reloj", "#btn-iniciar_reloj", "#btn-detener_reloj");
  alarm("assets/alarma.mp3", "#btn-iniciar_alarma", "#btn-detener_alarma");
  countdown("countdown","Oct 28, 2022 00:00:00","Feliz Cumpleaños Christian 🤩!")
//   countdown("countdown2","Aug 10, 2022 00:02:00","Feliz Cumpleaños Julieth 🤩!")
  scrollTopButton(".scroll-top-btn");
  responsiveMedia("youtube","(min-width: 1024px)",`            <a href="https://youtu.be/dYB1UlGGmfk" target="_blank" rel="noopener">Ver Video Youtube</a>
  `,`<iframe width="560" height="315" src="https://www.youtube.com/embed/dYB1UlGGmfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia("gmaps","(min-width: 1024px)",`            <a href="https://goo.gl/maps/jzGyxTf6EU7tGE5i7" target="_blank" rel="noopener">Ver Mapa</a>
  `,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9639915950493!2d-77.03273448578776!3d-12.045998545164537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d5aa7eb1%3A0x16061e0b481e22aa!2sPlaza%20Mayor%20de%20Lima!5e0!3m2!1ses-419!2spe!4v1657073437264!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
  responsiveTester("responsive-tester");
  userDiveceInfo("user-divice");
  webCam("webcam");
  getGeolacation("geolocation");
  searchFilter(".card-filter",".card");
  draw("#winner-btn",".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
});

//"keydown" inmediatamente, "keyup" al soltar la tecla, "keypress" mientras este presionada la tecla

d.addEventListener("keydown", (e) =>{
  shortcuts(e);
  moveBall(e,".ball",".stage");
})

// para que no haya interferencia con el llamando al DOMContentLoad de modo_oscuro.js

darkTheme(".dark-theme-btn", "dark-mode");  
networkStatus();
speechReader();
speechWrite();
