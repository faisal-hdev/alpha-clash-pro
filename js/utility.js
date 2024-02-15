function hideElementById(elementId) {
  const homeSection = document.getElementById(elementId);
  homeSection.classList.add("hidden");
}

function showElementById(elementId) {
  const playgroundSection = document.getElementById(elementId);
  playgroundSection.classList.remove("hidden");
}

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}

function setBackgroundColorById(elementId) {
  //   console.log(elementId);
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

// function getRandomAlphabet() {
//   // get or create an alphabet array
//   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   const alphabets = alphabetString.split("");
//   //   console.log(alphabets);

//   // get a random index between 0-25
//   const randomNumber = Math.random() * 25;
//   const index = Math.round(randomNumber);

//   const alphabet = alphabets[index];
//   //   console.log(index, alphabet);
//   return alphabet;
// }
