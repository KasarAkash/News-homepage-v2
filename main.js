let body = document.querySelector("body");
let menuBtn = document.querySelector(".menuBtn");
let closeBtn = document.querySelector(".closeBtn");
let sideMenu = document.querySelector(".sideMenu");
let shadowBG = document.querySelector(".shadowBG");

menuBtn.addEventListener("click", function () {
  sideMenu.style = `display: block`;
  shadowBG.style = `display: block`;
  body.style = `overflow:hidden`;
});

closeBtn.addEventListener("click", function () {
  sideMenu.style = `display: none`;
  shadowBG.style = `display: none`;
  body.style = `overflow: visible`;
});
