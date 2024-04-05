/* Exercise 1 a) */
const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);
/* Exercise 1 b) */
const categoriesTitle = document.querySelectorAll("ul#categories li.item");
categoriesTitle.forEach((category) => {
  const title = category.querySelector(`h2`).textContent;
  const itemCount = category.querySelectorAll(`li`).length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
