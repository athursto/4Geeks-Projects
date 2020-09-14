/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
/*
window.onload = () => {
  document.querySelector("#the-domain").innerHTML = generateDomain();
};

let generateDomain = () => {
  let pronoun = ["the", "best", "our"];
  let adj = ["happy", "new", "shiny"];
  let noun = ["pizza", "apartment", "style"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);

  return "www." + pronoun[proIndex] + adj[adjIndex] + noun[nounIndex] + ".io";
};

console.log(generateDomain());
*/

window.onload = function() {
  let pronoun = ["the", "best", "our"];
  let adj = ["happy", "new", "shiny"];
  let noun = ["pizza", "apartment", "style"];

  let emptyArray = [];
  for (let i in pronoun)
    for (let b in adj)
      for (let c in noun)
        emptyArray.push(pronoun[i] + adj[b] + noun[c] + ".io");

  console.log(emptyArray);
  document.querySelector("#the-domain").innerHTML = emptyArray;
};
