import React from "react"
import "../styles/Work.css"

export const Work = () => {
  return (
    <section className="work" id="work">
      <h2 className="heading">Work</h2>
      <section className="work__container">
        <article className="work__itemWork">
          <h1 className="work__title">Ecoactua</h1>
          <span className="work__image workEcoctua"></span>
          <a href="" className="work__link">Ver más</a>
        </article>
        <article className="work__itemWork">
          <h1 className="work__title">Expensify</h1>
          <span className="work__image workExpensify"></span>
          <a href="" className="work__link">Ver más</a>
        </article>
      </section>
    </section>
  )
}