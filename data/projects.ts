import { IMG_URL_BASE } from "@/utils/constants";

const pathProjects = `${IMG_URL_BASE}projects/`;

const iconMiconomy = `${pathProjects}icon-miconomy.svg`;
const bgMiconomy = `${pathProjects}bg-miconomy.jpg`;

const iconGrowly = `${pathProjects}icon-growly.png`;
const bgGrowly = `${pathProjects}bg-growly.jpg`;

const iconGuruhotel = `${pathProjects}icon-guruhotel.svg`;
const bgGuruhotel = `${pathProjects}bg-guruhotel.jpg`;

const iconEcoactua = `${pathProjects}icon-ecoactua.svg`;
const bgEcoactua = `${pathProjects}bg-ecoactua.jpg`;

export const projects = [
  {
    id: 1,
    name: "Miconomy",
    icon: iconMiconomy,
    bgImage: bgMiconomy,
    role: "Creator / Developer",
    description: "Personal finance tracker",
    link: "https://miconomy.up.railway.app",
  },
  {
    id: 2,
    name: "Growly",
    icon: iconGrowly,
    bgImage: bgGrowly,
    role: "Co-founder / Developer",
    description:
      "Create a website for your company, We are in charge of improving your digital presence",
    link: "https://getgrowly.com",
  },
  {
    id: 3,
    name: "Guruhotel",
    icon: iconGuruhotel,
    bgImage: bgGuruhotel,
    role: "Freelance / Developer",
    description:
      "The Shopify for the hotel industry. Independent hotels use our software to rebuild their hotel website.",
    link: "https://guruhotel.com",
  },
  {
    id: 4,
    name: "Ecoactua",
    icon: iconEcoactua,
    bgImage: bgEcoactua,
    role: "Creator / Developer",
    description:
      "Web application to report environmental issues in your city. Solved by local authorities.",
    link: "https://ecoactua.up.railway.app/#/",
  },
];
