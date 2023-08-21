const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

//getting the current date creating the instance of the Date class
const today = new Date();
console.log(today);


//arrays of days and the months
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = [
    "January","February","March","April","May","June","July","August",
    "September","October","November","December"
];

//displaying the full date
date.textContent = (today.getDate() < 10 ? "0":"")+today.getDate();         //if the date is single digit it will add one 0 infront of the date
day.textContent = days[today.getDay()];
month.textContent = months[today.getMonth()];
year.textContent = today.getFullYear();