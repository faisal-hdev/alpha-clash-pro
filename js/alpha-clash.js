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
    const currentScore = getTextElValueById("current-score");
    // // 2. increase the score by 1
    const newScore = currentScore + 1;
    // // 3. show the update score
    setTextValueById("current-score", newScore);
    // start a new. round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // console.log("You missed. you lost a life");
    // 1. get the current life number
    // const currentLifeEl = document.getElementById("current-life");
    // const currentText = currentLifeEl.innerText;
    // const currentLife = parseInt(currentText);
    const currentLife = getTextElValueById("current-life");
    // // 2. reduce the life count
    // const newLife = currentLife - 1;
    const updatedLife = currentLife - 1;
    // // 3. display the update life count
    // currentLifeEl.innerText = newLife;
    setTextValueById("current-life", updatedLife);
    if (updatedLife === 0) {
      gameOver();
    }
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
  // hide everything show only the playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // reset score only life
  setTextValueById("current-life", 5);
  setTextValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  //   hideElementById("final-score");
}
