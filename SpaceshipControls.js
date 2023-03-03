const lane = document.querySelectorAll('td');
var currentIndex = 0;
lane[currentIndex].innerHTML = '<object class="spaceship" type="image/svg+xml" data="spaceship.svg"></object>';
//Contrôles du vaisseau//

//Mouvement vers la gauche//
document.addEventListener('keydown', event => {
  if (event.key == 'ArrowLeft') {
    if (currentIndex > 0) {
      lane[currentIndex].innerHTML = '';
      currentIndex--;
      lane[currentIndex].innerHTML = '<object class="spaceship" type="image/svg+xml" data="spaceship.svg"></object>';
    }
//Mouvement vers la droite//
  } else if (event.key == 'ArrowRight') {
    if (currentIndex < lane.length - 1) {
      lane[currentIndex].innerHTML = '';
      currentIndex++;
      lane[currentIndex].innerHTML = '<object class="spaceship" type="image/svg+xml" data="spaceship.svg"></object>';
    }
  }
});