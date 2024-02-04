const backgroundContainer = document.querySelector(".background-container");
const backgroundImages = document.querySelectorAll(".background-images img");
const changeBackgroundButton = document.getElementById("change-background-button");
const backgroundIndex = document.getElementById("background-index");

const backgroundCount = backgroundImages.length;

function changeBackground() {
  const currentIndex = parseInt(backgroundIndex.value);
  const nextIndex = (currentIndex + 1) % backgroundCount;
  backgroundImages[currentIndex].classList.remove("active");
  backgroundImages[nextIndex].classList.add("active");
  backgroundIndex.value = nextIndex;
}

changeBackgroundButton.addEventListener("click", changeBackground);

// Set the initial background
changeBackground();