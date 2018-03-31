import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Cover } from "./Cover" 
import { About } from "./About" 
import { Work } from "./Work" 
import { SingleWork } from "./SingleWork"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      works: []
    }
  }

  componentDidMount() {
    axios
      .get("https://res.cloudinary.com/mateoolarte/raw/upload/v1522529627/personal_website/work.json")
      .then(response => {
        this.setState({ works: response.data.works })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return <Router>
        <section className="wrapper">
          <Route exact path="/" render={props => {
              return <div>
                  <Header isHome={true} />
                  <Nav isHome={true} />
                  <Cover />
                </div>
            }} />
          <Route path="/about" render={props => {
              return <div>
                  <Header isHome={false} />
                  <Nav isHome={false} />
                  <About />
                </div>
            }} />
          <Route path="/work" render={props => {
              return <div>
                  <Header isHome={false} />
                  <Nav isHome={false} />
                  <Work {...props} works={this.state.works} />
                </div>
            }} />
          <Route path="/project/:title" render={props => {
              return <div>
                  <Header isHome={false} />
                  <Nav isHome={false} />
                  <SingleWork {...props} />
                </div>
            }} />
        </section>
      </Router>
  }
}

export default App
