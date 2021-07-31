import HomeIcon from "../images/icons/home.js";
import AboutIcon from "../images/icons/about.js";
import ProjectsIcon from "../images/icons/projects.js";
import BlogIcon from "../images/icons/blog.js";
import LatestPostIcon from "../images/icons/latest-post.js";

export const websiteLinks = [
  {
    id: 1,
    label: "Home",
    link: "/",
    Icon: HomeIcon,
  },
  {
    id: 2,
    label: "About",
    link: "/about",
    Icon: AboutIcon,
  },
  {
    id: 3,
    label: "Projects",
    link: "/#projects",
    Icon: ProjectsIcon,
  },
  {
    id: 4,
    label: "Blog",
    link: "/blog",
    Icon: BlogIcon,
  },
];

export const blogLinks = [
  {
    id: 1,
    label: "Inicio",
    link: "/blog",
    Icon: BlogIcon,
  },
  {
    id: 2,
    label: "Último post",
    Icon: LatestPostIcon,
  },
  {
    id: 3,
    label: "Sitio web",
    link: "/",
    Icon: HomeIcon,
    highlight: true,
  },
];
