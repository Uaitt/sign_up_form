const nonPasswordInputs = Array.from(document.querySelectorAll('input:not([type=password])'));
const passwordInputs = Array.from(document.querySelectorAll('input[type=password]'));
const form = document.querySelector('form');

nonPasswordInputs.forEach(input => input.addEventListener('focusout', customizeElement.bind(this, input)));
passwordInputs.forEach(input => input.addEventListener('focusout', customizePassword.bind(this, input)));

// don't submit the form if there is an invalid input and show the invalid fields
form.addEventListener('submit', event => {
  if (nonPasswordInputs.some(input => !input.validity.valid)
      || passwordInputs.some(input => !input.validity.valid))
    event.preventDefault();

    passwordInputs.concat(nonPasswordInputs).forEach(input => {
      if (!input.validity.valid)
        setInvalidStyling(input);
    })
});

function customizeElement(input) {
  if(input.value == '')
    setDefaultStyling(input);
  else if (input.validity.valid)
    setValidStyling(input);
  else
    setInvalidStyling(input);
}

function customizePassword(input) {
  if(input.value == '')
    setDefaultStyling(input);
  else if(passwordValid(input) || passwordMatches(input))
    setValidStyling(input);
  else {
    setInvalidStyling(input);
    // make field invalid
    input.setCustomValidity('sdf')
  }
}

function setDefaultStyling(input) {
  input.style.borderColor = 'white white rgb(196, 194, 191)';

  const span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '';
}

function setValidStyling(input) {
  input.style.borderColor = 'white white rgb(80, 192, 80)';

  const span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '✓';
  span.style.color = 'rgb(80, 192, 80)';
}

function setInvalidStyling(input) {
  input.style.borderColor = 'white white rgb(216, 107, 107)';

  const span = document.querySelector(`span#${input.getAttribute('id')}`);
  span.innerHTML = '×';
  span.style.color = 'rgb(216, 107, 107)';
}

function passwordValid(input) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/;
  return input.getAttribute('name') == 'user-password' && passwordPattern.test(input.value);
}

function passwordMatches(input) {
  return (input.getAttribute('name') == 'user-confirm-password'
          && input.value == document.querySelector('input[name=user-password').value);
}
