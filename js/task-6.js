function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

window.onload = function () {
  const boxes = document.querySelector("div#boxes");
  const input = document.querySelector("div#controls > input");
  const create = document.querySelector("div#controls > button[data-create]");
  const destroy = document.querySelector("div#controls > button[data-destroy]");

  const setBoxes = (bs) => {
    boxes.innerHTML = "";
    boxes.append(...bs);
  };

  const createBoxes = (amount) => {
    const bs = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      bs.push(box);
    }
    setBoxes(bs);
  };

  create.addEventListener("click", () => {
    const num = +input.value;
    if (num < 1 || num > 100) {
      return;
    }
    createBoxes(num);
    input.value = "";
  });

  destroy.addEventListener("click", () => {
    setBoxes([]);
  });
};
