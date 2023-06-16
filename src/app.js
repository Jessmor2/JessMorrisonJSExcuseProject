/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomnumber = Math.random() * 10;
  document.querySelector("#Excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console" + randomnumber);
};

let generateExcuse = () => {
  let who = ["My dog", "My grandma", "His turtle", "My bird"];
  let action = [" ate", " peed on", " crushed", " broke", " set fire to"];
  let what = [" my homework", " the keys", " the car"];
  let when = [
    " before the class!",
    " just now!",
    " when I finished!",
    " last night!",
    " during my lunch!",
    " while I was praying!"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    "" +
    action[actIndex] +
    "" +
    what[whatIndex] +
    "" +
    when[whenIndex]
  );
};
