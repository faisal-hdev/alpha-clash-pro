// function play() {
//   // hide the home section
//   const homeScreenSection = document.getElementById("home-screen");
//   homeScreenSection.classList.add("hidden");
//   // show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function continueGame() {
  const alphabet = getRandomAlphabet();
  //   console.log("your random alphabet", alphabet);

  // set randomly generate alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
