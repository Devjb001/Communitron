let menu = document.querySelector('.menu');
let bars = document.getElementById('bars');
let cancelX = document.getElementById('cancel');
let navLinks = document.querySelectorAll('.nav-links');

bars.addEventListener('click', function() {
  menu.classList.add('open');
  bars.classList.add('bar-open');
  cancelX.classList.add('cancel-x-open');
});

cancelX.addEventListener('click', function() {
  menu.classList.remove('open');
  bars.classList.remove('bar-open');
  cancelX.classList.remove('cancel-x-open');
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove('open');
        bars.classList.remove('bar-open');
        cancelX.classList.remove('cancel-x-open');
    });
  });