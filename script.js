const toggler = document.querySelector('.toggler');

let n = 1;
toggler.addEventListener('click', function (e) {
  const target = document.getElementById(toggler.dataset.target);
  const togglerIcon = toggler.firstElementChild;
  if (n % 2 == 1) {
    target.style.display = 'none';
    togglerIcon.classList.remove('fa-arrow-up');
    togglerIcon.classList.add('fa-arrow-down');
  } else {
    target.style.display = '';
    togglerIcon.classList.remove('fa-arrow-down');
    togglerIcon.classList.add('fa-arrow-up');
  }
  n++;
});
