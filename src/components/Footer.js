import React, { Component } from 'react';
import Networks from './Networks'

class Footer extends Component {

  renderSocialLinks() {
    const { social } = this.props.data
    return <Networks data={social} />
  }

  render() {
    return (
      <footer>
         <div className="row">
            <div className="twelve columns">
               <ul className="social-links">
                {!this.props.data ? null : this.renderSocialLinks()}
               </ul>
               <ul className="copyright">
                  <li>&copy; Copyright 2014 CeeVee</li>
                  <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
               </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
         </div>
      </footer>
    );
  }
}

export default Footer;
