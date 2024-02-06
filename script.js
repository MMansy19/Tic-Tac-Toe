const root = document.documentElement;
const levelButtons = document.querySelectorAll('.level__button')
const playerTwoMode = document.querySelector('#two_players')
const playerOneMode = document.querySelector('#one_player')
const h1 = document.querySelectorAll('h1,h2')
const board = document.querySelector('.board')
const reset = document.querySelector('#reset')
const easy = document.querySelector('#easy')
const medium = document.querySelector('#medium')
const hard = document.querySelector('#hard')
const changeLevel = document.querySelector('#change__level')
let cells = [];
let count = 1;
let player = 1;
let currentLevel = null;


const createBoard = (numberOfCells) => {
    board.innerHTML = ''; // Clear the board 

    for (let i = 0; i < numberOfCells; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');

        const spanValue = document.createElement('span');
        spanValue.classList.add('value');

        newCell.appendChild(spanValue);
        board.appendChild(newCell);
        
    }

    cells = board.querySelectorAll('.cell');
};

const getNumberOfCells = (level) => {
    if (level === 'easy') return 9;
    if (level === 'medium') return 16;
    if (level === 'hard') return 25;
};

const resetFunc = () => {
    createBoard(cells.length);
    addClickListeners();
    startLogic();
    count = 1;
};

const checkWinner = (length, char1, char2, char3, char4 = '', char5 = '') => {
    if (char1.childNodes[0].innerText !== '') {
        if (length == 9) {
        if (char1.childNodes[0].innerText == char2.childNodes[0].innerText && char2.childNodes[0].innerText == char3.childNodes[0].innerText) {
            highlightWinningLine([char1, char2, char3]); // Highlight the winning line
            setTimeout(() => { alert(`🎉 Player ${char1.childNodes[0].innerText} is the WINNER! 🏆`);}, 400);
        }
        } else if (length == 16) {
        if (char1.childNodes[0].innerText == char2.childNodes[0].innerText && char2.childNodes[0].innerText == char3.childNodes[0].innerText && char3.childNodes[0].innerText == char4.childNodes[0].innerText) {
            highlightWinningLine([char1, char2, char3, char4]); // Highlight the winning line
            setTimeout(() => { alert(`🎉 Player ${char1.childNodes[0].innerText} is the WINNER! 🏆`);}, 400);
        }
        } else if (length == 25) {
        if (char1.childNodes[0].innerText == char2.childNodes[0].innerText && char2.childNodes[0].innerText == char3.childNodes[0].innerText && char3.childNodes[0].innerText == char4.childNodes[0].innerText && char4.childNodes[0].innerText == char5.childNodes[0].innerText) {
            highlightWinningLine([char1, char2, char3, char4, char5]); // Highlight the winning line
            setTimeout(() => { alert(`🎉 Player ${char1.childNodes[0].innerText} is the WINNER! 🏆`);}, 400);
        }
        }
    }
}

// Function to highlight the winning line
const highlightWinningLine = (lineCells) => {
  lineCells.forEach(cell => {
    // Check if the cell is a valid element
    if (cell && cell.classList) {
      cell.classList.add('cell--win');
    }
  });
}

const makeComputerMove = () => {
    if(player === 1 ){
        // Implement the logic for the computer's move here
        // For simplicity, you can generate a random move for the computer
        const availableCells = Array.from(cells).filter((cell) => !cell.classList.contains('cell--X') && !cell.classList.contains('cell--O'));
        if (availableCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableCells.length);
            const computerCell = availableCells[randomIndex];
            const computerValueSpan = computerCell.querySelector('.value');
            setTimeout(() => {
                computerCell.classList.add('cell--O');
                computerValueSpan.style.display = 'block';
                computerValueSpan.innerText = 'O';
                count = 1;
            }, 800); 

            // Check for a winner after each move
        }
    }
};

const addClickListeners = () => {
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            const valueSpan = cell.querySelector('.value');
            if (!cell.classList.contains('cell--X') && !cell.classList.contains('cell--O') && valueSpan) {
                if (count === 1) {
                    cell.classList.add('cell--X');
                    valueSpan.style.display = 'block';
                    valueSpan.innerText = 'X';
                    count = 0;
                } else if (count === 0) {
                    cell.classList.add('cell--O');
                    valueSpan.innerText = 'O';
                    valueSpan.style.display = 'block';
                    count = 1;
                }
                // After player X makes a move, trigger computer's move (Player O)
                makeComputerMove();
            }
        });
    });
};

