const form = document.querySelector("form");
const emailField = document.querySelector("#email");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = e.target[0].value;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailField.classList.remove("error");
    errorIcon.classList.remove("error");
    console.log(email);
  } else {
    emailField.classList.add("error");
    errorIcon.classList.add("error");
    console.log(email);
  }
});
