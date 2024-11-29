"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

window.onload = function () {
  const button = document.querySelector("button.change-color");
  const body = document.querySelector("body");
  const span = document.querySelector("span.color");

  button.addEventListener("click", () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    span.textContent = `${color} (${body.style.backgroundColor})`;
  });
};
