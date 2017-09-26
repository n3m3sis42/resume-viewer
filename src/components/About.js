import React, { Component } from 'react';
import ContactDetails from './ContactDetails'

class About extends Component {

  resumeDownload() {
    if (!this.props.data) {
      return <span></span>
    }
    const { resumedownload } = this.props.data
    return (
      <a href={resumedownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
    )
  }

  render() {
    const image = this.props.data ? this.props.data.image : '/profilepic.jpg'

    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={`images/${image}`} alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
                {!this.props.data ? null : this.props.data.bio}
               </p>
               <div className="row">
                  <ContactDetails data={this.props.data} />
                  <div className="columns download">
                     <p>
                      {this.resumeDownload()}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default About;
