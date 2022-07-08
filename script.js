const main = document.getElementById("main");
const bookTemp = document.getElementById("bookTemp");
const dashTemp = document.getElementById("dashTemp");
const cusTemp = document.getElementById("cusTemp");
const serveTemp = document.getElementById("serveTemp");
const roomTemp = document.getElementById("roomTemp");
const book = document.getElementById("booking");
const customer = document.getElementById("customer");
const dashboard = document.getElementById("dashboard");
const service = document.getElementById("service");
const room = document.getElementById("room");

window.addEventListener("load", () => {
  main.innerHTML = roomTemp.content.firstElementChild.outerHTML;
});

book.addEventListener("click", () => {
  main.innerHTML = bookTemp.content.firstElementChild.outerHTML;
});

customer.addEventListener("click", () => {
  main.innerHTML = cusTemp.content.firstElementChild.outerHTML;
});

dashboard.addEventListener("click", () => {
  main.innerHTML = dashTemp.content.firstElementChild.outerHTML;
});

service.addEventListener("click", () => {
  main.innerHTML = serveTemp.content.firstElementChild.outerHTML;
});

room.addEventListener("click", () => {
  main.innerHTML = roomTemp.content.firstElementChild.outerHTML;
});
