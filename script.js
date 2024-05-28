let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector(".list .item.active");
  if (itemOld) {
    itemOld.classList.remove("active");
  }
  items[active].classList.add("active");
}

prevButton.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  setSlider();
};

nextButton.onclick = () => {
  active = active + 1 > lastPosition ? firstPosition : active + 1;
  setSlider();
};

// Ensure the initial active item is set
setSlider();
