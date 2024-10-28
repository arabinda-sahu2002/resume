function printAndEnter() {
  window.print();

  // Simulate an Enter key press
  const event = new KeyboardEvent('keydown', {
    key: 'Enter',
    code: 'Enter',
    keyCode: 13
  });

  document.dispatchEvent(event);
}

// Create a button element
const printEnterButton = document.createElement('printButton');
printEnterButton.textContent = 'Print Page';
printEnterButton.addEventListener('click', printAndEnter);

// Append the button to your desired element, for example, the body:
document.body.appendChild(printEnterButton);