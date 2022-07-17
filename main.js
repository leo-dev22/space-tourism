const navigation = document.querySelector(".navigation-primary");
const mobileToggle = document.querySelector(".mobile-nav-toggle");

console.log(navigation, mobileToggle);
mobileToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");
  console.log(visibility);
  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    mobileToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navigation.setAttribute("data-visible", false);
    mobileToggle.setAttribute("aria-expanded", false);
  }
});
