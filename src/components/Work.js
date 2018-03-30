import React from "react"
import { Link } from "react-router-dom"
import "../styles/Work.css"

const Work = props => {
  return (
    <section className="work">
      <h2 className="heading">Work</h2>

      <section className="work__container">

        { props.works.map(work => {
          let backgroundImage = { backgroundImage: `url(${work.thumbnail})` }

          return (
            <article className="work__itemWork" key={work.id}>
              <h1 className="work__title">{work.title}</h1>
              <span className="work__image" style={backgroundImage} />
              <Link className="work__link" to={`/project/${work.title.toLowerCase()}`}>
                Ver más
              </Link>
            </article>
          )

        }) }

      </section>
    </section>
  )
}

export { Work }