import HomeIcon from '@/icons/home';
import AboutIcon from '@/icons/about';
import BlogIcon from '@/icons/blog';
import LatestPostIcon from '@/icons/latest-post';

export const websiteLinks = [
  {
    id: 1,
    label: 'Home',
    link: '/',
    Icon: HomeIcon,
  },
  {
    id: 2,
    label: 'About',
    link: '/about',
    Icon: AboutIcon,
  },
  {
    id: 3,
    label: 'Blog',
    link: '/blog',
    Icon: BlogIcon,
  },
];

export const blogLinks = [
  {
    id: 1,
    label: 'Inicio',
    link: '/blog',
    Icon: BlogIcon,
  },
  // TODO: Add support to get latest post
  // {
  //   id: 2,
  //   label: 'Último post',
  //   Icon: LatestPostIcon,
  // },
  {
    id: 2,
    label: 'Sitio web',
    link: '/',
    Icon: HomeIcon,
    highlight: true,
  },
];
