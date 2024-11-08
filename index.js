function onClick(id) {
  if (
    document.getElementById(id).style.display === "none" ||
    document.getElementById(id).style.display === ""
  ) {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}

const slider = document.getElementById("caffeineSlider");
const caffeinePerCup = document.getElementById("caffeinePerCup");
const cupsContainer = document.getElementById("cups");

function updateCups() {
  const caffeineValue = slider.value;
  const numCups = Math.min(Math.ceil(caffeineValue / 90), 6);

  cupsContainer.innerHTML = "";

  for (let i = 0; i < numCups; i++) {
    const cup = document.createElement("div");
    cup.classList.add("cup");
    cupsContainer.appendChild(cup);
  }
}

slider.oninput = function () {
  const caffeineValue = this.value;
  caffeinePerCup.textContent = `${caffeineValue} mg (${Math.ceil(
    caffeineValue / 90
  )} kopper)`;
  updateCups();
};

updateCups();
