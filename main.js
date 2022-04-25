let indexValue = 1;

showImage(indexValue);

function slide(e) {
  showImage(indexValue += e);
}

function showImage(e) {
  let i;
  const img = document.querySelectorAll('section');
  if(e>img.length) {
    indexValue = 1;
  }
  if(e<1) {
    indexValue = img.length;
  }

  for (i=0; i<img.length; i++) {
    img[i].style.display = 'none';
  }
  img[indexValue-1].style.display = 'flex';
}