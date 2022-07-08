import booking from "./view/booking.js";
import room from "./view/room.js";
import customer from "./view/customer.js";
import dashboard from "./view/dashboard.js";
import service from "./view/service.js";
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
