window.addEventListener('orientationchange', toggleLandscape);

function toggleLandscape() {
  const orientation = window.screen.orientation.type;
  let $body = document.getElementById('body');

  if(orientation == 'landscape-primary' || orientation == 'landscape-secondary') {
    $body.classList.add('landscape');
  } else if (orientation == 'portrait-primary' || orientation == 'portrait-secondary') {
    $body.classList.remove('landscape');
  }
}
