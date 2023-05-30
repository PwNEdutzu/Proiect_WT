let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let users = []

  // Get users from users.json
  fetch('./users.json')
    .then((response) => response.json())
    .then((usersJson) => {
        users = usersJson
    });


loginBtn.onclick = function() {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Login";
  signupBtn.classList.add("disable");
  loginBtn.classList.remove("disable");
  // Get Login Fields Text
  let emailField = document.querySelector('#email_field').value
  let passwordField = document.querySelector('#password_field').value

 if (!emailField || !passwordField)
    return

  // Filter users and check if email & password match
   let userExists = users.find((user) => {
      return user.email === emailField && user.password === passwordField
    })

    if (!userExists)
        return alert("Account doesn't exist")

   window.location.href = '/' 

   // Mark user as logged in on session storage(per tab)
   sessionStorage.setItem("login", emailField)
}

  // Get Users from users.json and verify if the account exists
signupBtn.onclick = function(){
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  loginBtn.classList.add("disable");
}