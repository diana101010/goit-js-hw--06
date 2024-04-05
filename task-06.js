/* Exercise 6 */

const input = document.getElementById('validation-input');

input.addEventListener('blur', function() {
  const inputLength = input.value.length;
  const requiredLength = input.getAttribute('data-length');

  if (inputLength == requiredLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});