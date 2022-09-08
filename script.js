const toggler = document.querySelector('.toggler');

const targetClass = '.collapsible';
const toggleTarget = (displayState) => {
  document.querySelectorAll(targetClass).forEach((target) => {
    target.style.display = displayState;
  });
};

let n = 0;
toggler.addEventListener('click', function (e) {
  if (n % 2 == 0) {
    toggleTarget('none');
    toggler.innerText = 'vv';
  } else {
    toggleTarget('');
    toggler.innerText = '^^';
  }
  n++;
});
