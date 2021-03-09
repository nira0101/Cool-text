"use strict";
window.addEventListener("DOMContentLoaded", init);
let textSplit;

function init() {
  /* console.log(init); */
  let theText = document.querySelector("#cool-text");
  console.log(theText);
  //split the text
  textSplit = theText.textContent.split("");
  console.log(textSplit);

  //remove the original text
  theText.textContent = "";

  //create a span element for each characers and put them inside the span
  textSplit.forEach((letter, index) => {
    const span = document.createElement("span");
    console.log(span);

    span.classList.add("text-animation");
    span.style.setProperty("--letter", index);

    if (letter === " ") {
      span.innerHTML = "&nbsp";
    } else {
      span.innerHTML = letter;
    }
    theText.append(span);
  });
}
