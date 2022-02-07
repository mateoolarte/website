export function checkLogo(url = '', website, blog) {
  if (url.includes('blog')) return blog;

  return website;
}

export function setLogo(size, theme) {
  const imgUrlBase = '/assets/images/logo-';
  const url = `${imgUrlBase}${size}-${theme}.png`;

  return url;
}
