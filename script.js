const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = bookingForm.querySelector('button');
  button.textContent = 'Заявка принята ✓';
  window.setTimeout(() => {
    button.textContent = 'Хочу красивую улыбку';
  }, 2400);
});
