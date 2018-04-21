import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";
import DataProjects from "./DataProjects";

import "../styles/SingleWork.css";
const linkIcon =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1522196895/personal_brand/assets/link.svg";
const backWorkIcon =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1522214166/personal_brand/assets/back-work.svg";

function Process({ data }) {
  let content;

  data === undefined ? (content = []) : (content = data);

  return (
    <section className="singleWork__process">
      <div className="singleWork__container">
        {content.length > 0 && (
          <h2 className="heading singleWork__subtitle">Process</h2>
        )}

        {content.map((item, i) => {
          let index = i + 1;
          return (
            <article key={i} className="singleWork__processItem">
              <p className="singleWork__paragraph">{item[`text${index}`]}</p>
              <img
                src={item[`image${index}`]}
                className="singleWork__image"
                alt=""
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Challenges({ data }) {
  let content, arrIMG;

  if (data === undefined) {
    content = {};
    arrIMG = [];
  } else {
    content = data;
    arrIMG = Object.values(content).splice(1);
  }

  return (
    <section className="singleWork__challenges">
      <div className="singleWork__container">
        {Object.keys(content).length > 0 && (
          <h2 className="heading singleWork__subtitle">Challenges</h2>
        )}

        {Object.keys(content).length > 0 && (
          <p className="singleWork__paragraph">{content.description}</p>
        )}

        <div className="singleWork__challengesImages">
          {arrIMG.map((image, i) => (
            <img src={image} className="singleWork__image" alt="" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

class SingleWork extends Component {
  constructor() {
    super();

    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    this.setState({
      project: DataProjects.find(
        project => project.title.toLowerCase() === this.props.match.params.title
      )
    });
  }

  render() {
    const project = this.state.project;
    const backgroundImage = { backgroundImage: `url(${project.image})` };
    return (
      <Fragment>
        <Header />
        <Nav />

        <section className="singleWork">
          <div className="singleWork__hero" style={backgroundImage}>
            <span className="singleWork__yearLabel">{project.year}</span>
          </div>

          <div className="singleWork__container">
            <header className="singleWork__header">
              <h1 className="singleWork__title">{project.title}</h1>
              <a
                href={project.url}
                className="singleWork__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkIcon} alt="" /> Visit project
              </a>
              <p className="singleWork__description">{project.description}</p>
            </header>
          </div>

          <Process data={project.process} />

          <Challenges data={project.challenges} />

          <div className="text-center">
            <a
              href={project.url}
              className="singleWork__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project
            </a>
          </div>

          <NavLink
            exact
            className="singleWork__backWork"
            to="/work"
            activeClassName="active"
          >
            <img src={backWorkIcon} alt="" /> Back work
          </NavLink>
        </section>
      </Fragment>
    );
  }
}

export default SingleWork;
