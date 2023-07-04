let form = document.forms[0];
let emailInput = document.querySelector(".email-input");
let errorEle = document.querySelector(".error");
let emailCheckRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function showErrorMsg(valid) {
  if (!valid) {
    emailInput.value.trim() === ""
      ? (errorEle.innerHTML =
          "Whoops! It looks like you forgot to add your email")
      : (errorEle.innerHTML = "Please provide a valid email address");
  } else {
    errorEle.innerHTML = "";
  }
}

form.addEventListener("submit", (eve) => {
  let valid = emailCheckRegExp.test(emailInput.value.trim());
  showErrorMsg(valid);
  if (!valid) {
    eve.preventDefault();
  }
});
