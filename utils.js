import login from "./view/log.js";
import room from "./view/room.js";

const getCustomer = async () => {
  const table = document.getElementById("cusTable");
  const customers = await fetch(
    "https://dreamtechhotel.herokuapp.com/user/get/all"
  );
  const users = await customers.json();
  const filterUsers = users.user.filter((user) => user.role === "Customer");
  filterUsers.forEach((user, i) => {
    const tr = document.createElement("tr");
    const username = document.createElement("td");
    const phone = document.createElement("td");
    const id = document.createElement("td");
    const email = document.createElement("td");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.className = "deleteButton";
    button.addEventListener("click", async () => {
      await fetch(
        `https://dreamtechhotel.herokuapp.com/user/delete/${user._id}`,
        { method: "DELETE" }
      );
      table.innerHTML = "";
      getCustomer();
    });
    username.innerHTML = user.name;
    phone.innerHTML = user.phone;
    email.innerHTML = user.email;
    id.innerHTML = i + 1;
    tr.appendChild(id);
    tr.appendChild(username);
    tr.appendChild(email);
    tr.appendChild(phone);
    tr.appendChild(button);
    table.appendChild(tr);
  });
};

const addCustomer = async () => {
  const cusForm = document.getElementById("cusForm");
  const table = document.getElementById("cusTable");
  cusForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const info = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      gender: event.target.gender.value,
      email: event.target.email.value,
      password: event.target.password.value,
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
      table.innerHTML = "";
      console.log("successful");
      getCustomer();
      event.target.name.value = "";
      event.target.phone.value = "";
      event.target.gender.value = "";
      event.target.email.value = "";
      event.target.password.value = "";
      event.target.address.value = "";
    }
  });
};

const loginCustomer = async () => {
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
        email: event.target.username.value,
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
      } else if (user.role !== "Employee") {
        errorMessage.innerHTML =
          "You are unauthorised to login to the admin page";
      } else {
        document.cookie = `id=${user._id}`;
        window.location.reload();
      }
    });
  }
};

const getRoom = async () => {
  const table = document.getElementById("cusTable");
  const result = await fetch(
    "https://dreamtechhotel.herokuapp.com/room/get/all"
  );
  const rooms = await result.json();
  rooms.rooms.forEach((room) => {
    const tr = document.createElement("tr");
    const rNum = document.createElement("td");
    const type = document.createElement("td");
    const status = document.createElement("td");
    const price = document.createElement("td");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.className = "deleteButton";
    button.addEventListener("click", async () => {
      await fetch(
        `https://dreamtechhotel.herokuapp.com/room/delete/${room._id}`,
        { method: "DELETE" }
      );
      table.innerHTML = "";
      getRoom();
    });
    rNum.innerHTML = room.roomNum;
    type.innerHTML = room.category;
    status.innerHTML = room.isAvailable ? "Available" : "Booked";
    price.innerHTML = room.price;
    tr.appendChild(rNum);
    tr.appendChild(type);
    tr.appendChild(status);
    tr.appendChild(price);
    tr.appendChild(button);
    table.appendChild(tr);
  });
};

const addRoom = async () => {
  const table = document.getElementById("cusTable");
  const roomForm = document.getElementById("roomForm");
  roomForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const info = {
      roomNum: event.target.roomNum.value,
      isAvailable: true,
      price: event.target.price.value,
      category: event.target.category.value,
    };
    console.log(info);
    const res = await fetch(
      "https://dreamtechhotel.herokuapp.com/room/create",
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (res.status === 200) {
      console.log("created");
      table.innerHTML = "";
      getRoom();
      event.target.roomNum.value = "";
      event.target.price.value = "";
    }
  });
};

const dashNum = async () => {
  const dashCus = document.getElementById("dashCus");
  const dashRoom = document.getElementById("dashRoom");
  const dashRoomA = document.getElementById("dashRoomA");
  const dashRoomB = document.getElementById("dashRoomB");
  const dashPercent = document.getElementById("dashPercent");
  const dashRev = document.getElementById("dashRev");
  let totalRev = 0;
  const result = await fetch(
    "https://dreamtechhotel.herokuapp.com/room/get/all"
  );
  const rooms = await result.json();
  const customers = await fetch(
    "https://dreamtechhotel.herokuapp.com/user/get/all"
  );
  const users = await customers.json();
  const bookRes = await fetch(
    "https://dreamtechhotel.herokuapp.com/book/get/all"
  );
  const bookings = await bookRes.json();
  bookings.room.forEach((booking) => {
    totalRev += parseInt(booking.cost);
  });
  dashCus.append(
    " " + users.user.filter((user) => user.role === "Customer").length
  );
  dashRoom.append(" " + rooms.rooms.length);
  dashRoomA.append(
    " " + rooms.rooms.filter((room) => room.isAvailable === true).length
  );
  dashRoomB.append(
    " " + rooms.rooms.filter((room) => room.isAvailable === false).length
  );
  dashPercent.append(
    " " +
      (rooms.rooms.filter((room) => room.isAvailable === false).length /
        rooms.rooms.length) *
        100 +
      "%"
  );
  dashRev.append(" " + totalRev);
};

