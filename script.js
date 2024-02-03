const cells = document.querySelectorAll('.cell');
const reset = document.querySelector('#reset')

const resetFunc = ()=>{
    cells.forEach((cell)=>{
        count = 1;
        cell.classList.remove('cell--X');
        cell.classList.remove('cell--O');
        cell.childNodes[1].innerText = '';
        cell.childNodes[1].style.display = 'none';
    });
}

let count = 1 ; 
cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
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
});
});


cells.forEach((cell)=>{ 
cell.addEventListener('click',()=>{
            let char1 = cells[0].childNodes[1].innerText;
            let char2 = cells[4].childNodes[1].innerText;
            let char3 = cells[8].childNodes[1].innerText;
                if(char1 == char2 && char2 == char3){
                    if(char1 === 'X'){
                            setTimeout(() => {alert('X Wins');resetFunc(); }, 500); }
                    else if(char1 === 'O'){setTimeout(() => {alert('O Wins');resetFunc(); }, 500); }        
                }
            char1 = cells[2].childNodes[1].innerText;
            char2 = cells[4].childNodes[1].innerText;
            char3 = cells[6].childNodes[1].innerText;

                if(char1 == char2 && char2 == char3){
                    if(char1 === 'X'){setTimeout(() => {alert('X Wins');resetFunc(); }, 500); }
                    else if(char1 === 'O')setTimeout(() => {alert('O Wins');resetFunc(); }, 500); }       
            



for (let i = 0; i < cells.length - 2; i++) {
            const char1 = cells[i].childNodes[1].innerText;
            const char2 = cells[i + 1].childNodes[1].innerText;
            const char3 = cells[i + 2].childNodes[1].innerText;
            const char4 = cells[i + 3].childNodes[1].innerText;
            if(i===0 ||i=== (cells.length)**0.5 || i===((cells.length)**0.5)*2 || i===((cells.length)**0.5)*3){
                if(char1 == char2 && char2 == char3 && char3 == char4 ){
                    if(char1 === 'X'){setTimeout(() => {alert('X Wins');resetFunc(); }, 500); }
                    else if(char1 === 'O')setTimeout(() => {alert('O Wins');resetFunc(); }, 500); }       
                }
            }


        {
// for (let i = 0; i < cells.length; i++) {
            // const char1 = cells[0].childNodes[1].innerText;
            // const char2 = cells[4].childNodes[1].innerText;
            // const char3 = cells[8].childNodes[1].innerText;
            // const char4 = cells[12].childNodes[1].innerText;
            // // if(i===0 ||i===1 || i===2 || i=== 3){
            //     if(char1 == char2 == char2 == char3 == char3 == char4){
            //         if(char1 === 'X'){setTimeout(() => {alert('X Wins');resetFunc(); }, 500); }
            //         else if(char1 === 'O')setTimeout(() => {alert('O Wins');resetFunc(); }, 500); }       
                // }
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