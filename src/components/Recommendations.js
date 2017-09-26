import React, { Component } from 'react';

export default class Recommendations extends Component {
// TODO fix this later so recommendations pull from file -- couldn't get li's to display even though they were there to map through (pretty sure I need a flexslider add method)

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
                  <ul className="slides">
                    <li key="Chris Allen">
                       <blockquote>
                          <p>Sarah is an excellent problem solver, an incredibly hard worker, and an exceptional communicator. When we worked together at Patient Care Technologies, she quickly grew into an expert programmer, and was a great resource for both the application analysts as well as the other programmers. I would recommend Sarah for any position in support, development, or management. She has a great attitude and an even better work ethic.</p>
                          <cite>Chris Allen</cite>
                       </blockquote>
                    </li>
                    <li key="Carl Pitney">
                       <blockquote>
                          <p>Sarah is a hardworking professional with the ability to move projects forward even under the most challenging of circumstances. As a teammate at Iatric Systems, she was a key performer and related and communicated effectively with our clients as well as with C-level, technical, and end-user teammates alike. I sincerely recommend Sarah for any position throughout the product life cycle, as I have no doubt she will excel in the development, implementation, and support arenas.</p>
                          <cite>Carl Pitney</cite>
                       </blockquote>
                    </li>
                    <li key="Kay Jackson">
                       <blockquote>
                          <p>Sarah joined our team to install and update a complicated product. She was eager to learn and I saw her tackle work others did not want to work on. She gets the job done and values the customers needs and timelines. I highly recommend her and she will get the job done right and on time.</p>
                          <cite>Kay Jackson, CMUP</cite>
                       </blockquote>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
    </section>
  );
}
}