const getBook = async () => {
  const table = document.getElementById("cusTable");
  const roomNum = document.getElementById("roomNum");
  const roomResult = await fetch(
    "https://dreamtechhotel.herokuapp.com/room/get/all"
  );
  const rooms = await roomResult.json();
  rooms.rooms
    .filter((room) => room.isAvailable === true)
    .forEach((room) => {
      const option = document.createElement("option");
      option.value = room.roomNum;
      option.innerHTML = room.roomNum;
      roomNum.appendChild(option);
    });
  const result = await fetch(
    "https://dreamtechhotel.herokuapp.com/book/get/all"
  );
  const bookings = await result.json();
  bookings.room.forEach((booking) => {
    const tr = document.createElement("tr");
    const roomNum = document.createElement("td");
    const cusName = document.createElement("td");
    const cInDate = document.createElement("td");
    const cOutDate = document.createElement("td");
    const cost = document.createElement("td");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.className = "deleteButton";
    button.addEventListener("click", async () => {
      await fetch(
        `https://dreamtechhotel.herokuapp.com/book/remove/${booking._id}`,
        { method: "DELETE" }
      );
      table.innerHTML = "";
      getBook();
    });
    roomNum.innerHTML = booking.roomNum;
    cusName.innerHTML = booking.cusId;
    cInDate.innerHTML = new Date(booking.checkInDate).toLocaleDateString();
    cOutDate.innerHTML = new Date(booking.checkOutDate).toLocaleDateString();
    cost.innerHTML = booking.cost;
    tr.appendChild(roomNum);
    tr.appendChild(cusName);
    tr.appendChild(cInDate);
    tr.appendChild(cOutDate);
    tr.appendChild(cost);
    tr.appendChild(button);
    table.appendChild(tr);
  });
};

const addBook = async () => {
  const table = document.getElementById("cusTable");
  const bookForm = document.getElementById("bookForm");
  bookForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const info = {
      roomNum: event.target.roomNum.value,
      cusId: event.target.cusName.value,
      checkInDate: event.target.checkInDate.value,
      checkOutDate: event.target.checkOutDate.value,
      cost: event.target.cost.value,
    };
    console.log(info);
    const res = await fetch(
      "https://dreamtechhotel.herokuapp.com/book/create",
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (res.status === 200) {
      console.log("created");
      table.innerHTML = "";
      getBook();
      event.target.roomNum.value = "";
      event.target.cusName.value = "";
      event.target.checkInDate.value = "";
      event.target.checkOutDate.value = "";
      event.target.cost.value = "";
    }
  });
};

const getService = async () => {
  const table = document.getElementById("cusTable");
  const bookNum = document.getElementById("bookNum");
  const bookRes = await fetch(
    "https://dreamtechhotel.herokuapp.com/book/get/all"
  );
  const bookings = await bookRes.json();
  bookings.room.forEach((booking) => {
    const option = document.createElement("option");
    option.value = booking.roomNum;
    option.innerHTML = booking.roomNum;
    bookNum.appendChild(option);
  });
  const res = await fetch(
    "https://dreamtechhotel.herokuapp.com/service/get/all"
  );
  const { requests } = await res.json();
  requests.forEach((request, i) => {
    const sn = document.createElement("td");
    const roomNum = document.createElement("td");
    const type = document.createElement("td");
    const status = document.createElement("td");
    const date = document.createElement("td");
    const tr = document.createElement("tr");
    const update = document.createElement("button");
    update.className = "deleteButton";
    update.innerHTML = "Update";
    update.addEventListener("click", async () => {
      if (request.status === "Complete") {
        return;
      }
      const info = {
        status: request.status === "Pending" ? "In-Progress" : "Complete",
      };
      const res = await fetch(
        `https://dreamtechhotel.herokuapp.com/service/update/${request._id}`,
        {
          method: "PUT",
          body: JSON.stringify(info),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (res.status === 200) {
        table.innerHTML = "";
        getService();
      }
    });
    sn.innerHTML = i + 1;
    roomNum.innerHTML = request.roomNum;
    type.innerHTML = request.description;
    status.innerHTML = request.status;
    date.innerHTML = new Date(request.date).toLocaleDateString();
    tr.appendChild(sn);
    tr.appendChild(roomNum);
    tr.appendChild(type);
    tr.appendChild(status);
    tr.appendChild(date);
    tr.appendChild(update);
    table.appendChild(tr);
  });
};

const addService = async () => {
  const table = document.getElementById("cusTable");
  const serveForm = document.getElementById("serveForm");
  serveForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const info = {
      roomNum: event.target.bookNum.value,
      description: event.target.service.value,
      status: "Pending",
      date: event.target.date.value,
    };
    console.log(info);
    const res = await fetch(
      `https://dreamtechhotel.herokuapp.com/service/create`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (res.status === 200) {
      table.innerHTML = "";
      getService();
    }
  });
};

export {
  getCustomer,
  addCustomer,
  loginCustomer,
  getRoom,
  addRoom,
  dashNum,
  getBook,
  addBook,
  getService,
  addService,
};
