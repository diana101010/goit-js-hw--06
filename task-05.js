/* Exercise 5 */
const nameInput = document.querySelector(`input#name-input`);
const nameOutput = document.querySelector(`span#name-output`);

nameInput.addEventListener(`input`, function () {
    if (nameInput.value.trim() !== '') {
        nameOutput.textContent = nameInput.value;
    } else {
        nameOutput.textContent = "Anonymous"
    }
});
    
