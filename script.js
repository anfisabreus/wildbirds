const flamingo = document.querySelector('.flamingo-button');
  const macaw = document.querySelector('.macaw-button');
  const colibri = document.querySelector('.colibri-button');


const addClass = (birdOne, birdTwo, birdThree) => {
  let bg = document.querySelector('.main');

  bg.classList.add(birdOne);
  bg.classList.remove(birdTwo, birdThree);
  
  let image = document.querySelector('.bird-image');
  image.classList.add('image-' + birdOne);
  image.classList.remove('image-' + birdTwo, 'image-' + birdThree);

  let text = document.querySelector('section');
  text.classList.add('text-' + birdOne[0].toUpperCase() + birdOne.slice(1));
  text.classList.remove('text-' + birdTwo[0].toUpperCase() + birdTwo.slice(1), 'text-' + birdThree[0].toUpperCase() + birdThree.slice(1));
}


console.log(flamingo.addEventListener('click', addClass('flamingo', 'macaw','colibri'), false));