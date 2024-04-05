/* Exercise 4 */
let counterValue = 0;
const valueElement = document.querySelector(`#value`);

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        
if (action === 'increment') {
  counterValue += 1;
} else if (action === 'decrement') {
  counterValue -= 1;
}
valueElement.textContent = counterValue;
}); });