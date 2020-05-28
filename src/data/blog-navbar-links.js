import BlogIcon from "../images/icons/blog.js";
import LatestPostIcon from "../images/icons/latest-post.js";
import HomeIcon from "../images/icons/home.js";

const items = [
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

export default items;
