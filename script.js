// import jsx
import booking from "./view/booking.js";
import room from "./view/room.js";
import customer from "./view/customer.js";
import dashboard from "./view/dashboard.js";
import service from "./view/service.js";
import {
  loginCustomer,
  getCustomer,
  addCustomer,
  getRoom,
  addRoom,
  dashNum,
  getBook,
  addBook,
} from "./utils.js";
// get id of the main div
const main = document.getElementById("main");
const body = document.getElementById("body");
// get id of the navigation link
const bookNav = document.getElementById("booking");
const customerNav = document.getElementById("customer");
const dashboardNav = document.getElementById("dashboard");
const serviceNav = document.getElementById("service");
const roomNav = document.getElementById("room");

// display room view on page load
window.addEventListener("load", async () => {
  loginCustomer();
  getRoom();
  addRoom();
});

// display booking view on click of booking link
bookNav.addEventListener("click", () => {
  main.innerHTML = booking;
  getBook();
  addBook();
  window.history.pushState({}, "", "/booking");
});

// display customer view on click of customer link
customerNav.addEventListener("click", async () => {
  main.innerHTML = customer;
  getCustomer();
  addCustomer();
  window.history.pushState({}, "", "/customer");
});

// display dashboard view on click of dashboard link
dashboardNav.addEventListener("click", () => {
  main.innerHTML = dashboard;
  dashNum();
  window.history.pushState({}, "", "/dashboard");
});

// display service view on click of service link
serviceNav.addEventListener("click", () => {
  main.innerHTML = service;
  window.history.pushState({}, "", "/service");
});

// display room view on click of room link
roomNav.addEventListener("click", () => {
  main.innerHTML = room;
  getRoom();
  addRoom();
  window.history.pushState({}, "", "/room");
});
