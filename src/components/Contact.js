import React, { Component } from 'react';
import ContactDetails from './ContactDetails'

export default class Contact extends Component {

  displayContactInfo() {
    return <ContactDetails data={this.props.data} />
  }

  render() {
    return (
      <section id="contact">
          <div className="row section-head">
              <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>
               <div className="ten columns">
                     <p className="lead">
                      I am always open to opportunities to learn and expand my skill set. Please call or email me if you would like to connect. You can also fill out the form below to get in touch.
                     </p>
               </div>
            </div>
            <div className="row">
               <div className="eight columns">
                  <form action="" method="post" id="contactForm" name="contactForm">
   					<fieldset>
                     <div>
   						   <label htmlFor="contactName">Name <span className="required">*</span></label>
   						   <input type="text" value="" size="35" id="contactName" name="contactName" />
                     </div>
                     <div>
   						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
   						   <input type="text" value="" size="35" id="contactEmail" name="contactEmail" />
                     </div>
                     <div>
   						   <label htmlFor="contactSubject">Subject</label>
   						   <input type="text" value="" size="35" id="contactSubject" name="contactSubject" />
                     </div>
                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                     </div>
                     <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
   					</fieldset>
   				   </form>
                  <div id="message-warning"> Error boy</div>
   				   <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
   				   </div>
               </div>
               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">
   					   <h4>Call or Email</h4>
                {!this.props.data ? null : this.displayContactInfo()}
   				   </div>
               </aside>
         </div>
      </section>
    );
  }
}
