// 1. Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode')? '☀️ Light' : '🌙 Mode';
});

// 2. Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

// Auto slide every 5 seconds
setInterval(() => showSlide(currentSlide + 1), 5000);

// 3. Service Buttons
document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const service = e.target.dataset.service;
        alert(`Booking request for: ${service}\nWe will contact you soon!`);
    });
});

// 4. Read More Buttons
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Full details coming soon! This feature is under development.');
    });
});

// 5. Gallery Lightbox
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        window.open(img.src, '_blank');
    });
});

// 6. Cost Calculator
document.getElementById('calculate-btn').addEventListener('click', () => {
  const peopleInput = parseInt(document.getElementById('people').value);
  const daysInput = parseInt(document.getElementById('days').value);

  const people = isNaN(peopleInput) || peopleInput < 0 ? 0 : peopleInput;
  const days = isNaN(daysInput) || daysInput < 0 ? 0 : daysInput;

  const platformCharge = 500; // Platform service charge
  let total = platformCharge;

  if (people > 0 && days > 0) {
    if (document.getElementById('guide').checked) {
      total += 1500 * days;
    }
    if (document.getElementById('hotel').checked) {
      total += 3000 * days;
    }
    if (document.getElementById('cab').checked) {
      total += 2000 * days;
    }

    

  document.getElementById('total-cost').textContent = `Total Estimated Cost: ₹${total.toLocaleString()} (Includes ₹500 Platform Service Charge)`;
});

    document.getElementById('total-cost').textContent = `Total Estimated Cost: ₹${total.toLocaleString()}`;
});

// 7. Weather - Mock Data (Real API ke liye OpenWeather API use karo)
function updateWeather() {
    // Yahan real API call kar sakte ho
    document.getElementById('w-temp').textContent = '32°C';
    document.getElementById('w-desc').textContent = 'Sunny';
    document.getElementById('w-humidity').textContent = '25%';
    document.getElementById('w-wind').textContent = '12 km/h';
}

updateWeather();
