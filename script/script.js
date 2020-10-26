'use strict';

const text = document.querySelector('#color'),
      buttonChange = document.querySelector('#change');



let randonColor = () => {
  let color = '';
  for (let i =0; i<3; i++){
    let a = Math.floor(Math.random()*256).toString(16);
    color +=(a.length === 1 ? '0' + a : a);
  }
  text.textContent = '#' + color;
  document.body.style.background = '#' + color;
  
};



buttonChange.addEventListener('click',randonColor);

