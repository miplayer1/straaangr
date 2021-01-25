// DOM elements ooops
const imageS = document.getElementById("img-straaange");
//const glDescriptions = document.getElementById("gl-descriptions");
const nextBtn = document.getElementById("next");

// functions
const randomize = max => Math.floor(Math.random() * max);

const reset = () => {
  imageS.innerHTML = "";
//  glDescriptions.innerHTML = "";
};

console.log(straaange[randomize(straaange.length)]);

const displayRandomPractice = () => {
  reset();
  const straaangr = straaange[randomize(straaange.length)];
 imageS.innerHTML = `<img class="responsive-img" src="${straaangr}">`;
//  glDescriptions.innerHTML = `${straaange[gloss].description}`;
  // ooops.splice(gloss, 1);
};
displayRandomPractice();
nextBtn.addEventListener("click", displayRandomPractice);
