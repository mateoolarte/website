import React, { Component } from "react"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Cover } from "./Cover"

class App extends Component {
  render() {
    return (
      <section className="wrapper">
        <Header />
        <Nav />
        <Cover />
      </section>
    )
  }
}

export default App
