document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.input-field');

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validateInputs(inputs);
    });
  });
});

function validateInputs(inputs) {
  const values = Array.from(inputs).map((input) => input.value);
  const errorMessages = document.querySelectorAll('.error-message');

  inputs.forEach((input, index) => {
    const value = input.value;
    let errorMessage = '';

    if (!value) {
      errorMessage = 'empty';
    } else if (values.filter((v) => v === value).length > 1) {
      errorMessage = 'duplicate';
    } else if (value.length > 10) {
      errorMessage = 'overlength';
    }

    errorMessages[index].textContent = errorMessage;
  });
}
