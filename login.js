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
    "https://hotel-backend.azurewebsites.net/user/login",
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
  }
  console.log(user);
});
