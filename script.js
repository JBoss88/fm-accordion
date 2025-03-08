"use strict";

const container = document.querySelector(".contain");

container.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn");
  let num;
  num = clicked.dataset.num;

  let hidden = document.querySelector(`.hidden--${num}`);
  hidden.style.display = hidden.style.display === "block" ? "none" : "block";
  console.log(num);

  if (!clicked) return;
  if (clicked.src.includes("icon-minus.svg")) {
    clicked.src = "images/icon-plus.svg";
  } else {
    clicked.src = "images/icon-minus.svg";
  }
});
