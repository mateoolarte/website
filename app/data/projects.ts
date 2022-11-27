const imgUrlBase = '/assets/images/projects/';

const iconGrowly = `${imgUrlBase}icon-growly.png`;
const bgGrowly = `${imgUrlBase}bg-growly.jpg`;

const iconGuruhotel = `${imgUrlBase}icon-guruhotel.svg`;
const bgGuruhotel = `${imgUrlBase}bg-guruhotel.jpg`;

const iconEcoactua = `${imgUrlBase}icon-ecoactua.svg`;
const bgEcoactua = `${imgUrlBase}bg-ecoactua.jpg`;

export const projects = [
  {
    id: 2,
    name: 'Growly',
    icon: iconGrowly,
    bgImage: bgGrowly,
    date: '2021',
    role: 'Co-founder / Developer',
    description:
      'Create a website for your company, We are in charge of improving your digital presence',
    link: 'https://getgrowly.com',
  },
  {
    id: 3,
    name: 'Guruhotel',
    icon: iconGuruhotel,
    bgImage: bgGuruhotel,
    date: '2020',
    role: 'Freelance / Developer',
    description:
      'The Shopify for the hotel industry. Independent hotels use our software to rebuild their hotel website.',
    link: 'https://guruhotel.com',
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
    link: 'https://ecoactua.up.railway.app/#/',
  },
];
