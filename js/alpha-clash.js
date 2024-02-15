function handleKeyBoardButtonPress(event) {
  const playerPressed = event.key;
  // key player is expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  // check right or wrong key press
  if (playerPressed === expectedAlphabet) {
    // update score
    // 1. get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    // 2. increase the score by 1
    const newScore = currentScore + 1;
    // 3. show the update score
    currentScoreElement.innerText = newScore;
    // start a new. round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // console.log("You missed. you lost a life");
    // 1. get the current life number
    const currentLifeEl = document.getElementById("current-life");
    const currentText = currentLifeEl.innerText;
    const currentLife = parseInt(currentText);
    // 2. reduce the life count
    const newLife = currentLife - 1;
    // 3. display the update life count
    currentLifeEl.innerText = newLife;
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
