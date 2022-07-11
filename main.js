const nav = document.querySelector(".nav");
const mobileToggle = document.querySelector(".mobile-nav-toggle");

// console.log(nav, mobileToggle);
mobileToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
//   console.log(visibility);
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    mobileToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    nav.setAttribute("data-visible", false);
    mobileToggle.setAttribute("aria-expanded", false);
  }
});
