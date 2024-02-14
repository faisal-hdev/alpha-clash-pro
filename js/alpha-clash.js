// function paly() {
//   // step: 1. Hide the home screen. to hide the screen add the class hidden to the home section
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //   console.log(homeSection.classList);

//   // Step: 2. Show the playGround
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
//   //   console.log(playGroundSection);
// }

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
}
