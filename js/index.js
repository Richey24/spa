const container = document.querySelector(".main_content");
const allSidebars = document.querySelectorAll(".navigation > ul > li");
console.log("allSidebars", allSidebars);
// const urlParams = new URLSearchParams(location.search);
// const url = new URL(window.location);
// url.searchParams.set('foo', 'bar');
window.history.pushState({}, "", "/dashboard");

allSidebars.forEach((sidebar) => {
  sidebar.onclick = () => {
    const page = sidebar.getAttribute("page");
    window.history.pushState({}, "", page);
    getPage();
  };
});
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

const getPage = () => {
  const page = location.pathname;
  switch (page) {
    case "/dashboard":
      container.setAttribute("w3-include-html", "/dashboard/index.html");
      includeHTML();
      break;
    case "/index":
      container.setAttribute("w3-include-html", "/index/index.html");
      includeHTML();
      break;
    case "/customers":
      container.setAttribute("w3-include-html", "/customers/index.html");
      includeHTML();
      break;
    case "/service":
      container.setAttribute("w3-include-html", "/services/index.html");
      includeHTML();
      break;
    case "/bookings":
      container.setAttribute("w3-include-html", "/Booking/index.html");
      includeHTML();
      break;
    case "/service-view":
      container.setAttribute("w3-include-html", "/index/index.html");
      includeHTML();
      break;
    default:
      container.innerHTML = "page does not exist";
  }
};
getPage();
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "okay";
  return "confirmationMessage"; //Webkit, Safari, Chrome
});
