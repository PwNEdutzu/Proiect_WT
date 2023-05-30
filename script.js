
var circle = document.getElementById("circle");
var arrowUp = document.getElementById("arrowUp");
var arrowDown = document.getElementById("arrowDown");

var rotateValue = circle.style.transform;
var rotateSum;

arrowUp.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}
arrowDown.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}

// Display connected user
if (sessionStorage.getItem('login')) {
  document.querySelector('#username').textContent = 'Username: ' + sessionStorage.getItem("login")
}

// Check if user is authenticated, if not redirect to home page