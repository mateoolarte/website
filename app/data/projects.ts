const imgUrlBase = '/assets/images/projects/';

const iconGrowly = `${imgUrlBase}icon-growly.png`;
const bgGrowly = `${imgUrlBase}bg-growly.jpg`;

const iconGuruhotel = `${imgUrlBase}icon-guruhotel.svg`;
const bgGuruhotel = `${imgUrlBase}bg-guruhotel.jpg`;

const iconServillantas = `${imgUrlBase}icon-servillantas.png`;
const bgServillantas = `${imgUrlBase}bg-servillantas.jpg`;

const iconEcoactua = `${imgUrlBase}icon-ecoactua.svg`;
const bgEcoactua = `${imgUrlBase}bg-ecoactua.jpg`;

export const projects = [
  {
    id: 1,
    name: 'Growly',
    icon: iconGrowly,
    bgImage: bgGrowly,
    date: '2021',
    role: 'Co-founder / Developer',
    description:
      'Create a website for your company, We are in charge of improving your digital presence',
    link: 'https://getgrowly.com/',
  },
  {
    id: 2,
    name: 'Guruhotel',
    icon: iconGuruhotel,
    bgImage: bgGuruhotel,
    date: '2020',
    role: 'Freelance / Developer',
    description:
      'The Shopify for the hotel industry. Independent hotels use our software to rebuild their hotel website.',
    link: 'https://guruhotel.com/',
  },
  {
    id: 3,
    name: 'Servillantas',
    icon: iconServillantas,
    bgImage: bgServillantas,
    date: '2020',
    role: 'Full stack developer',
    description:
      'Web application where you can search, list, manage products through admin panel and contact an adviser.',
    link: 'https://servillantasla57.com/',
  },
  {
    id: 4,
    name: 'Ecoactua',
    icon: iconEcoactua,
    bgImage: bgEcoactua,
    date: '2019',
    role: 'Creator / Developer',
    description:
      'Web application to report environmental issues in your city. Solved by local authorities.',
    link: 'https://ecoactua.herokuapp.com/#/',
  },
];
