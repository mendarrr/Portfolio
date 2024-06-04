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

// Adding Validation Functionalty to the form
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }
n
  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  const formData = new FormData();
  formData.append('name', nameInput.value);
  formData.append('email', emailInput.value);
  formData.append('message', messageInput.value);

  fetch('/submit-contact-form', {
    method: 'POST',
    body: formData
  })
 .then(response => response.json())
 .then(data => {
    console.log('Success:', data);
    alert('Form submitted successfully!');
  })
 .catch(error => {
    console.error('Error:', error);
    alert('There was an error sending your message. Please try again later.');
  });
});


// Feedback
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
showFeedbackMessage('Your message has been sent successfully.', 'success');
showFeedbackMessage('There was an error sending your message. Please try again later.', 'error');
