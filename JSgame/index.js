"use strict"

const box = document.querySelector('.main-field');
let move = 0;
let result = '';

box.addEventListener('click', event => {
    let target = event.target;
    if(target.classList.contains('field')){
        if(move % 2 === 0){
            target.innerHTML = 'X';
        }else{
            target.innerHTML = '0';
        }
        move++
        check();
    }
})

function check () {
    const boxes = document.querySelectorAll('.field');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < arr.length; i++){
        if(boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'){
            result = 'Победили крестики';
            prepereResult(result);
        }else if(boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0'){
            result = 'Победили нолики';
            prepereResult(result);
        }
    }
}

const prepereResult = winner => {
    alert(winner);
}
