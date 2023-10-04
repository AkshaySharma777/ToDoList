function currentDateAndTime(){
var dateOutput = document.getElementById("date");
var date = new Date();
const n  = date.toDateString();
const time = date.toLocaleTimeString();
dateOutput.innerHTML = `${n} <br> ${time}`;
let interval = setInterval("currentDateAndTime()", 1000);}
currentDateAndTime();
