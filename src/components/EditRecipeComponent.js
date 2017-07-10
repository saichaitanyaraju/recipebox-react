import React, { Component } from 'react';

class EditRecipe extends Component {
  render() {

    var title = this.props.recipe.name,
          image = this.props.recipe.image,
          desc  = this.props.recipe.desc,
          ingr  = this.props.recipe.ingredients,
          inst  = this.props.recipe.instruction;
    var recipeID = this.props.id;


    return(
      <div className="recipe-item-content">
        <form className="recipe-form recipe-form--edit" onSubmit={ (e) => this.props.submitEdit(e, this.props.recipe.id)}>
            <div className="form-group">
              <input
                type="text"
                name="etitle"
                id="etitle"
                placeholder="Recipe Name"
                defaultValue= {title}/>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="eimage"
                id="eimage"
                placeholder="Link to image"
                defaultValue= {image}/>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Description"
                name="edesc"
                id="edesc"
                defaultValue = {desc}
                ></textarea>
            </div>
            <div className="form-group">
              <textarea
                name="eingredients"
                id="eingredients"
                placeholder="Ingredients"
                defaultValue={ingr}
               ></textarea>
            </div>
            <div className="form-group">
              <textarea
                name="einstruction"
                id="einstruction"
                placeholder="Instruction"
                defaultValue={inst}
               ></textarea>
            </div>
            <div className="form-group buttons-group">
              <button className="btn btn-add" type="submit">Save Changes</button>
              <button
                className="btn btn-cancel"
                onClick = {this.props.hideEditForm}>Cancel</button>
            </div>
          </form>
      </div>
    );
  }
}

export default EditRecipe;
