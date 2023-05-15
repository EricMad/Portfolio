// Animation titre

const textAnim = document.querySelector(".presentation__informations__h1");

new Typewriter(textAnim, {
  deleteSpeed: 20,
})
  .changeDelay(40)
  .typeString("Eric Madou")
  .pauseFor(300)
  .typeString(', Developpeur <span style="color:#d33bfd">web</span>')
  .pauseFor(1000)
  .deleteChars(3)
  .pauseFor(1000)
  .typeString('<span style="color:#E44D26" > HTML</span>')
  .pauseFor(1000)
  .deleteChars(4)
  .pauseFor(1000)
  .typeString('<span style="color:#2965f1"> CSS</span>')
  .pauseFor(1000)
  .deleteChars(3)
  .pauseFor(1000)
  .typeString('<span style= "color:#F0DB4F"> JavaScript</span>')
  .pauseFor(1000)
  .deleteChars(10)
  .pauseFor(1000)
  .typeString('<span style="color:#61dafb"> ReactJS</span>')
  .pauseFor(1000)
  .deleteChars(7)
  .pauseFor(1000)
  .typeString('<span style="color:#d33bfd">web.</span>')

  .start();

// Retour haut de page

const btn = document.querySelector(".btn-rtn");

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Menu burger

const navLinks = document.querySelector(".nav__links");
const menuBurger = document.querySelector(".burger-menu");

menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle("burger-mobile");
});
