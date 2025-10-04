// Write your code here!

const mainEl = document.querySelector("main#main");
console.log(mainEl);

mainEl.remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");

newHeader.textContent = "Brian is the champion";

console.log(newHeader);

