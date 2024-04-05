/* Exercise 2*/
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.createElement('ul');
const ulIngredients = document.querySelector('ul');
ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ulIngredients.appendChild(li);
});