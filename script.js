// import jsx
import booking from "./view/booking.js";
import room from "./view/room.js";
import customer from "./view/customer.js";
import dashboard from "./view/dashboard.js";
import service from "./view/service.js";
import login from "./view/log.js";
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
  const id = document.cookie;
  const userId = id.split("=")[1];
  if (userId) {
    main.innerHTML = room;
    window.history.pushState({}, "", "/room");
  } else {
    body.innerHTML = login;
    window.history.pushState({}, "", "/login");
    const form = document.getElementById("login-form");
    const errorMessage = document.getElementById("errorMessage");
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const info = {
        username: event.target.username.value,
        password: event.target.password.value,
      };
      console.log(info);
      const response = await fetch(
        "https://dreamtechhotel.herokuapp.com/user/login",
        {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const user = await response.json();
      if (response.status === 404) {
        errorMessage.innerHTML = "No user found with this username";
      } else if (response.status === 203) {
        errorMessage.innerHTML = "Incorrect password";
      } else {
        document.cookie = `id=${user._id}`;
        window.location.reload();
      }
    });
  }
});

// display booking view on click of booking link
bookNav.addEventListener("click", () => {
  main.innerHTML = booking;
  window.history.pushState({}, "", "/booking");
});

// display customer view on click of customer link
customerNav.addEventListener("click", async () => {
  main.innerHTML = customer;
  const table = document.getElementById("cusTable");
  const customers = await fetch(
    "https://dreamtechhotel.herokuapp.com/user/get/all"
  );
  const users = await customers.json();
  users.user.forEach((user, i) => {
    const tr = document.createElement("tr");
    const username = document.createElement("td");
    const phone = document.createElement("td");
    const gender = document.createElement("td");
    const address = document.createElement("td");
    const dob = document.createElement("td");
    const id = document.createElement("td");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.className = "deleteButton";
    button.addEventListener("click", async () => {
      await fetch(
        `https://dreamtechhotel.herokuapp.com/user/delete/${user._id}`,
        { method: "DELETE" }
      );
    });
    username.innerHTML = user.name;
    phone.innerHTML = user.phone;
    address.innerHTML = user.address;
    gender.innerHTML = user.gender;
    dob.innerHTML = user.dob;
    id.innerHTML = i + 1;
    tr.appendChild(id);
    tr.appendChild(username);
    tr.appendChild(phone);
    tr.appendChild(gender);
    tr.appendChild(dob);
    tr.appendChild(button);
    table.appendChild(tr);
  });

  const cusForm = document.getElementById("cusForm");
  cusForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const info = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      gender: event.target.gender.value,
      role: "Customer",
      address: event.target.address.value,
      dob: event.target.birthDate.value,
    };
    console.log(info);
    const res = await fetch(
      "https://dreamtechhotel.herokuapp.com/user/register",
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (res.status === 200) {
      console.log("successful");
    }
  });
  window.history.pushState({}, "", "/customer");
});

// display dashboard view on click of dashboard link
dashboardNav.addEventListener("click", () => {
  main.innerHTML = dashboard;
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
  window.history.pushState({}, "", "/room");
});
