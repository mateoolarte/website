import React, { Component } from "react"
import github from "../images/github.svg"
import twitter from "../images/twitter.svg"
import email from "../images/email.svg"
import "../styles/App.css"

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Coming soon</h1>
        <h3 className="subtitle">Contact me:</h3>
        <div className="social-icons">
          <a href="https://github.com/mateoolarte" target="_blank" rel="noopener noreferrer"><img src={github} alt=""/></a>
          <a href="https://twitter.com/mateo_olarte" target="_blank" rel="noopener noreferrer"><img src={twitter} alt=""/></a>
          <a href="mailto:mateo.olarte8@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt=""/></a>
        </div>
      </div>
    )
  }
}

export default App
