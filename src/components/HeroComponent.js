import React, { Component } from 'react';

class Hero extends Component {
  render() {
    const heroStyle = {
      backgroundImage: 'url(' + this.props.hero.image + ')'
    }

    return(
      <section className="hero" style={heroStyle}>
        <div className="hero-overflow"></div>
        <div className="hero-content">
          <h1>{this.props.hero.welcome + this.props.brand}</h1>
          <h2>{this.props.hero.subtitle}</h2>
        </div>
      </section>
    );
  }
}

export default Hero;
