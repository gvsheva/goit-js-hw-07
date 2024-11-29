"use strict";

window.onload = function () {
  const input = document.querySelector("input#name-input");
  const output = document.querySelector("span#name-output");

  const getText = () => input.value.trim() || "Anonymous";

  input.addEventListener("input", () => {
    output.textContent = getText();
  });
};
