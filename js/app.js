const arrows = document.querySelector('.left-content');

arrows.addEventListener('click', e => {
  // read the classes
  const menuClass = e.target.classList;
  //selec the container
  const container = document.querySelector('.app'),
    leftArrow = document.querySelector('.fa-arrow-left'),
    rightArrow = document.querySelector('.fa-arrow-right');
  // hide / show the arrows
  if (menuClass.contains('fa-arrow-left')) {
    container.classList.add('no-menu');
    e.target.style.display = 'none';
    rightArrow.style.display = 'block';
  } else if (menuClass.contains('fa-arrow-right')) {
    container.classList.remove('no-menu');
    e.target.style.display = 'none';
    leftArrow.style.display = 'block';
  }
});
