const enlaces = document.getElementsByTagName("a");
console.log("enlaces: ", enlaces.length);

const penultimo = enlaces[enlaces.length - 2].href;
console.log(penultimo);

const third = document.getElementById("third-paragraph");
const numberlinks = document.getElementsByTagName("a").length;
console.log(numberlinks);

//Sin terminar