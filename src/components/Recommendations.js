import React, { Component } from 'react';

export default class Recommendations extends Component {

  renderSlide(rec) {
    const { text, user } = rec
    return (
      <li key={user}>
         <blockquote>
            <p>{text}</p>
            <cite>{user}</cite>
         </blockquote>
      </li>
    )
  }

  renderRecommendations() {
    const { recommendations } = this.props.data
    console.log(recommendations)
    return (
      <ul className="slides">
        {recommendations.map(rec => {return this.renderSlide(rec)})}
      </ul>
    )
  }

  render() {
    return (
      <section id="recommendations">
         <div className="text-container">
            <div className="row">
               <div className="two columns header-col">
                  <h1><span>Recommendations</span></h1>
               </div>
               <div className="ten columns flex-container">
                  <div className="flexslider">
                    {!this.props.data ? null : this.renderRecommendations()}
                  </div>
               </div>
            </div>
          </div>
      </section>
    );
  }
}
