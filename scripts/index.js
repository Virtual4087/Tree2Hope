AOS.init();
const showPopupButtons = document.querySelectorAll(".showPopupButton");
const closePopupButton = document.querySelector(".closePopupButton");
const popup = document.querySelector(".popup");
const overlay = document.getElementById("overlay");
const openMenuButton = document.getElementById('openMenu');
const closeMenuButton = document.getElementById('closeMenu');
const menuContainer = document.getElementById('menuContainer');
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

// Handle opening the menu with the hamburger icon
document.getElementById("openMenu").addEventListener("click", function () {
  console.log("Menu toggle clicked");
  document.getElementById("menuContainer").classList.add("open"); // Add 'open' class to slide the menu in
});

// Handle closing the menu with the close button
document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("menuContainer").classList.remove("open"); // Remove 'open' class to slide the menu out
});

// Optional: Handle closing the menu when clicking on any element with the .close class
document.querySelectorAll(".close").forEach((element) => {
  element.addEventListener("click", function () {
    document.getElementById("menuContainer").classList.remove("open");
  });
});


// Function to close the menu (called on anchor tag click)
function handleClose() {
  document.getElementById("menuContainer").classList.remove("open");
}


let mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const nav = document.querySelector("nav");
const whereWePlantSection = document.querySelector(".locations");

let lastScrollTop = 0; // To track the last scroll position

// Function to add/remove dark background
function handleScroll() {
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  const sectionTop = whereWePlantSection.getBoundingClientRect().top;
  const threshold = window.innerHeight * 0.1;

  if (sectionTop <= threshold) {
    nav.classList.add("dark");
  } else {
    nav.classList.remove("dark");
  }

  if (currentScrollTop > lastScrollTop) {
    // User is scrolling down, hide the navbar
    nav.style.top = "-100px"; // Adjust based on navbar height
  } else {
    // User is scrolling up, show the navbar
    nav.style.top = "0";
  }

  lastScrollTop = currentScrollTop;
}

window.addEventListener("scroll", handleScroll);

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Start the fade-out effect after a delay
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 300);

  // Remove the preloader after the fade-out transition
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
});
