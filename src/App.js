import React, { Component } from 'react';
import React, {DOM} from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Footer from './components/FooterComponent.js';
import Header from './components/HeaderComponent.js';
import recipes from './storage/recipes.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      brand: 'RecipeBox',
      singleRecipeVisible: false,
      addRecipeVisible: false,
      editRecipeVisible: false,
      windowHeight: '',
      currentRecipe: {},
      newRecipe: {},
      addNewImage: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/STEV4625Y8.jpg",
      hero: {
        image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/4VWCJK0TLE.jpg',
        welcome: 'Welcome to ',
        subtitle: "Best place to explore worlds' taste!"
      }
    }

    this.showRecipe = this.showRecipe.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.hideRecipe = this.hideRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);

  }

  showForm() {
    this.setState({addRecipeVisible: true}, function() {
      console.log(`Showing recipe: ${this.state.addRecipeVisible}`);
    });
  }

  showEditForm() {
    this.setState({
      editRecipeVisible: true
    });
  }

  hideEditForm(e) {
    e.preventDefault();
    this.setState({
      editRecipeVisible: false
    });
  }

  submitForm(e) {
    e.preventDefault();
    var title = document.getElementById('title').value,
        img = document.getElementById('image').value,
        description = document.getElementById('desc').value,
        ingredients = document.getElementById('ingredients').value.split(','),
        instruction = document.getElementById('instruction').value,
        id = Math.floor(1000 + Math.random() * 9000) + recipes.length + 1;

    var newRecipe = {
      id: id,
      name: title,
      image: img,
      desc: description,
      ingredients: ingredients,
      instruction: instruction
    };

    this.pushNewRecipe(newRecipe);
    this.setState({addRecipeVisible: false});
  }

  editForm(e, recipeID) {
    e.preventDefault();
    console.log('EDITING RECIPE: ' + recipeID);
    var title = document.getElementById('etitle').value,
        img = document.getElementById('eimage').value,
        description = document.getElementById('edesc').value,
        ingredients = document.getElementById('eingredients').value.split(','),
        instruction = document.getElementById('einstruction').value;

    console.log('New name: ' + title);

    for (var i = 0; i < recipes.length; i++ ) {
      console.log(`Looking.....`);
      if (recipes[i].id == recipeID) {
        console.log('Found it! ' + recipeID);
        recipes[i].name = title;
        recipes[i].image = img;
        recipes[i].desc = description;
        recipes[i].ingredients = ingredients;
        recipes[i].instruction = instruction;
        console.log("Attributes changed!");
        break;
      }
    }

    softUpdate();

    this.setState({editRecipeVisible: false});

    console.log(`Function finished: ${recipes.length}`);
  }

  pushNewRecipe(obj) {
    recipes.push(obj);
    update();
  }

  hideForm(e) {
    e.preventDefault();
    this.setState({addRecipeVisible: false}, function() {
      console.log(`Showing recipe: ${this.state.addRecipeVisible}`);
    });
  }

   hideRecipe() {
     console.log('Hiding');
     this.setState({
       singleRecipeVisible: false,
       editRecipeVisible: false
     }, function() {
      console.log(this.state.singleRecipeVisible);
    });

   }

  deleteRecipe(obj) {
    recipes = recipes.filter(function(el){
      console.log("Filtering " + el.name);
      console.log("Result " + (el.name !== obj.name));
      return el.name !== obj.name;
    });
    update();

    this.setState({singleRecipeVisible: false}, function() {
      console.log("should be gone now..");
    });
  }

  showRecipe(recipe) {
   console.log(recipe);
    this.setState({singleRecipeVisible: true, currentRecipe: recipe, windowHeight: window.innerHeight+'px'}, function() {
      console.log(this.state.singleRecipeVisible);
    });
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.recipes.length);

    var recipelist = this.props.recipes.map(function(recipe) {

         return (
            <RecipeListItem recipe={recipe} key={recipe.id} showRecipe={this.showRecipe} />
         );
      }.bind(this));
    return(
      <div>
        <Header
          brandname={this.state.brand}
          showForm={this.showForm.bind(this)}  />

        {this.state.addRecipeVisible ? <NewRecipe
                                         image={this.state.addNewImage}
                                         hideForm={this.hideForm.bind(this)}
                                         submitForm={this.submitForm.bind(this)}
                                        /> : null}

        {this.state.singleRecipeVisible ? <RecipeItem
                                            recipe={this.state.currentRecipe}
                                            hide={this.hideRecipe}
                                            imgHeight={this.state.windowHeight}
                                            remove={this.deleteRecipe}
                                            edit = {this.showEditForm}
                                            editVisible = {this.state.editRecipeVisible}
                                            hideEditForm = {this.hideEditForm}
                                            submitEdit = {this.editForm.bind(this)}/> : null}

        {!this.state.singleRecipeVisible ? <div className="recipes-wrapper"> {recipelist} </div> : null}
        {!this.state.singleRecipeVisible ? <Footer /> : null}

      </div>
    );
  }
}

function update() {
  localStorage.setItem("recipeBox", JSON.stringify(recipes));
  var box = [];
  for (var i=0; i < recipes.length; i++) {
    box.push(recipes[i]);
  }
  var currentRecipes = localStorage.getItem('recipeBox');
  console.log(recipes);

  DOM.render(<App recipes={box} />, document.getElementById('app'));
}

function softUpdate() {
  localStorage.setItem("recipeBox", JSON.stringify(recipes));
}

export default App;
