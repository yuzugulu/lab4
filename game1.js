let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;


const makeMove = (cell, index) => {
    if (board[index] !== '' || !gameActive) {
    return;
    }
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.classList.add('taken');
    checkWinner();
}

const checkWinner = () =>{
const winningCombinations = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
[0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
[0, 4, 8], [2, 4, 6] // Diagonals
];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('status').innerText = `Player ${currentPlayer} Wins!`;
            displayModal('Player '+currentPlayer+' Wins!');
            gameActive = false;
            return;
         }
    }

    if (!board.includes('')) {
        document.getElementById('status').innerText = 'Draw!';
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

const resetGame  = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('status').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('taken');
    });
}



// Display modal function
function displayModal(message) {
    // Get the modal element
    const modal = document.getElementById('myModal');
    // Get the modal message element
    const modalMessage = document.getElementById('modal-message');
    // Set the message content
    modalMessage.textContent = message;
    // Display the modal
    modal.style.display = 'block';
  }
  
  // Close modal function
  function closeModal() {
    // Get the modal element
    const modal = document.getElementById('myModal');
    // Hide the modal
    modal.style.display = 'none';
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      closeModal();
    }
  }
  
  