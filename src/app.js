/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  //Array de perfiles con nombres y ocupaciones
  const perfiles = [
    { nombre: "Ana", ocupacion: "Maestra" },
    { nombre: "Carlos", ocupacion: "Diseñador" },
    { nombre: "Miguel", ocupacion: "Estudiante" },
    { nombre: "Maria", ocupacion: "Desarrolladora" }
  ];
  //Evento de clic para generar un perfil aleatorio. Cuando escuche clic haga esto.
  document.querySelector(".btn-generar").addEventListener("click", () => {
    const perfil = perfiles[Math.floor(Math.random() * perfiles.length)]; //Entra a perfiles, toma un valor y que le genere uno de lo 4.
  });
};
