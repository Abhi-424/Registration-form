const user = document.getElementById("UserName");
const pass = document.getElementById("Password");
const registerButton = document.getElementById("Register");
const loginButton = document.getElementById("Login");
const forgotPasswordButton = document.getElementById("ForgotPassword");

forgotPasswordButton.style.display = "none";

registerButton.addEventListener("click", function () {
  const username = user.value;
  const password = pass.value;

  if (username === "" || password === "") {
    alert("Please fill in both fields before registering.");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Registration successful!");
});

loginButton.addEventListener("click", function () {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (user.value === "" || pass.value === "") {
    alert("Please enter your username and password.");
    return;
  }

  if (user.value === storedUsername && pass.value === storedPassword) {
    alert("Login successful!");
    forgotPasswordButton.style.display = "none"; // hide again if correct
  } else {
    alert("Invalid username or password.");
    forgotPasswordButton.style.display = "inline-block"; // show forgot password
  }
});

forgotPasswordButton.addEventListener("click", function () {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    alert("Password reset link sent to your email (demo).");
  } else {
    alert("Please register first.");
  }
});
