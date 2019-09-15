"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

const btnBeEco = document.querySelector(".welcome-screen__button--be-eco-js");
const btnStart = document.querySelector(".welcome-screen__button--start-js");
const inputName = document.querySelector(".welcome-screen__button--name-js");
const welcomeParagraph = document.querySelector(
  ".welcome-screen__paragraph--js"
);
const userName = document.querySelector(".header__user-name--js");
const userScreen = document.querySelector(".user-screen--js");
const welcomeScreen = document.querySelector(".welcome-screen--js");

function showContent() {
  btnStart.classList.remove("hidden");
  inputName.classList.remove("hidden");
  btnBeEco.classList.add("hidden");
  welcomeParagraph.classList.add("hidden");
}

function hideWelcomeScreen(e) {
  const value = e.target.value;
  if(value !== ""){
    btnStart.classList.add("active");
    btnStart.removeAttribute("disabled");
    userName.innerHTML = value;
  } else {
    btnStart.classList.remove("active");
    btnStart.setAttribute("disabled", true);
  }
}

function showUserScreen() {
  userScreen.classList.remove("hidden");
  welcomeScreen.classList.add("hidden");
}

inputName.addEventListener("keyup", hideWelcomeScreen);
btnStart.addEventListener("click", showUserScreen);
btnBeEco.addEventListener("click", showContent);
