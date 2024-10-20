const showPopupButtons = document.querySelectorAll(".showPopupButton");
const closePopupButton = document.querySelector(".closePopupButton");
const popup = document.querySelector(".popup");
const overlay = document.getElementById("overlay");
// showPopupButton.addEventListener("click", function() {
//   popup.style.display = "block";
//   overlay.style.display = "block";
// });
showPopupButtons.forEach((button) => {
    button.addEventListener("click", function () {
    // Determine which button was clicked and show the popup accordingly
    const trigger = button.getAttribute("data-popup-trigger");
    if (
        trigger === "donate" ||
        trigger === "cover-page" ||
        trigger === "navbar"
    ) {
        popup.style.display = "block";
        overlay.style.display = "block";
    }
    });
});

closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const close = document.querySelectorAll(".navclose");
document.getElementById("openMenu").addEventListener("click", function () {
    document.getElementById("menuContainer").style.display = "flex";
});

document.getElementById("closeMenu").addEventListener("click", function () {
    document.getElementById("menuContainer").style.display = "none";
});
document.querySelectorAll(".close").addEventListener("click", function () {
    document.getElementById("menuContainer").style.display = "none";
});

function handleClose() {
    document.getElementById("menuContainer").style.display = "none";
}