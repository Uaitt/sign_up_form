const inputs = document.querySelectorAll('input')


inputs.forEach( input => {
  input.addEventListener('focusout', checkValidity.bind(this, input))
});

function checkValidity(input) {
  if(input.validity.valid) {
    input.style.borderColor = 'white white green'
    span = document.querySelector('span#name')
    span.innerHTML += "h"
  }
  else {
    input.style.borderColor = 'white white red'
  }
}
