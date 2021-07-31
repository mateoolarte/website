import GithubIcon from "../../../images/icons/github";
import LinkedinIcon from "../../../images/icons/linkedin";
import TwitterIcon from "../../../images/icons/twitter";
import MailIcon from "../../../images/icons/mail";

const socialLinks = [
  {
    id: 1,
    link: "https://github.com/mateoolarte",
    Icon: GithubIcon,
  },
  {
    id: 2,
    link: "https://twitter.com/mateo_olarte",
    Icon: TwitterIcon,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/mateoolarte/",
    Icon: LinkedinIcon,
  },
  {
    id: 4,
    link: "mailto:mateo.olarte8@gmail.com",
    Icon: MailIcon,
  },
];

const info = {
  es: {
    heading: "¿Interesado en hablar conmigo?",
    subtitle: "Contactame en:",
    madeBy: "Hecho con",
    in: "en ",
  },
  en: {
    heading: "Are you interested in talking with me?",
    subtitle: "Contact me on:",
    madeBy: "Made with",
    in: "in ",
  },
};

export { socialLinks, info };
