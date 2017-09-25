import React, { Component } from 'react'
import NavBar from './NavBar'
import Networks from './Networks'

export default class Header extends Component {

  renderHeader(){
    const { name, occupation, description, social } = this.props.data

    return (
      <div className="banner-text">
      <h1 className="responsive-headline">{name}</h1>
      <h3>
        <span>{occupation}</span>
        <br />
        {description}
      </h3>
         <hr />
         <ul className="social">
          <Networks data={social} />
         </ul>
      </div>
    )
  }

  render() {

    return (
      <header id="home">

        <NavBar />

        <div className="row banner">
          {!this.props.data ? null: this.renderHeader()}
        </div>

       <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
       </p>

     </header>
    );
  }
}
