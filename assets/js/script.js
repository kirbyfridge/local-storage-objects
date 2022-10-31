var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var signupInfo = {
    firstNameInput: firstNameInput.textContent,
    lastNameInput: lastNameInput.textContent,
    emailInput: emailInput.textContent,
    passwordInput: passwordInput.textContent,
  }

  // TODO: Set new submission to local storage 
  localStorage.setItem("signupInfo", JSON.stringify(signupInfo));
  
});
