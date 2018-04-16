import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h2 className="heading">About me</h2>
      <p className="about__paragraph">
        I’m passionate about technology, especially web development. I like to
        create, to share and to keep learning every day of my life. I love to
        venture myself into new challenges and to solve problems with positive
        impact on the people.
      </p>
      <p className="about__paragraph">
        I focus on usability and development with an especial interest in the
        creation of products that improve people’s lives when they use them, My
        priority is to deliver products with a standard process and small
        iterations in order to achieve great results. The usability and
        navigation of the products are very important because I think the user
        is the center of the product.
      </p>
      <p className="about__paragraph">
        The development process is special because in it is where all pieces of
        the puzzle are placed in the correct order to create all features and
        requirements. The delivering process stage is also important because
        that’s where I give life to the product and it can be tested.
      </p>
      <p className="about__paragraph">
        My favorite and common technologies are:
      </p>
      <ul className="about__skills">
        <li>
          <strong>Languages:</strong> HTML - CSS - Javascript - Ruby.
        </li>
        <li>
          <strong>Tools:</strong> GulpJS - SASS - Git - Twig - Heroku.
        </li>
        <li>
          <strong>Frameworks:</strong> Bootstrap 4 - Jquery - AJAX - Sinatra -
          Ruby on Rails - Wordpress - ReactJS.
        </li>
        <li>
          <strong>Methodologies:</strong> BEM - Responsive design - Redux - TDD - REST
          API’s - Scrum.
        </li>
      </ul>
    </section>
  );
}

export default About;
