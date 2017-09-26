import React, { Component } from 'react';
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Recommendations from './components/Recommendations'
import Footer from './components/Footer'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      resumeData: {}
    }
  }

  getResumeData() {
    fetch('http://localhost:3000/resumeData.json')
      .then(resp => resp.json())
      .then(data => this.setState({ resumeData: data }))
  }

  componentDidMount() {
    this.getResumeData()
  }

  render() {
    const { main, resume, portfolio, recommendations } = this.state.resumeData

    return (
      <div className="App">
        <Header data={main}/>
        <About data={main}/>
        <Resume data={resume}/>
        <Portfolio data={portfolio} />
        <Recommendations data={recommendations}/>
        <Footer data={main} />
      </div>
    );
  }
}
