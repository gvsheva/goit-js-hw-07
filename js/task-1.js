"use strict";

window.onload = function () {
  const items = document.querySelectorAll("ul#categories > .item");
  console.log(`Number of categories: ${items.length}`);
  items.forEach((item) => {
    const h2 = item.querySelector("h2");
    const ul = item.querySelectorAll("ul > li");
    console.log(`Category: ${h2.textContent}`);
    console.log(`Elements: ${ul.length}`);
  });
};
