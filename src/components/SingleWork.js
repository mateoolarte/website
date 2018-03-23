import React, { Component } from "react"
import axios from "axios"

class SingleWork extends Component {
  constructor() {
    super()

    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    axios
      .get("https://res.cloudinary.com/mateoolarte/raw/upload/v1521779472/work.json")
      .then(response => {
        this.setState({ 
          project: response.data.works.find((work => work.title.toLowerCase() === this.props.match.params.title))
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <h1>Hola mundo {this.state.project.title}</h1>
    )
  }
}

export { SingleWork }