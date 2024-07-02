// Sidebar Functionality
const links = document.querySelectorAll("nav a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

 // Landing page Animation
 const introText = document.querySelector('.intro-text');
 const headerText = document.querySelector('.header-text');
 const subheading = document.querySelector('.subheading');
 setTimeout(() => {
   introText.style.opacity = 0;
 }, 1000);
 setTimeout(() => {
   headerText.style.opacity = 1;
   headerText.classList.add('fadeInUp-animation'); 
 }, 1500); 
 setTimeout(() => {
   subheading.style.opacity = 1;
 }, 2000);

// Hire me Button animation
const button = document.querySelector(".button");
const contactSection = document.querySelector("#contact-section");

button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }, 600);
});

function getRandomColor() {
  const colors = ['#FF69B4', '#33CC33', '#66CCCC', '#FFCC00', '#0099CC'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomColor() {
  const colors = ['#FF69B4', '#33CC33', '#66CCCC', '#FFCC00', '#0099CC'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Making the Project Section Dynamic for easier update
 fetch('./assets/apps.json')
  .then(response => response.json())
  .then(data => {
    const appList = document.getElementById('app-list');
    data.forEach(project => {
      const appHTML = `
        <div class="project-item">
          <img src="${project.image}" alt="${project.title}">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;
      appList.innerHTML += appHTML;
    });
  })
  .catch(error => console.error('Error:', error));

  fetch('./assets/websites.json')
  .then(response => response.json())
  .then(data => {
    const websiteList = document.getElementById('website-list');
    data.forEach(project => {
      const websiteHTML = `
        <div class="project-item">
          <img src="${project.image}" alt="${project.title}">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;
      websiteList.innerHTML += websiteHTML;
    });
  })
  .catch(error => console.error('Error:', error));

// Contact Form Functionality
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  console.log('Form submitted');

  // Get the form data
  const formData = new FormData(event.target);

  // Send the form data to the server using fetch API
  fetch('/submit-contact-form', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    showFeedbackMessage('Your message has been sent successfully.', 'success');
  })
  .catch(error => {
    console.error('Error:', error);
    showFeedbackMessage('There was an error sending your message. Please try again later.', 'error');
  });
});

// Function to display feedback messages
const feedbackMessage = document.getElementById('feedback-message');

function showFeedbackMessage(message, type) {
  feedbackMessage.textContent = message;
  feedbackMessage.classList.remove('success', 'error');
  feedbackMessage.classList.add(type);
  feedbackMessage.style.display = 'block';

  setTimeout(() => {
    feedbackMessage.style.display = 'none';
  }, 5000);
}