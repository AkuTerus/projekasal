const toggler = document.querySelector('.toggler');
const targets = ['.profile', '.profile-photo', '.about'];

const toggleTarget = (displayState) => {
  targets.forEach((target) => {
    document.querySelector(target).style.display = displayState;
  });
};

let n = 0;
toggler.addEventListener('click', function (e) {
  if (n % 2 == 0) {
    toggleTarget('none');
    toggler.innerText = 'vv';
  } else {
    toggleTarget('block');
    toggler.innerText = '^^';
  }
  n++;
});
