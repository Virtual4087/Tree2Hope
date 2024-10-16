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

    const close = document.querySelectorAll(".navclose");
    document.getElementById("openMenu").addEventListener("click", function () {
      document.getElementById("menuContainer").style.display = "flex";
    });

    document.getElementById("closeMenu").addEventListener("click", function () {
      document.getElementById("menuContainer").style.display = "none";
    });
    document.querySelectorAll(".close").forEach((element) => {
      element.addEventListener("click", function () {
        document.getElementById("menuContainer").style.display = "none";
      });
    });

    function handleClose() {
      document.getElementById("menuContainer").style.display = "none";
    }
    
    let mybutton = document.getElementById("scrollToTopBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    mybutton.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  const nav = document.querySelector('nav');
  const whereWePlantSection = document.querySelector('.locations');

  // Function to add/remove dark background
  function handleScroll() {
    const sectionTop = whereWePlantSection.getBoundingClientRect().top;
    const threshold = window.innerHeight * 0.1; 

    if (sectionTop <= threshold) {
      nav.classList.add('dark');
    } else {
      nav.classList.remove('dark');
    }
  }

  window.addEventListener('scroll', handleScroll);

