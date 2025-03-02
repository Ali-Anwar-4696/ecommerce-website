// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-slide');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let currentIndex = 0;

// Function to update the slider position
function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  sliderWrapper.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Event listener for the next arrow
nextArrow.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateSlider();
});

// Event listener for the previous arrow
prevArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Loop to the last slide
  }
  updateSlider();
});

// Set the countdown timer (e.g., 24 hours from now)
const countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// Update the countdown every second
const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('hours').textContent = String(Math.floor(hours)).padStart(2, '0');
  document.getElementById('minutes').textContent = String(Math.floor(minutes)).padStart(2, '0');
  document.getElementById('seconds').textContent = String(Math.floor(seconds)).padStart(2, '0');

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector('.countdown-timer').innerHTML = '<p>Sale Ended!</p>';
  }
}, 1000);

// FAQ Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = header.nextElementSibling;

    // Toggle active class
    accordionItem.classList.toggle('active');

    // Toggle content visibility
    if (accordionItem.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});