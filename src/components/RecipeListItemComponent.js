import React, { Component } from 'react';

class RecipeListItem extends Component {
  render() {
    const bcg = {
      backgroundImage: 'url(' + this.props.recipe.image + ')'
    }

    const short = this.props.recipe.desc.substr(0,120) + "...";

    return(
      <div className="recipe-box" style={bcg} onClick={this.props.showRecipe.bind(this,this.props.recipe)}>
        <div className="recipe-box-content">
          <div className="recipe-box-title">
            {this.props.recipe.name}
          </div>
          <div className="recipe-box-description">
            {short}
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeListItem;
