import React, { Component } from 'react';

class NewRecipe extends Component {
  render() {
    const bcg = {
      backgroundImage: 'url(' + this.props.image + ')'
    }

    return(
      <section className="recipe-addNewItem">
        <div className="recipe-add-hero" style={bcg}>
          <div className="recipe-add-hero-overflow"></div>
          <h2 className="recipe-add-title">Add a new recipe!</h2>
        </div>
        <div className="recipe-add-content">
          <form className="recipe-form" onSubmit={this.props.submitForm.bind(this)}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="title"
                placeholder="Recipe Name" />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Link to image" />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Description"
                name="desc"
                id="desc"
                ></textarea>
            </div>
            <div className="form-group">
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients">
              </textarea>
            </div>
            <div className="form-group">
              <textarea
                name="instruction"
                id="instruction"
                placeholder="Instruction"></textarea>
            </div>
            <div className="form-group buttons-group">
              <button className="btn btn-add">Add</button>
              <button className="btn btn-cancel" onClick={this.props.hideForm.bind(this)}>Cancel</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default NewRecipe;
