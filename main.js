let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true,
});

sr.reveal(".logo", { delay: 200, origin: "left" });
sr.reveal(".navbar", { delay: 400, origin: "top" });

sr.reveal(".menu-btn", { delay: 500, origin: "right" });
sr.reveal(".hero-img", { delay: 1000, origin: "right" });
sr.reveal(".hero-text h1", { delay: 650, origin: "left" });
sr.reveal(".hero-text p", { delay: 750, origin: "right" });
sr.reveal(".main-btn", { delay: 750, origin: "left" });
sr.reveal(".socials", { delay: 750, origin: "bottom" });
