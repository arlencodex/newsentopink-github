// Live date
const d = new Date();
document.getElementById('topDate').textContent = d.toLocaleDateString('en-IN', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// Nav active on click
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    navLinks.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
  });
});

// Subscribe button feedback
const subscribeButton = document.querySelector('.newsletter-widget button');
if (subscribeButton) {
  subscribeButton.addEventListener('click', () => {
    const input = document.querySelector('.newsletter-widget input');
    if (input && input.value.includes('@')) {
      subscribeButton.textContent = '✓ Subscribed!';
      subscribeButton.style.background = '#27ae60';
      input.value = '';
      input.style.border = 'none';
      input.placeholder = 'Your email address';
    } else if (input) {
      input.style.border = '1px solid #c0392b';
      input.placeholder = 'Please enter a valid email';
    }
  });
}
