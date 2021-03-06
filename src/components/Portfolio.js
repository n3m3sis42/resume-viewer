import React, { Component } from 'react';

export default class Portfolio extends Component {

  renderPortfolioItem(project) {
    const { title, category, tags, image, url } = project
    return (
      <div key={title} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={url} title={url} target="_blank">
            <img alt="" src={`images/portfolio/${image}`} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{title}</h5>
                    <p>{category}</p><br />
                    <p>Technologies Used:</p>
                    <p>{tags}</p>
                </div>
              </div>
          </a>
        </div>
     </div>
    )
  }

  renderProjects() {
    const { projects } = this.props.data
    return (
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        {projects.map(project => {return this.renderPortfolioItem(project)})}
      </div>
    )
  }

  render() {
    return (
      <section id="portfolio">
         <div className="row">
            <div className="twelve columns collapsed">
               <h1>Recent Projects</h1>
               <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {!this.props.data ? null : this.renderProjects()}
               </div>
            </div>
         </div>
      </section>
    );
  }
}
