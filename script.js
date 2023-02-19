var btn = document.getElementById("btn");
var darkMode = document.getElementById("darkMode")
var textDark = document.getElementById("textDark")
var navDark = document.getElementById("navDark")

function toggleBtn(){
  btn.classList.toggle("active");
  darkMode.classList.toggle("dark")
  textDark.classList.toggle("text-dark")
  navDark.classList.toggle("nav-dark")
}