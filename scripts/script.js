const inputs = Array.from(document.querySelectorAll('input'))

inputs.forEach( input => {
  input.addEventListener('focusout', checkValidity.bind(this, input))
})

document.querySelector('form').addEventListener("submit", (event) => {
  if (inputs.some( (input) => !input.validity.valid)) {
    event.preventDefault();
  }
});

function checkValidity(input) {
  if(input.value == '') {
    input.style.borderColor = 'white white rgb(196, 194, 191)'
    span = document.querySelector(`span#${input.getAttribute('id')}`)
    span.innerHTML = ""
  }
  else if (input.validity.valid) {
    input.style.borderColor = 'white white rgb(80, 192, 80)'
    span = document.querySelector(`span#${input.getAttribute('id')}`)
    span.innerHTML = "✓"
    span.style.color = "rgb(80, 192, 80)"
  }
  else {
    input.style.borderColor = 'white white rgb(216, 107, 107)'
    span = document.querySelector(`span#${input.getAttribute('id')}`)
    span.innerHTML = "✖"
    span.style.color = "rgb(216, 107, 107)"
  }
}
