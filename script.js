import booking from "./booking.js";
import room from "./room.js";
import customer from "./customer.js";
import dashboard from "./dashboard.js";
import service from "./service.js";
const main = document.getElementById("main");
const bookNav = document.getElementById("booking");
const customerNav = document.getElementById("customer");
const dashboardNav = document.getElementById("dashboard");
const serviceNav = document.getElementById("service");
const roomNav = document.getElementById("room");

window.addEventListener("load", () => {
  main.innerHTML = room;
});

bookNav.addEventListener("click", () => {
  main.innerHTML = booking;
});

customerNav.addEventListener("click", () => {
  main.innerHTML = customer;
});

dashboardNav.addEventListener("click", () => {
  main.innerHTML = dashboard;
});

serviceNav.addEventListener("click", () => {
  main.innerHTML = service;
});

roomNav.addEventListener("click", () => {
  main.innerHTML = room;
});
