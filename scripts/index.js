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

  
    document.getElementById("openMenu").addEventListener("click", function () {
      document.getElementById("menuContainer").style.display = "flex";
    });

    document.getElementById("closeMenu").addEventListener("click", function () {
      document.getElementById("menuContainer").style.display = "none";
    });

    // Ensure all elements with the class 'close' close the menu
    document.querySelectorAll(".close").forEach((closeButton) => {
      closeButton.addEventListener("click", function () {
        document.getElementById("menuContainer").style.display = "none";
      });
    });

    function handleClose() {
      document.getElementById("menuContainer").style.display = "none";
    }
    

// functionality of the scroll effect for the navbar
  const nav = document.querySelector('nav');
  const whereWePlantSection = document.querySelector('.locations');

  let lastScrollTop = 0; // To track the last scroll position

  // Function to add/remove dark background
  function handleScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = whereWePlantSection.getBoundingClientRect().top;
    const threshold = window.innerHeight * 0.1; 

    if (sectionTop <= threshold) {
      nav.classList.add('dark');
    } else {
      nav.classList.remove('dark');
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

  window.addEventListener('scroll', handleScroll);