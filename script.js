const user = document.getElementById("UserName");
const pass = document.getElementById("Password");
const registerButton = document.getElementById("Register");
const loginButton = document.getElementById("Login");
const forgotPasswordButton = document.getElementById("ForgotPassword");

forgotPasswordButton.style.display = "none";

registerButton.addEventListener("click", function () {
  if (user.value === "" || pass.value === "") {
    alert("Please fill in both fields before registering.");
    return;
  }
  localStorage.setItem("username", user.value);
  localStorage.setItem("password", pass.value);
  alert("Registration successful!");
});

loginButton.addEventListener("click", function () {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (user.value === "" || pass.value === "") {
    alert("Please enter your username and password.");
    return;
  }
``
  if (user.value === storedUsername && pass.value === storedPassword) {
    alert("Login successful!");
    forgotPasswordButton.style.display = "none";
  } else {
    alert("Invalid username or password.");
    forgotPasswordButton.style.display = "inline-block";
  }
});

forgotPasswordButton.addEventListener("click", function () {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  user.value = "";
  pass.value = "";
  user.placeholder = "Enter new username";
  pass.placeholder = "Enter new password";
  alert(
    "Please enter a new username and password to register again."
  );

  forgotPasswordButton.style.display = "none";
});
