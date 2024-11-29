"use strict";

window.onload = function () {
  const form = document.querySelector("form.login-form");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const vals = {};
    for (const i of form.elements) {
      if (i.nodeName !== "INPUT") continue;
      if (i.value.trim() === "") {
        alert("All form fields must be filled in");
        return;
      }
      vals[i.name] = i.value;
    }
    console.log(vals);
    form.reset();
  });
};
