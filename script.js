// menu toggle
const menuToggle = document.querySelector('.menu_toggle');
const navLinks = document.querySelector('.links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

//form
const form = document.getElementById('subscribeForm');
const emailInput = document.getElementById('subscriberEmail');
const message = document.getElementById('subscribeMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    message.textContent = 'Please enter a valid email address.';
    message.className = 'subscribe-message error';
    return;
  }

  let subscribers = JSON.parse(localStorage.getItem('lslens_subscribers') || '[]');
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    localStorage.setItem('lslens_subscribers', JSON.stringify(subscribers));
  }

  message.textContent = 'Thanks for following! You’re now part of this journey 🌿';
  message.className = 'subscribe-message success';
  emailInput.value = '';
});
