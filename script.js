// Select all links in the navigation bar
const links = document.querySelectorAll("nav a");

// Add a click event to each link
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});