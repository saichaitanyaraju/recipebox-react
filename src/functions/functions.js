import { recipes } from '../storage/recipes.js';

function update() {
  localStorage.setItem("recipeBox", JSON.stringify(recipes));
  var box = [];
  for (var i=0; i < recipes.length; i++) {
    box.push(recipes[i]);
  }
  var currentRecipes = localStorage.getItem('recipeBox');
  console.log(recipes);
}

function softUpdate() {
  localStorage.setItem("recipeBox", JSON.stringify(recipes));
}

export { update, softUpdate }
