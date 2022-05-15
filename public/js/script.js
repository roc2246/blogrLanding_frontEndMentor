const images = document.querySelectorAll("img");

if (screen.width <= 390) {
  Object.keys(images).forEach((image) => {
    let url = images[image].src;
    const match = /desktop/.test(url);
    if (match === true) {
      const mobileURL = url.replace(/desktop/, "mobile");
      images[image].src = mobileURL;
    }
  });
  
}

const dropDownOption = document.getElementsByClassName(
  "topContent_nav_left_dropDownOption--hover"
);
const dropDownOptionMobile = document.getElementsByClassName(
  "topContent_nav_right_mobile_dropDownOption--hover"
);

let toggleMenu = (o) => {
  //Desktop
  if (dropDownOption[o].style.display === "flex") {
    dropDownOption[o].style.display = "none";
  } else {
    dropDownOption[o].style.display = "flex";
  }

  //Mobile
  if (dropDownOptionMobile[o].style.display === "flex") {
    dropDownOptionMobile[o].style.display = "none";
  } else {
    dropDownOptionMobile[o].style.display = "flex";
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