const startLogic = ()=> {
    cells.forEach((cell)=>{ 
    cell.addEventListener('click',()=>{
        // =======================================================================================================================================================
        // ======================================================================== First \ line =================================================================
        // =======================================================================================================================================================
    let char1 = cells[0];
    let char2 = cells[(cells.length)**0.5 +1];
    let char3 = cells[((cells.length)**0.5 +1)*2];
    let char4;
    let char5;
    if(cells.length<=9){
        checkWinner(cells.length,char1, char2, char3)
    }
    else if(cells.length<=16){
        char4 = cells[((cells.length)**0.5 +1)*3];
        checkWinner(cells.length,char1, char2, char3, char4);
    }
    else if(cells.length>16){
        char4 = cells[((cells.length)**0.5 +1)*3];
        char5 = cells[((cells.length)**0.5 +1)*4];
        checkWinner(cells.length,char1, char2, char3, char4 , char5);
    }
    // =======================================================================================================================================================
    // ======================================================================== SECOND / line ================================================================
    // =======================================================================================================================================================
    char1 = cells[(cells.length)**0.5 - 1];
    char2 = cells[((cells.length)**0.5 - 1)*2];
    char3 = cells[((cells.length)**0.5 - 1)*3 ];
    if(cells.length>9){
        char4 = cells[((cells.length)**0.5 - 1)*4 ];
    }
    if(cells.length>16){
        char5 = cells[((cells.length)**0.5 - 1)*5 ];
    }            
    checkWinner(cells.length,char1, char2, char3, char4 , char5)
    
    
    for (let i = 0; i < cells.length - (cells.length)**0.5+1; i++) {
        // =======================================================================================================================================================
        // ====================================================================== Horizontal Line ================================================================
        // =======================================================================================================================================================
        char1 = cells[i];
        char2 = cells[i + 1];
         char3 = cells[i + 2];
         
         if(cells.length>9){
             char4 = cells[i + 3];
            }
            if(cells.length>16){
                char5 = cells[i + 4];
            }
        if (i === 0 || i === (cells.length)**0.5 || i === 2 * (cells.length)**0.5) {
            checkWinner(cells.length, char1, char2, char3, char4, char5);
        }
        if (cells.length > 9 && i === 3 * (cells.length)**0.5) {
            checkWinner(cells.length, char1, char2, char3, char4, char5);
        }
        if (cells.length > 16 && i === 4 * (cells.length)**0.5) {
            checkWinner(cells.length, char1, char2, char3, char4, char5);
        }

        }       
        // =======================================================================================================================================================
        // ====================================================================== Vertical Line ================================================================
        // =======================================================================================================================================================
        for (let i = 0; i < cells.length - (cells.length)**0.5 +1; i++) {
            char1 = cells[i];
            char2 = cells[i + (cells.length)**0.5];
                char3 = cells[i + ((cells.length)**0.5)*2];
                if(cells.length>9){
                    char4 = cells[i + ((cells.length)**0.5)*3];
                }
                if(cells.length>16){
                    char5 = cells[i + ((cells.length)**0.5)*4];
                }
                
                if(i===0 ||i===1 || i===2){
                    checkWinner(cells.length,char1, char2, char3, char4 , char5)
                }
                if(cells.length>9 && i=== 3){
                    checkWinner(cells.length,char1, char2, char3, char4 , char5)
                }
                if(cells.length>16 && i=== 4){
                    checkWinner(cells.length,char1, char2, char3, char4 , char5)
                }
            }
        // =======================================================================================================================================================
        // ======================================================================== Check Draw ===================================================================
        // =======================================================================================================================================================
        let counter = 0;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].childNodes[0].innerText !== '' && !cells[i].classList.contains('cell--win')){
                counter += 1;
            }
        }
        if (counter === cells.length){
            setTimeout(() => { alert(`It's a draw! 🤝 Play again for another chance to win!`);}, 400);
        }

        });
});
}

const reload = ()=>{
    board.style.display='none';
    reset.style.display='none';
        h1.forEach((h1)=>{
        h1.style.display='block';
    })
    changeLevel.style.display='none';
    levelButtons.forEach((button)=>{
        button.style.display='block';
    })
}

const editPage = ()=>{
    board.style.display='grid';
    reset.style.display='block';
        h1.forEach((h1)=>{
        h1.style.display='none';
    })
    changeLevel.style.display='block';
    levelButtons.forEach((button)=>{
        button.style.display='none';
    })
}

playerTwoMode.addEventListener('click',()=>{
    playerTwoMode.classList.add('active')
    playerOneMode.classList.remove('active')
    player = 2;
});
playerOneMode.addEventListener('click',()=>{
    playerOneMode.classList.add('active')
    playerTwoMode.classList.remove('active')
    player = 1;
});

changeLevel.addEventListener('click', () => {reload();});

easy.addEventListener('click', () => {
    editPage();
    currentLevel = 'easy';
    root.style.setProperty('--grid-rows', '3');
    createBoard(9);
    addClickListeners();
    startLogic();
});

medium.addEventListener('click', () => {
    editPage();
    currentLevel = 'medium';
    root.style.setProperty('--grid-rows', '4');
    createBoard(16);
    addClickListeners();
    startLogic();
});

hard.addEventListener('click', () => {
    editPage();
    currentLevel = 'hard';
    root.style.setProperty('--grid-rows', '5');
    createBoard(25);
    addClickListeners();
    startLogic();
});

reset.addEventListener('click', () => {
    resetFunc();
});