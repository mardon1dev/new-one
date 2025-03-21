let body = document.querySelector("body");

function createSmoke(e) {
  let element = document.createElement("div");
  element.classList.add("element");

  element.style.left = `${e.clientX}px`;
  element.style.top = `${e.clientY}px`;
  body.appendChild(element);
  if (e.target.classList.contains("header")) {
    body.removeChild(element);
  }

  element.addEventListener("animationend", () => {
    element.remove();
  });
}

document.addEventListener("mousemove", createSmoke);

// Snow fade
let snowFall = document.querySelector("#snowFall");
let stopSnow = document.querySelector(".stop-snow");

function snowFlow() {
  let snowFlake = document.createElement("div");
  snowFlake.classList.add("snowFlake");
  snowFlake.textContent = "*";
  snowFlake.style.position = "absolute";
  snowFlake.style.left = `${Math.random() * 100}vw`;
  snowFlake.style.top = `${Math.random() * 10}px`;
  snowFlake.style.fontSize = `${Math.random * 12 + 10}px`;
  snowFlake.style.opacity = Math.random();
  snowFlake.style.animationDuration = `${Math.random() * 3 + 2}s`;

  snowFall.appendChild(snowFlake);
  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
}
let snowInterval = setInterval(snowFlow, 50);

stopSnow.addEventListener("click", () => {
  if (snowInterval) {
    clearInterval(snowInterval);
    snowInterval = null;
  } else {
    snowInterval = setInterval(snowFlow, 50);
  }
});

// Hero sectiom

const textArray = [
  "Hello World.",
  "Enjoy your coffee.",
  "Welcome to the reality...",
];

const typingSpeed = 150;
const delayBetweenText = 2000;
let textIndex = 0;
let charIndex = 0;

const typedIndexElement = document.querySelector("#typed-text");
function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typedIndexElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText, delayBetweenText);
  }
}
function deleteText() {
  if (charIndex > 0) {
    typedIndexElement.textContent = textArray[textIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(deleteText, typingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, typingSpeed);
  }
}

typeText();

// Change theme

let changeTheme = document.querySelector(".change-theme");
changeTheme.addEventListener("click", () => {
  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
    changeTheme.innerHTML = "☀️";
  } else {
    body.classList.remove("dark-mode");
    changeTheme.innerHTML = "🌑";
  }
});

// ScrollToTop

let ScrollToTop = document.querySelector(".scrollToTop");

function scrollTop() {
  if (window.scrollY >= 100) {
    ScrollToTop.classList.add("showToTop");
    ScrollToTop.classList.remove("scrollToTop");
  } else {
    ScrollToTop.classList.remove("showToTop");
    ScrollToTop.classList.add("scrollToTop");
  }
}

ScrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", scrollTop);

