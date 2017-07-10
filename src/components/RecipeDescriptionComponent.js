import React, { Component } from 'react';

class RecipeDescription extends Component {
  render() {

    var ingredients = this.props.recipe.ingredients.map(function(ingredient) {
      return (
        <li>{ingredient}</li>
      );
    });

    return(
      <div className="recipe-item-content">
          <div className="recipe-item-title">
            {this.props.recipe.name}
          </div>
          <div className="recipe-item-menu">
            <span onClick={this.props.edit.bind(this, this.props.recipe)}>Edit</span>
            <span onClick={this.props.remove.bind(this, this.props.recipe)}>Remove</span>
          </div>
          <div className="recipe-item-description">
            {this.props.recipe.desc.split('\n').map(function(item) {
              return (
                <span>
                  {item}
                  <br />
                 </span>
              ) })}
          </div>
          <div className="recipe-item-ingredients">
            {this.props.recipe.ingredients ? <h2>Ingredients</h2> : null}
            <ul className="ingredients-list">
              {ingredients}
            </ul>
          </div>
          <div className="recipe-item-instruction">
            {this.props.recipe.instruction ? <h2>Instruction</h2> : null}
            {this.props.recipe.instruction ? this.props.recipe.instruction.split('\n').map(function(item) {
              return (
                <span>
                  {item}
                  <br />
                 </span>
              ) }) : null}
          </div>
        </div>
    );
  }
}

export default RecipeDescription;
