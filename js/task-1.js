const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
const categoriesTotal = categoriesItems.length;

console.log(`Number of categories: ${categoriesTotal}`);

categoriesItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const categoriesElem = item.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${categoriesElem}`);
});