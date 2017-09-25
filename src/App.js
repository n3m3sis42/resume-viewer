import React, { Component } from 'react';
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      resumeData: {}
    }
  }

  getResumeData() {
    fetch('http://localhost:3000/resumeData.json')
      .then(resp => resp.json())
      .then(data => this.setState({ resumeData: data },
      () => {console.log(this.state)}))
  }

  componentDidMount() {
    this.getResumeData()
  }

  render() {
    const { main, resume, portfolio, testimonials } = this.state.resumeData

    return (
      <div className="App">
        <Header data={main}/>
        <About data={main}/>
        <Resume data={resume}/>
        <Portfolio data={portfolio} />
        <Testimonials data={testimonials}/>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
