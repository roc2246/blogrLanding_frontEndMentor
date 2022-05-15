const images = document.querySelectorAll("img");

window.onresize = () => {
  if (window.innerWidth <= 390) {
    Object.keys(images).forEach((image) => {
      let url = images[image].src;
      const match = /desktop/.test(url);
      if (match === true) {
        const mobileURL = url.replace(/desktop/, "mobile");
        images[image].src = mobileURL;
      }
    });
  } else {
    Object.keys(images).forEach((image) => {
      let url = images[image].src;
      const match = /mobile/.test(url);
      if (match === true) {
        const mobileURL = url.replace(/mobile/, "desktop");
        images[image].src = mobileURL;
      }
    });
  }
};

const dropDownOption = document.getElementsByClassName(
  "topContent_nav_left_dropDownOption--hover"
);
const dropDownOptionMobile = document.getElementsByClassName(
  "topContent_nav_right_mobile_dropDownOption--hover"
);
const dropDownOptionDiv = document.getElementsByClassName(
  "topContent_nav_right_mobile_dropDownOption"
);

const mobileNav = document.getElementById("topContent_nav_right_mobile");
const mobileNavToggle = document.getElementById(
  "topContent_nav_right_mobile--toggle"
);

const toggleMenu = (o) => {
  //Desktop
  if (dropDownOption[o].style.display === "flex") {
    dropDownOption[o].style.display = "none";
  } else {
    dropDownOption[o].style.display = "flex";
  }

  //Mobile
  if (dropDownOptionMobile[o].style.display === "flex") {
    dropDownOptionMobile[o].style.display = "none";
    dropDownOptionDiv[o].childNodes[1].style.color = "black";
  } else {
    dropDownOptionMobile[o].style.display = "flex";
    dropDownOptionDiv[o].childNodes[1].style.color = "#536878";
  }
};

const toggleMobile = () => {
  if (mobileNav.style.display === "flex") {
    mobileNav.style.display = "none";
    mobileNavToggle.src = "images/icon-hamburger.svg";
  } else {
    mobileNav.style.display = "flex";
    mobileNavToggle.src = "images/icon-close.svg";
  }
};

//Use to dedect offset elements
/* var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
); */
