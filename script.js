const root = document.documentElement;
const board = document.querySelector('.board')
let cells = board.querySelectorAll('.cell');
const reset = document.querySelector('#reset')
const easy = document.querySelector('#easy')
const medium = document.querySelector('#medium')
const hard = document.querySelector('#hard')

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
}


const resetFunc = ()=>{
    cells.forEach((cell)=>{
        count = 1;
        cell.classList.remove('cell--X');
        cell.classList.remove('cell--O');
        cell.childNodes[1].innerText = '';
        cell.childNodes[1].style.display = 'none';
    });
}

const checkWinner = (length, char1, char2, char3, char4='' , char5='')=>{
                if(length == 9){
                    if(char1 == char2 && char2 == char3){
                        if(char1 === 'X'){
                                setTimeout(() => {alert('Congrats, Player X Wins');resetFunc(); }, 300); }
                        else if(char1 === 'O'){setTimeout(() => {alert('Congrats, Player O Wins');resetFunc(); }, 300); }        
                    }
                }
                else if(length == 16){
                    if(char1 == char2 && char2 == char3 && char3 == char4){
                        if(char1 === 'X'){
                                setTimeout(() => {alert('Congrats, Player X Wins');resetFunc(); }, 300); }
                        else if(char1 === 'O'){setTimeout(() => {alert('Congrats, Player O Wins');resetFunc(); }, 300); }        
                    }
                }
                else {
                    if(char1 == char2 && char2 == char3 && char3 == char4 && char4 == char5){
                        if(char1 === 'X'){
                                setTimeout(() => {alert('Congrats, Player X Wins');resetFunc(); }, 300); }
                        else if(char1 === 'O'){setTimeout(() => {alert('Congrats, Player O Wins');resetFunc(); }, 300); }        
                    }
                }
}

easy.addEventListener('click',() => {
    root.style.setProperty('--grid-rows','3');
    createBoard(9);
    // cells = board.querySelectorAll('.cell');
});
medium.addEventListener('click',() => {
    root.style.setProperty('--grid-rows','4');
    createBoard(16);
    // cells = board.querySelectorAll('.cell');
});
hard.addEventListener('click',() => {
    root.style.setProperty('--grid-rows','5');
    createBoard(25);
    // cells = board.querySelectorAll('.cell');
});


let count = 1 ; 
// cells = board.querySelectorAll('.cell');
cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        if(!cell.classList.contains('cell--X') && !cell.classList.contains('cell--O') ){
        if(count===1){
            cell.classList.add('cell--X');
            cell.childNodes[1].style.display = 'block';
            cell.childNodes[1].innerText = 'X';
            count = 0;
        }
        else if(count===0){
        cell.classList.add('cell--O');
        cell.childNodes[1].innerText = 'O';
        cell.childNodes[1].style.display = 'block';
        count = 1;
    }
        }
});
});



cells.forEach((cell)=>{ 
cell.addEventListener('click',()=>{
    // =======================================================================================================================================================
    // ======================================================================== First \ line =================================================================
    // =======================================================================================================================================================
    let char1 = cells[0].childNodes[1].innerText;
    let char2 = cells[(cells.length)**0.5 +1].childNodes[1].innerText;
    let char3 = cells[((cells.length)**0.5 +1)*2].childNodes[1].innerText;
    let char4;
    let char5;
    if(cells.length<=9){
        checkWinner(cells.length,char1, char2, char3)
    }
    else if(cells.length<=16){
        char4 = cells[((cells.length)**0.5 +1)*3].childNodes[1].innerText;
        checkWinner(cells.length,char1, char2, char3, char4);
    }
    else if(cells.length>16){
        char5 = cells[((cells.length)**0.5 +1)*4].childNodes[1].innerText;
        checkWinner(cells.length,char1, char2, char3, char4 , char5);
    }
    // =======================================================================================================================================================
    // ======================================================================== SECOND / line ================================================================
    // =======================================================================================================================================================
    char1 = cells[(cells.length)**0.5 - 1].childNodes[1].innerText;
    char2 = cells[((cells.length)**0.5 - 1)*2].childNodes[1].innerText;
    char3 = cells[((cells.length)**0.5 - 1)*3 ].childNodes[1].innerText;
    if(cells.length>9){
        char4 = cells[((cells.length)**0.5 - 1)*4 ].childNodes[1].innerText;
    }
    if(cells.length>16){
        char5 = cells[((cells.length)**0.5 - 1)*5 ].childNodes[1].innerText;
    }            
    checkWinner(cells.length,char1, char2, char3, char4 , char5)
    
    
    for (let i = 0; i < cells.length - (cells.length)**0.5+1; i++) {
        // =======================================================================================================================================================
        // ====================================================================== Horizontal Line ================================================================
        // =======================================================================================================================================================
         char1 = cells[i].childNodes[1].innerText;
         char2 = cells[i + 1].childNodes[1].innerText;
         char3 = cells[i + 2].childNodes[1].innerText;
         
         if(cells.length>9){
             char4 = cells[i + 3].childNodes[1].innerText;
            }
            if(cells.length>16){
                char5 = cells[i + 4].childNodes[1].innerText;
            }
        if(i===0 || i=== (cells.length)**0.5 || i===((cells.length)**0.5)*2){
            checkWinner(cells.length,char1, char2, char3, char4 , char5)
                }
         if(cells.length>9 && i===((cells.length)**0.5)*3){
            checkWinner(cells.length,char1, char2, char3, char4 , char5)
                }
         if(cells.length>16 && i===((cells.length)**0.5)*4){
            checkWinner(cells.length,char1, char2, char3, char4 , char5)
                }
            }       
            // =======================================================================================================================================================
            // ====================================================================== Vertical Line ================================================================
            // =======================================================================================================================================================
            for (let i = 0; i < cells.length - (cells.length)**0.5 +1; i++) {
                char1 = cells[i].childNodes[1].innerText;
                char2 = cells[i + (cells.length)**0.5].childNodes[1].innerText;
                char3 = cells[i + ((cells.length)**0.5)*2].childNodes[1].innerText;
                if(cells.length>9){
                    char4 = cells[i + ((cells.length)**0.5)*3].childNodes[1].innerText;
                }
                if(cells.length>16){
                    char5 = cells[i + ((cells.length)**0.5)*4].childNodes[1].innerText;
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
    });
});


 reset.addEventListener('click',resetFunc)

 //  0  1  2   3
 //  4  5  6   7
 //  8  9 10  11
 // 12 13 14  15

 //  (0||3||6) +1 +1  
 //  (0||4||8||12) +1 +1  


 //  (0||1||2) +3 +3=> Done

//  0 +4 +4
//  2 +2 +2