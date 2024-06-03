// Select all links in the navigation bar
const links = document.querySelectorAll("nav a");

// Add a click event to each link
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

 // Get the elements
 const introText = document.querySelector('.intro-text');
 const headerText = document.querySelector('.header-text');
 const subheading = document.querySelector('.subheading');

 // Animation sequence
 setTimeout(() => {
   introText.style.opacity = 0; // fade out intro text
 }, 1000); // wait 1 second

 setTimeout(() => {
   headerText.style.opacity = 1; // fade in header text
   headerText.classList.add('fadeInUp-animation'); // add animation class
 }, 1500); // wait 1.5 seconds

 setTimeout(() => {
   subheading.style.opacity = 1; // fade in subheading
 }, 2000); // wait 2 seconds