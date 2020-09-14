/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector("#the-card").innerHTML = generateCard();
};

let generateCard = () => {
  let suite = ["diamond", "club", "spade", "heart"];
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

  let suiteIndex = Math.floor(Math.random() * suite.length);
  let numIndex = Math.floor(Math.random() * num.length);

  let card = document.querySelector(".card");
  card.classList.add(suite[suiteIndex]);

  return num[numIndex];
};

//
//
//

//next steps -- a button that says pick a card any card
//next steps -- making ace a symbol and not word ace
//next steps -- images for jack queen king!!
