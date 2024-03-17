const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky",  window.scrollY > 0);
});


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0"
}
function closemenu() {
    sidemenu.style.right = "-200px"
}
