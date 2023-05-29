/*
//Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate Data Input
function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    showSuccessMessage();
  }
}

//Clear error and success messages
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

//check if email is valid
function emailIsValid(email) {
  let pattern = /^\w+@\w+\.\w+$/;
  return pattern.test(email);
}

//Show success message
function showSuccessMessage() {
  success.style.display = "block";
}*/