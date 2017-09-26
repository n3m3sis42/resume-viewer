import React, { Component } from 'react';

class Resume extends Component {

  renderEducationRow(edu) {
    const { school, degree, graduated } = edu
    return (
      <div key={school} className="row item">
        <div className="twelve columns">
          <h3>{school}</h3>
          <p className="info">{degree}<span>&bull;</span><em className="date">{graduated}</em></p>
        </div>
      </div>
    )
  }

  renderEducation() {
    const { education } = this.props.data
    return (
      <div className="nine columns main-col">
        {education.map(edu => {return this.renderEducationRow(edu)})}
      </div>
    )
  }

  renderWorkRow(wk) {
    const { company, title, years, description } = wk
    return (
      <div key={title} className="row item">
        <div className="twelve columns">
          <h3>{company}</h3>
          <p className="info">{title}<span>&bull;</span><em className="date">{years}</em></p>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  renderWork() {
    const { work } = this.props.data
    return (
      <div className="nine columns main-col">
        {work.map(wk => {return this.renderWorkRow(wk)})}
      </div>
    )
  }

  renderSkillRow(skill) {
    const { name, level } = skill
    return (
      <li key={name}><span style={{width: level}} className="bar-expand"></span><em>{name}</em></li>
    )
  }

  renderSkills() {
    const { skills } = this.props.data
    return (
 			<ul className="skills">
        {skills.map(skill => {return this.renderSkillRow(skill)})}
      </ul>
    )
  }

  render() {
    return (
      <section id="resume">
       <div className="row education">
          <div className="three columns header-col">
             <h1><span>Education</span></h1>
          </div>
          {!this.props.data ? null : this.renderEducation()}
       </div>
       <div className="row work">
          <div className="three columns header-col">
             <h1><span>Work</span></h1>
          </div>
          {!this.props.data ? null : this.renderWork()}
        </div>
       <div className="row skill">
          <div className="three columns header-col">
             <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
             <p>
             </p>
             <div className="bars">
              {!this.props.data ? null : this.renderSkills()}
            </div>
 				   </div>
        </div>
      </section>
    );
  }
}

export default Resume;
