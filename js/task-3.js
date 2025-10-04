const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const noSpace = input.value.trim();
  output.textContent = noSpace === '' ? 'Anonymous' : noSpace;
});
