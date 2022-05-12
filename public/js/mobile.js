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

const mobileMenu = document.getElementById("topNav_mobile_menu");
const mobileMenuToggle = document.getElementById("topNav_mobile--open");

mobileMenu.style.display = "none";

let toggleMenu = () => {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }
};

