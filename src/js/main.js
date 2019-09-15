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

function showContent() {
  btnStart.removeAttribute("hidden");
  inputName.removeAttribute("hidden");
  btnBeEco.setAttribute("hidden", true);
  welcomeParagraph.setAttribute("hidden", true);
}

btnBeEco.addEventListener("click", showContent);
