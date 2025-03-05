import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 
  
  let who = ['mi pajaro','el alien','el agujero negro','mi dinosaurio'];
let what = ['destruyo','se llevo','robo','se comio'];
let when = ['antes de llegar a la luna','cuando estaba estacionando','cuando estaba comiendo','mientras dormia','cuando estaba en la cocina'];

let whoRandom = Math.floor(Math.random() * who.length)
let whatRandom = Math.floor(Math.random() * what.length)
let whenRandom = Math.floor(Math.random() * when.length)

document.querySelector("#excuse").innerHTML = who[whoRandom] + " " + what[whatRandom] +  " " + when[whenRandom]
  console.log("Hello Rigo from the console!");
};
