const toggler = document.querySelector('.toggler');

const targetClass = '.social';
const toggleTarget = (displayState) => {
  document.querySelectorAll(targetClass).forEach((target) => {
    target.style.display = displayState;
  });
};

let n = 0;
toggler.addEventListener('click', function (e) {
  if (n % 2 == 0) {
    toggleTarget('none');
    toggler.innerText = '^^';
    toggler.style.marginTop = '-20px'; // margin top
  } else {
    toggleTarget('');
    toggler.innerText = 'X';
    toggler.style.marginTop = '-44px'; // margin top
  }
  n++;
});
