const inputs = Array.from(document.querySelectorAll('input'));

inputs.forEach( input => input.addEventListener('focusout', customizeElement.bind(this, input)));

document.querySelector('form').addEventListener('submit', (event) => {
  if (inputs.some( (input) => !input.validity.valid))
    event.preventDefault();
});

function customizeElement(input) {
  if(input.value == '') {
    defaultStyling(input);
  }
  else if (input.validity.valid) {
    validStyling(input);
  }
  else {
    invalidStyling(input)
  }
}

function defaultStyling(input) {
  input.style.borderColor = 'white white rgb(196, 194, 191)';
  span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '';
}

function validStyling(input) {
  input.style.borderColor = 'white white rgb(80, 192, 80)';
  span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '✓';
  span.style.color = 'rgb(80, 192, 80)';
}

function invalidStyling(input) {
  input.style.borderColor = 'white white rgb(216, 107, 107)';
  span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '✖';
  span.style.color = 'rgb(216, 107, 107)';
}
