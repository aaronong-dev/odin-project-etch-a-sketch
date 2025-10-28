const container = document.getElementById('grid-container');

for (let i = 0; i < 16 * 16; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'orange';
    });

    container.appendChild(square);
}

const gridButton = document.getElementById('new-grid-btn');
let gridSize = 16;

gridButton.addEventListener('click', () => {

    let userValue;

    // Create Overlay
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    // Create PopUp
    const popUp = document.createElement('div');
    popUp.classList.add('popUp');
    popUp.textContent = 'How many squares per side would you like?';

    // Create Input Field
    const inputField = document.createElement('input');
    inputField.textContent = 'Enter here';
    inputField.classList.add('input-field')

    // Create Submit Button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('submitButton');



    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.classList.add('close-btn');
    closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

    submitButton.addEventListener('click', () => {
        gridSize = parseInt(inputField.value);
        if(!gridSize || gridSize <= 0) {
            alert ('Please enter a valid number greater than 0');
            return;
        } else if (gridSize >= 100) {
            alert ('Number cannot be greater than 100')
            return;
        }
        
        createGrid(gridSize);
        document.body.removeChild(overlay);
    })

  
  popUp.appendChild(closeBtn);
  popUp.appendChild(inputField);
  popUp.appendChild(submitButton);

  overlay.appendChild(popUp);
  document.body.appendChild(overlay);


});

createGrid(gridSize);

function createGrid(size) {
    const container = document.getElementById('grid-container');

    container.innerHTML = '';

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(${size}, 1fr)';
    container.style.gridTemplateRows = 'repeat(${size}, 1fr)';
    container.style.width = '960px';
    container.style.height = '960px';
    container.style.border = '1px solid #ccc';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.border = '1px solid #eee';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'orange';
        });
        container.appendChild(square);
    }
}



