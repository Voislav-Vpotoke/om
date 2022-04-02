const buttonElem = document.getElementById('myBtn');
 
let onButtonClick = function() {
buttonElem.textContent = 'Спасибо за клик'
}

buttonElem.addEventListener('click', onButtonClick);  
  