/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Información aleatoria
  const simbolos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Función para generar una carta aleatoria
  function generarCarta() {
    const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
    const numero = numeros[Math.floor(Math.random() * numeros.length)];

    // Actualizamos el DOM
    document.querySelector(".topCard").textContent = simbolo;
    document.querySelector(".num").textContent = numero;
    document.querySelector(".bottomCard").textContent = simbolo;

    // Cambiamos el color según el símbolo
    if (simbolo === "♥" || simbolo === "♦") {
      document.querySelector("#Carta").style.color = "red";
    } else {
      document.querySelector("#Carta").style.color = "black";
    }
  }

  // Generar carta al cargar la página
  generarCarta();

  // Evento de clic para generar una nueva carta
  document.querySelector(".btn-generar").addEventListener("click", () => {
    generarCarta();
  });

  //Coso del temporizador cada 10 segundos
  setInterval(() => {
    generarCarta();
  }, 10000);
};
