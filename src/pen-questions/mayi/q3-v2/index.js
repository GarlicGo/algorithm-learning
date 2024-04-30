// script.js
document.addEventListener('DOMContentLoaded', () => {
  const inputElements = document.querySelectorAll('.input-field');

  inputElements.forEach(input => {
      input.('input', () => {
          validateInputs(inputElements);
      });
  });
});

function validateInputs(inputs) {
  clearErrorMessages(inputs);
  checkForEmptyInputs(inputs);
  checkForDuplicateInputs(inputs);
  checkForOverlengthInputs(inputs);
}

function clearErrorMessages(inputs) {
  inputs.forEach(input => {
      input.nextElementSibling.textContent = '';
  });
}

function checkForEmptyInputs(inputs) {
  inputs.forEach(input => {
      if (input.value === '') {
          input.nextElementSibling.textContent = 'empty';
      }
  });
}

function checkForDuplicateInputs(inputs) {
  let valueCount = {};
  inputs.forEach(input => {
      if (!valueCount[input.value]) {
          valueCount[input.value] = 1;
      } else {
          valueCount[input.value]++;
      }
  });

  inputs.forEach(input => {
      if (valueCount[input.value] > 1) {
          input.nextElementSibling.textContent = 'duplicate';
      }
  });
}

function checkForOverlengthInputs(inputs) {
  inputs.forEach(input => {
      if (input.value.length > 10) {
          input.nextElementSibling.textContent = 'overlength';
      }
  });
}
