// right now this doesn't work. why?

//import "../style/index.scss";
//import { HotModuleReplacementPlugin } from "webpack";

window.onload = () => {
  document.querySelector('#the-excuse').innerHTML = generateExcuse();
  } 

let generateExcuse = () => {

    let pronoun = ['My', 'Our'];
    let subject = ['dog', 'girlfriend', 'grandma', 'car', 'wifi', 'books'];
    let action = ['exploded', 'disappeared', 'evaporated', 'spilled'];
    let possession= ['my homework','my computer', 'my face', 'my coffee'];

    let proIndex=Math.floor(Math.random()*pronoun.length);
    let subIndex=Math.floor(Math.random()*subject.length);
  let actIndex=Math.floor(Math.random()*action.length);
let posIndex=Math.floor(Math.random()*possession.length);


  return pronoun[proIndex]+ ' '+ subject[subIndex] + ' ' +  
  action[actIndex]+' ' + possession[posIndex]+ ' !';
};


    //
   // 
   // 