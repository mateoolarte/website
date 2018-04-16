import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Work.css";

import DataProjects from "./DataProjects";

function ItemWork({ work }) {
  let backgroundImage = { backgroundImage: `url(${work.thumbnail})` };
  return (
    <article className="work__itemWork" key={work.id}>
      <h1 className="work__title">{work.title}</h1>
      <span className="work__image" style={backgroundImage} />
      <Link className="work__link" to={`/project/${work.title.toLowerCase()}`}>
        Ver más
      </Link>
    </article>
  );
}

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      works: DataProjects
    };
  }

  render() {
    return (
      <section className="work">
        <h2 className="heading">Work</h2>

        <section className="work__container">
          {this.state.works.map(work => <ItemWork work={work} key={work.id} />)}
        </section>
      </section>
    );
  }
}

export default Work;
