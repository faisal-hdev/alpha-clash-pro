// function play() {
//   // hide the home section
//   const homeScreenSection = document.getElementById("home-screen");
//   homeScreenSection.classList.add("hidden");
//   // show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function handleKeyBoardButtonPress(event) {
  const playerPressed = event.key;

  // key player is expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

  // check right or wrong key press
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point");
    console.log("you have pressed correctly", expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You missed. you lost a life");
  }
}

// capture keyboard key press
document.addEventListener("keyup", handleKeyBoardButtonPress);

function continueGame() {
  const alphabet = getRandomAlphabet();

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
