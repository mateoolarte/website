import React, { Component } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import "../styles/SingleWork.css"
const linkIcon = "https://res.cloudinary.com/mateoolarte/image/upload/v1522196895/personal_website/link.svg"
const backWorkIcon = "https://res.cloudinary.com/mateoolarte/image/upload/v1522214166/personal_website/back-work.svg"

const ProcessSection = props => {
  let content

  (props.data === undefined) ? content = [] : content = props.data

  return <section className="SingleWork__process">
      {content.length > 0 && <h2 className="heading singleWork__subtitle">Process</h2>}

      {content.map((item, i) => {
        let index = i + 1
        return <article key={i} className="SingleWork__processItem">
                <p className="SingleWork__paragraph">{item[`text${index}`]}</p>
                <img src={item[`image${index}`]} alt="" />
              </article>
      })}
    </section>
}

const ChallengesSection = props => {
  let content, arrIMG

  if (props.data === undefined) {
    content = {}
    arrIMG = []
  } else {
    content = props.data
    arrIMG = Object.values(content).splice(1)
  }

  return <section className="SingleWork__challenges">
      {Object.keys(content).length > 0 && <h2 className="heading singleWork__subtitle">
          Challenges
        </h2>}

      {Object.keys(content).length > 0 && <p className="SingleWork__paragraph">
          {content.description}
        </p>}

      <div className="SingleWork__challengesImages">
        {arrIMG.map((image, i) => <img src={image} alt="" key={i} />)}
      </div>
    </section>
}

class SingleWork extends Component {
  constructor() {
    super()

    this.state = { project: {} }
  }

  componentDidMount() {
    axios
      .get("https://res.cloudinary.com/mateoolarte/raw/upload/v1522390393/personal_website/work.json")
      .then(response => {
        this.setState({
          project: response.data.works.find(
            work =>
              work.title.toLowerCase() === this.props.match.params.title
          )
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const project = this.state.project
    const backgroundImage = { backgroundImage: `url(${project.image})` }
    return <section className="singleWork">
        <div className="singleWork__hero" style={backgroundImage}>
          <span className="singleWork__yearLabel">{project.year}</span>
        </div>

        <div className="singleWork__container">
          <header className="singleWork__header">
            <h1 className="singleWork__title">{project.title}</h1>
            <a href={project.url} className="singleWork__link" target="_blank" rel="noopener noreferrer">
              <img src={linkIcon} alt="" /> Visit project
            </a>
            <p className="singleWork__description">{project.description}</p>
          </header>

          <ProcessSection data={project.process} />
          <ChallengesSection data={project.challenges} />

          <a href={project.url} className="singleWork__cta" target="_blank" rel="noopener noreferrer">
            Visit project
          </a>

          <NavLink exact className="singleWork__backWork" to="/work" activeClassName="active">
            <img src={backWorkIcon} alt="" /> Back work
          </NavLink>
        </div>
      </section>
  }
}

export { SingleWork }