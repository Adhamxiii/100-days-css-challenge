"use strict";

const time = document.querySelector(".time");
const date = document.querySelector(".date");

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthNames = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const day = now.getDate();
  const dayOfWeek = dayNames[now.getDay()];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  time.textContent = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  date.textContent = `${dayOfWeek} ${day} ${month} ${year}`;
}, 1000);
