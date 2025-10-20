
const user = document.getElementById("UserName");
const pass = document.getElementById("Password");
const registerButton = document.getElementById("Register");
const loginButton = document.getElementById("Login");
if(user.value===""&&pass.value===""){
  alert("Please register first.");
}
else{
registerButton.addEventListener("click", function () {
  const username = user.value;
  const password = pass.value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Registration successful!");
});

loginButton.addEventListener("click", function () {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  const username = user.value;
  const password = pass.value;

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
});
}