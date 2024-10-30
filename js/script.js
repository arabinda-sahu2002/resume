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
document.body.appendChild(printEnterButton);

// Get all project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
    card.style.transform = 'scale(1.02)';
  });

  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
    card.style.transform = 'scale(1)';
  });
});

// Get all education cards
const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
    card.style.transform = 'scale(1.02)';
  });

  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
    card.style.transform = 'scale(1)';
  });
});

// Get all skill cards
const skillCards = document.querySelectorAll('.skill');
skillCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
    card.style.transform = 'scale(1.02)';
  });

  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
    card.style.transform = 'scale(1)';
  });
});