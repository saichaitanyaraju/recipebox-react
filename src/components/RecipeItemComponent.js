import React, { Component } from 'react';

class RecipeItem extends Component {
  render()  {
    const bcg = {
      backgroundImage: 'url(' + this.props.recipe.image + ')',
      height:  this.props.imgHeight
    }

    var visibility = this.props.editVisible;
    return(
      <section className="recipe-item">
      <div className="recipe-item-close" onClick={this.props.hide}>✖</div>
      <span></span>
      <div className="recipe-item-image" style={bcg}></div>
        {!this.props.editVisible ? <RecipeDescription edit = {this.props.edit} remove = {this.props.remove} recipe = {this.props.recipe} /> : <EditRecipe recipe = {this.props.recipe} hideEditForm = {this.props.hideEditForm} submitEdit = {this.props.submitEdit} /> }
      </section>
    );
  }
}

export default RecipeItem;
