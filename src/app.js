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
    //Actualizar el DOM con nombre y ocupación
    document.querySelector(".nombre").textContent = `Nombre: ${perfil.nombre}`; //Busca en clase .nombre y agregale la propiedad nombre
    document.querySelector(
      ".ocupacion"
    ).textContent = `Ocupacion: ${perfil.ocupacion}`; //Busca en clase .ocupación y agregale la propiedad ocupacion
    //Cambiar color de fondo según la ocupación y con ternarios
    const tarjeta = document.querySelector(".tarjeta");
    tarjeta.style.backgroundColor =
      perfil.ocupacion === "Desarrolladora"
        ? "blue"
        : perfil.ocupacion === "Estudiante"
        ? "coral"
        : "pink";
  });
};
