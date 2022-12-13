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
  else if (input.validity.valid && input.getAttribute('type') != 'password' || passwordValid(input)) {
    validStyling(input);
  }
  else {
    invalidStyling(input);
  }
}

function defaultStyling(input) {
  input.style.borderColor = 'white white rgb(196, 194, 191)';
  let span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '';
}

function validStyling(input) {
  input.style.borderColor = 'white white rgb(80, 192, 80)';
  let span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '✓';
  span.style.color = 'rgb(80, 192, 80)';
}

function invalidStyling(input) {
  input.style.borderColor = 'white white rgb(216, 107, 107)';
  let span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '✖';
  span.style.color = 'rgb(216, 107, 107)';
}

function passwordValid(input) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
  return input.getAttribute('name') == 'user_password' && passwordPattern.test(input.value)
}
