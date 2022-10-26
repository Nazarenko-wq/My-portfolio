"use strict"

;(function(){
    let body = document.querySelector('body');

    function storageList () {
        let listWrapper = document.createElement('div');
        listWrapper.classList.add('storageWrapper');
        body.append(listWrapper);

        let closeIcon = document.createElement('img');
        closeIcon.src = './img/closeIcon.svg';
        closeIcon.classList.add('closeIcon');
        listWrapper.append(closeIcon);

        closeIcon.addEventListener('click', function () {
            listWrapper.remove();
        })

        let h2 = document.createElement('h2');
        h2.textContent = "Top results";
        listWrapper.append(h2);

        let table = document.createElement('table');
        table.classList.add('storageTable');
        listWrapper.append(table);

        let tableHead = document.createElement('thead');
        table.append(tableHead);

        let thName = document.createElement('th');
        thName.textContent = 'Name';
        tableHead.append(thName);

        let quantity = document.createElement('th');
        quantity.textContent = 'Moves';
        tableHead.append(quantity);

        let time = document.createElement('th');
        time.textContent = 'Time';
        tableHead.append(time);

        let tableBody = document.createElement('tbody');
        tableBody.classList.add('tbody');
        table.append(tableBody);
    }

    function createWrapper () {
        let main = document.createElement('div');
        main.classList.add('main');
        body.append(main);
        
        let header = document.createElement('header')
        header.classList.add('header');
        main.append(header);

        let buttonsBlock = document.createElement('div');
        buttonsBlock.classList.add('buttonsBlock');
        header.append(buttonsBlock);

        let button = document.createElement('button');
        button.classList.add('button');
        button.classList.add('red');
        button.textContent = 'Sound off';
        buttonsBlock.append(button);

        // let isPlay = false;
        const audioPlayer = new Audio()
        audioPlayer.src = './sounds/04716.mp3';


        button.addEventListener('click', function () {
            if(this.textContent == 'Sound off') {
                changeColor();
            } else {
                changeColor2();
            }
        })

        function changeColor () {
            button.classList.add('green');
            button.classList.remove('red');
            button.textContent = 'Sound on';
        }
        
        function changeColor2 () {
            button.classList.add('red');
            button.classList.remove('green');
            button.textContent = 'Sound off';
        }
        
        main.addEventListener('click', function (e) {
            if(button.textContent == 'Sound on') {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        })
        

        let button2 = document.createElement('button');
        button2.classList.add('button');
        button2.classList.add('reload');
        button2.textContent = 'New game';
        buttonsBlock.append(button2);

        let button4 = document.createElement('button');
        button4.classList.add('button');
        button4.textContent = 'Results';
        buttonsBlock.append(button4);

        button4.addEventListener('click', function () {
            storageList();

            let str = localStorage.getItem('winersList');
            let arr = JSON.parse(str);

            for(let i = 0; i < arr.length; i++) {
                let tr = document.createElement('tr')
                let tbody = document.querySelector('.tbody');
                tbody.append(tr);

                let td1 = document.createElement('td');
                td1.textContent = arr[i]['name'];
                tr.append(td1);

                let td2 = document.createElement('td');
                td2.textContent = arr[i]['moves'];
                tr.append(td2);

                let td3 = document.createElement('td');
                td3.textContent = arr[i]['time'];
                tr.append(td3);
                
            }
        })

        let countBlock = document.createElement('div');
        countBlock.classList.add('countBlock');
        header.append(countBlock);

        let span1 = document.createElement('span');
        span1.textContent = 'Moves:';
        countBlock.append(span1);

        let span2 = document.createElement('span');
        span2.classList.add('counter');
        span2.textContent = 0;
        countBlock.append(span2);

        let span3 = document.createElement('span');
        span3.textContent = 'Time:';
        countBlock.append(span3);

        let minutes = document.createElement('span');
        minutes.classList.add('min');
        minutes.textContent = '00';
        countBlock.append(minutes);

        let separate = document.createElement('span');
        separate.textContent = ':';
        countBlock.append(separate);

        let secends = document.createElement('span');
        secends.classList.add('sec');
        secends.textContent = '00';
        countBlock.append(secends);

        let footer = document.createElement('footer')
        main.append(footer);

        let frameSize = document.createElement('div');
        frameSize.textContent = 'Frame size: ';
        footer.append(frameSize);

        let frameSpan = document.createElement('span');
        frameSpan.textContent = '4x4';
        frameSize.append(frameSpan);

        let otherSizes = document.createElement('div');
        otherSizes.textContent = 'Other sizes: ';
        footer.append(otherSizes);

        let a1 = document.createElement('a');
        a1.textContent = '3x3 ';
        otherSizes.append(a1);

        a1.addEventListener('click', function () {
            let wrapper = document.querySelector('.table');
            main.removeChild(wrapper);
            minutes.textContent = '00';
            secends.textContent = '00';
            span2.textContent = 0;
            frameSpan.textContent = this.textContent;
            createField2(createArr2());

        })

        let a2 = document.createElement('a');
        a2.textContent = '4x4 ';
        otherSizes.append(a2);

        a2.addEventListener('click', function () {
            let wrapper = document.querySelector('.table');
            main.removeChild(wrapper);
            minutes.textContent = '00';
            secends.textContent = '00';
            span2.textContent = 0;
            frameSpan.textContent = this.textContent;
            createField(createArr());

        })

        let a3 = document.createElement('a');
        a3.textContent = '5x5 ';
        otherSizes.append(a3);

        a3.addEventListener('click', function () {
            let wrapper = document.querySelector('.table');
            main.removeChild(wrapper);
            minutes.textContent = '00';
            secends.textContent = '00';
            span2.textContent = 0;
            frameSpan.textContent = this.textContent;
            createField3(createArr3());

        })

        let a4 = document.createElement('a');
        a4.textContent = '6x6 ';
        otherSizes.append(a4);

        a4.addEventListener('click', function () {
            let wrapper = document.querySelector('.table');
            main.removeChild(wrapper);
            minutes.textContent = '00';
            secends.textContent = '00';
            span2.textContent = 0;
            frameSpan.textContent = this.textContent;
            createField4(createArr4());

        })

        let a5 = document.createElement('a');
        a5.innerHTML = '7x7 ';
        otherSizes.append(a5);

        a5.addEventListener('click', function () {
            let wrapper = document.querySelector('.table');
            main.removeChild(wrapper);
            minutes.textContent = '00';
            secends.textContent = '00';
            span2.textContent = 0;
            frameSpan.textContent = this.textContent;
            createField5(createArr5());

        })

        let a6 = document.createElement('a');
        a6.innerHTML = '8x8';
        otherSizes.append(a6);

        a6.addEventListener('click', function () {
            let wrapper = document.querySelector('.table');
            main.removeChild(wrapper);
            minutes.textContent = '00';
            secends.textContent = '00';
            span2.textContent = 0;
            frameSpan.textContent = this.textContent;
            createField6(createArr6());

        })
    }

    createWrapper();

    // Create 3x3 field
    function createField2 (arr) {
        let main = document.querySelector('.main');
        let reload = document.querySelector('.reload');
        let secends = document.querySelector('.sec'); 
        let minutes = document.querySelector('.min');
        let counter = document.querySelector('.counter');        
        let wrapper = document.createElement('div');
        
        main.append(wrapper);
        wrapper.classList.add('table');
        wrapper.classList.add('table2');

        for(let j = 0; j < arr.length; j++) {
            // create TD
            let td = document.createElement('div');
            td.classList.add('td2')
            td.textContent = arr[j];
            wrapper.append(td);
        };

        let list = wrapper.childNodes;

        // Painting square
        for(let i = 0; i < list.length; i++) {
            if(list[i].textContent == '') {
                list[i].classList.add('emptySquare');
            }
        }

        wrapper.addEventListener('click', function (e) {
            // Counter
            if(e.target.classList.contains('td')) {
                counter.textContent ++;
            }

            // Active tiles

            for(let i = 0; i < list.length; i++) {

                if((list[i].textContent == '' && e.target == list[i - 1] && i === 3) || (list[i].textContent == '' && e.target == list[i - 1] && i === 6)) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i - 1]) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if((list[i].textContent == '' && e.target == list[i + 1] && i === 2) || (list[i].textContent == '' && e.target == list[i + 1] && i === 5)) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i + 1]) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i - 3]) {
                    let arr = [];
                    arr.push(list[i - 3].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i + 3]) {
                    let arr = [];
                    arr.push(list[i + 3].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }
            };

            // Compare arrays
            let rightArray = [1, 2, 3, 4, 5, 6, 7, 8, 0];
            let currentArray = [];

            for(let elem of list) {
                currentArray.push(+elem.textContent);
            }

            let winersList = [];

            function saveData () {
                let winnerName = prompt('Enter your name', 'User');
                let winers = localStorage.getItem('winersList');
                
                if(winers === null) {
                    localStorage.setItem('winersList', JSON.stringify(winersList));
                }

                let newUser = {
                    'name': winnerName,
                    'moves': counter.textContent,
                    'time': `${minutes.textContent} : ${secends.textContent}`
                }

                let str = localStorage.getItem('winersList');
                let res = JSON.parse(str);
                res.push(newUser);
                
                localStorage.setItem('winersList', JSON.stringify(res));
            }
            
            if(JSON.stringify(rightArray) === JSON.stringify(currentArray)) {
                saveData();
                alert(`Hooray! You solved the puzzle in ${minutes.textContent}:${secends.textContent} and ${counter.textContent} moves!`);
                counter.textContent = 0;
                main.removeChild(wrapper);
                createField(createArr());
    
                secends.textContent = '00';
                minutes.textContent = '00';
            }

            // console.log(currentArray);
            // console.log(rightArray);
        });

        window.addEventListener('load', function func () {
            setInterval(() => {
                secends.textContent++;
                if(secends.textContent < 10) {
                    secends.textContent = '0' + secends.textContent++; 
                }
                if(secends.textContent == 60) {
                    secends.textContent = 0;
                    minutes.textContent++;
                }
                if(minutes.textContent < 10) {
                    minutes.textContent = '0' + minutes.textContent++;
                }
            }, 1000);
        })

        reload.addEventListener('click', function () {
            counter.textContent = 0;
            main.removeChild(wrapper);
            createField2(createArr2());

            secends.textContent = '00';
            minutes.textContent = '00';  
        })
    }

    // create random array for 3x3 field
    function createArr2 () {
        let arr = [];
        for(let i = 1; i < 9; i++) {
            arr.push(i);
        }
        arr.push('');
        arr.sort(() => Math.random() - 0.5);

        return arr;
    }

    // Create 4x4 field
    function createField (arr) {
        let main = document.querySelector('.main');
        let reload = document.querySelector('.reload');
        let secends = document.querySelector('.sec'); 
        let minutes = document.querySelector('.min');
        let counter = document.querySelector('.counter');        
        let wrapper = document.createElement('div');
        
        main.append(wrapper);
        wrapper.classList.add('table');

        for(let j = 0; j < arr.length; j++) {
            // create TD
            let td = document.createElement('div');
            td.classList.add('td');
            td.textContent = arr[j];
            wrapper.append(td);
        };

        let list = wrapper.childNodes;

        // Painting square
        for(let i = 0; i < list.length; i++) {
            if(list[i].textContent == '') {
                list[i].classList.add('emptySquare');
            }
        }

        wrapper.addEventListener('click', function (e) {
            // Counter
            if(e.target.classList.contains('td')) {
                counter.textContent ++;
            }

            // Active tiles

            for(let i = 0; i < list.length; i++) {

                if((list[i].textContent == '' && e.target == list[i - 1] && i === 4) || (list[i].textContent == '' && e.target == list[i - 1] && i === 8) || (list[i].textContent == '' && e.target == list[i - 1] && i === 12) ) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i - 1]) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if((list[i].textContent == '' && e.target == list[i + 1] && i === 3) || (list[i].textContent == '' && e.target == list[i + 1] && i === 7) || (list[i].textContent == '' && e.target == list[i + 1] && i === 11) ) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i + 1]) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i - 4]) {
                    let arr = [];
                    arr.push(list[i - 4].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i + 4]) {
                    let arr = [];
                    arr.push(list[i + 4].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }
            };

            // console.log(e.target);
            // console.log(list)

            // Compare arrays
            let rightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
            let currentArray = [];

            for(let elem of list) {
                currentArray.push(+elem.textContent);
            }

            let winersList = [];

            function saveData () {
                let winnerName = prompt('Enter your name', 'User');
                let winers = localStorage.getItem('winersList');
                
                if(winers === null) {
                    localStorage.setItem('winersList', JSON.stringify(winersList));
                }

                let newUser = {
                    'name': winnerName,
                    'moves': counter.textContent,
                    'time': `${minutes.textContent} : ${secends.textContent}`
                }

                let str = localStorage.getItem('winersList');
                let res = JSON.parse(str);
                res.push(newUser);
                
                localStorage.setItem('winersList', JSON.stringify(res));
            }

            if(JSON.stringify(rightArray) === JSON.stringify(currentArray)) {
                saveData();
                alert(`Hooray! You solved the puzzle in ${minutes.textContent}:${secends.textContent} and ${counter.textContent} moves!`);
                counter.textContent = 0;
                main.removeChild(wrapper);
                createField(createArr());
    
                secends.textContent = '00';
                minutes.textContent = '00';
            }
        });

        window.addEventListener('load', function func () {
            setInterval(() => {
                secends.textContent++;
                if(secends.textContent < 10) {
                    secends.textContent = '0' + secends.textContent++; 
                }
                if(secends.textContent == 60) {
                    secends.textContent = 0;
                    minutes.textContent++;
                }
                if(minutes.textContent < 10) {
                    minutes.textContent = '0' + minutes.textContent++;
                }
            }, 1000);
        })

        reload.addEventListener('click', function () {
            counter.textContent = 0;
            main.removeChild(wrapper);
            createField(createArr());

            secends.textContent = '00';
            minutes.textContent = '00';  
        })

    }

    // create random array for 4x4 field
    function createArr () {

        let arr = [];
        for(let i = 1; i < 16; i++) {
            arr.push(i);
        }
        arr.push('');
        arr.sort(() => Math.random() - 0.5);

        return arr;
    }

    createField(createArr());

    // Create 5x5 field
    function createField3 (arr) {
        let main = document.querySelector('.main');
        let reload = document.querySelector('.reload');
        let secends = document.querySelector('.sec'); 
        let minutes = document.querySelector('.min');
        let counter = document.querySelector('.counter');        
        let wrapper = document.createElement('div');
        
        main.append(wrapper);
        wrapper.classList.add('table');

        for(let j = 0; j < arr.length; j++) {
            // create TD
            let td = document.createElement('div');
            td.classList.add('td');
            td.classList.add('td3');
            td.textContent = arr[j];
            wrapper.append(td);
        };

        let list = wrapper.childNodes;

        // Painting square
        for(let i = 0; i < list.length; i++) {
            if(list[i].textContent == '') {
                list[i].classList.add('emptySquare');
            }
        }

        wrapper.addEventListener('click', function (e) {
            // Counter
            if(e.target.classList.contains('td')) {
                counter.textContent ++;
            }

            // Active tiles

            for(let i = 0; i < list.length; i++) {

                if((list[i].textContent == '' && e.target == list[i - 1] && i === 5) || (list[i].textContent == '' && e.target == list[i - 1] && i === 10) || (list[i].textContent == '' && e.target == list[i - 1] && i === 15) || (list[i].textContent == '' && e.target == list[i - 1] && i === 20)) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i - 1]) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if((list[i].textContent == '' && e.target == list[i + 1] && i === 4) || (list[i].textContent == '' && e.target == list[i + 1] && i === 9) || (list[i].textContent == '' && e.target == list[i + 1] && i === 14) || (list[i].textContent == '' && e.target == list[i + 1] && i === 19)) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i + 1]) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i - 5]) {
                    let arr = [];
                    arr.push(list[i - 5].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i + 5]) {
                    let arr = [];
                    arr.push(list[i + 5].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }
            };

            // console.log(e.target);
            // console.log(list)

            // Compare arrays
            let rightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0];
            let currentArray = [];

            for(let elem of list) {
                currentArray.push(+elem.textContent);
            }

            let winersList = [];

            function saveData () {
                let winnerName = prompt('Enter your name', 'User');
                let winers = localStorage.getItem('winersList');
                
                if(winers === null) {
                    localStorage.setItem('winersList', JSON.stringify(winersList));
                }

                let newUser = {
                    'name': winnerName,
                    'moves': counter.textContent,
                    'time': `${minutes.textContent} : ${secends.textContent}`
                }

                let str = localStorage.getItem('winersList');
                let res = JSON.parse(str);
                res.push(newUser);
                
                localStorage.setItem('winersList', JSON.stringify(res));
            }

            if(JSON.stringify(rightArray) === JSON.stringify(currentArray)) {
                saveData();
                alert(`Hooray! You solved the puzzle in ${minutes.textContent}:${secends.textContent} and ${counter.textContent} moves!`);
                counter.textContent = 0;
                main.removeChild(wrapper);
                createField(createArr());
    
                secends.textContent = '00';
                minutes.textContent = '00';
            }

            // console.log(currentArray);
            // console.log(rightArray);
        });

        window.addEventListener('load', function func () {
            setInterval(() => {
                secends.textContent++;
                if(secends.textContent < 10) {
                    secends.textContent = '0' + secends.textContent++; 
                }
                if(secends.textContent == 60) {
                    secends.textContent = 0;
                    minutes.textContent++;
                }
                if(minutes.textContent < 10) {
                    minutes.textContent = '0' + minutes.textContent++;
                }
            }, 1000);
        })

        reload.addEventListener('click', function () {
            counter.textContent = 0;
            main.removeChild(wrapper);
            createField3(createArr3());

            secends.textContent = '00';
            minutes.textContent = '00';  
        })

        // console.log(list);
    }

    // create random array for 5x5 field
    function createArr3 () {

        let arr = [];
        for(let i = 1; i < 25; i++) {
            arr.push(i);
        }
        arr.push('');
        arr.sort(() => Math.random() - 0.5);

        return arr;
    }

    // Create 6x6 field
    function createField4 (arr) {
        let main = document.querySelector('.main');
        let reload = document.querySelector('.reload');
        let secends = document.querySelector('.sec'); 
        let minutes = document.querySelector('.min');
        let counter = document.querySelector('.counter');        
        let wrapper = document.createElement('div');
        
        main.append(wrapper);
        wrapper.classList.add('table');
        wrapper.classList.add('table4');

        for(let j = 0; j < arr.length; j++) {
            // create TD
            let td = document.createElement('div');
            td.classList.add('td');
            td.classList.add('td4');
            td.textContent = arr[j];
            wrapper.append(td);
        };

        let list = wrapper.childNodes;

        // Painting square
        for(let i = 0; i < list.length; i++) {
            if(list[i].textContent == '') {
                list[i].classList.add('emptySquare');
            }
        }

        wrapper.addEventListener('click', function (e) {
            // Counter
            if(e.target.classList.contains('td')) {
                counter.textContent ++;
            }

            // Active tiles

            for(let i = 0; i < list.length; i++) {

                if((list[i].textContent == '' && e.target == list[i - 1] && i === 6) || (list[i].textContent == '' && e.target == list[i - 1] && i === 12) || (list[i].textContent == '' && e.target == list[i - 1] && i === 18) || (list[i].textContent == '' && e.target == list[i - 1] && i === 24) || (list[i].textContent == '' && e.target == list[i - 1] && i === 30)) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i - 1]) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if((list[i].textContent == '' && e.target == list[i + 1] && i === 5) || (list[i].textContent == '' && e.target == list[i + 1] && i === 11) || (list[i].textContent == '' && e.target == list[i + 1] && i === 17) || (list[i].textContent == '' && e.target == list[i + 1] && i === 23) || (list[i].textContent == '' && e.target == list[i + 1] && i === 29)) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i + 1]) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i - 6]) {
                    let arr = [];
                    arr.push(list[i - 6].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i + 6]) {
                    let arr = [];
                    arr.push(list[i + 6].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }
            };

            // console.log(e.target);
            // console.log(list)

            // Compare arrays
            let rightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0];
            let currentArray = [];

            for(let elem of list) {
                currentArray.push(+elem.textContent);
            }

            let winersList = [];

            function saveData () {
                let winnerName = prompt('Enter your name', 'User');
                let winers = localStorage.getItem('winersList');
                
                if(winers === null) {
                    localStorage.setItem('winersList', JSON.stringify(winersList));
                }

                let newUser = {
                    'name': winnerName,
                    'moves': counter.textContent,
                    'time': `${minutes.textContent} : ${secends.textContent}`
                }

                let str = localStorage.getItem('winersList');
                let res = JSON.parse(str);
                res.push(newUser);
                
                localStorage.setItem('winersList', JSON.stringify(res));
            }

            if(JSON.stringify(rightArray) === JSON.stringify(currentArray)) {
                saveData();
                alert(`Hooray! You solved the puzzle in ${minutes.textContent}:${secends.textContent} and ${counter.textContent} moves!`);
                counter.textContent = 0;
                main.removeChild(wrapper);
                createField(createArr());
    
                secends.textContent = '00';
                minutes.textContent = '00';
            }

            // console.log(currentArray);
            // console.log(rightArray);
        });

        window.addEventListener('load', function func () {
            setInterval(() => {
                secends.textContent++;
                if(secends.textContent < 10) {
                    secends.textContent = '0' + secends.textContent++; 
                }
                if(secends.textContent == 60) {
                    secends.textContent = 0;
                    minutes.textContent++;
                }
                if(minutes.textContent < 10) {
                    minutes.textContent = '0' + minutes.textContent++;
                }
            }, 1000);
        })

        reload.addEventListener('click', function () {
            counter.textContent = 0;
            main.removeChild(wrapper);
            createField4(createArr4());

            secends.textContent = '00';
            minutes.textContent = '00';  
        })

        // console.log(list);
    }

    // create random array for 6x6 field
    function createArr4 () {

        let arr = [];
        for(let i = 1; i < 36; i++) {
            arr.push(i);
        }
        arr.push('');
        arr.sort(() => Math.random() - 0.5);

        return arr;
    }

    // Create 7x7 field
    function createField5 (arr) {
        let main = document.querySelector('.main');
        let reload = document.querySelector('.reload');
        let secends = document.querySelector('.sec'); 
        let minutes = document.querySelector('.min');
        let counter = document.querySelector('.counter');        
        let wrapper = document.createElement('div');
        
        main.append(wrapper);
        wrapper.classList.add('table');
        wrapper.classList.add('table5');

        for(let j = 0; j < arr.length; j++) {
            // create TD
            let td = document.createElement('div');
            td.classList.add('td');
            td.classList.add('td5');
            td.textContent = arr[j];
            wrapper.append(td);
        };

        let list = wrapper.childNodes;

        // Painting square
        for(let i = 0; i < list.length; i++) {
            if(list[i].textContent == '') {
                list[i].classList.add('emptySquare');
            }
        }

        wrapper.addEventListener('click', function (e) {
            // Counter
            if(e.target.classList.contains('td')) {
                counter.textContent ++;
            }

            // Active tiles

            for(let i = 0; i < list.length; i++) {

                if((list[i].textContent == '' && e.target == list[i - 1] && i === 7) || (list[i].textContent == '' && e.target == list[i - 1] && i === 14) || (list[i].textContent == '' && e.target == list[i - 1] && i === 21) || (list[i].textContent == '' && e.target == list[i - 1] && i === 28) || (list[i].textContent == '' && e.target == list[i - 1] && i === 35) || (list[i].textContent == '' && e.target == list[i - 1] && i === 42)) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i - 1]) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if((list[i].textContent == '' && e.target == list[i + 1] && i === 6) || (list[i].textContent == '' && e.target == list[i + 1] && i === 13) || (list[i].textContent == '' && e.target == list[i + 1] && i === 20) || (list[i].textContent == '' && e.target == list[i + 1] && i === 27) || (list[i].textContent == '' && e.target == list[i + 1] && i === 34) || (list[i].textContent == '' && e.target == list[i + 1] && i === 41)) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i + 1]) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i - 7]) {
                    let arr = [];
                    arr.push(list[i - 7].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i + 7]) {
                    let arr = [];
                    arr.push(list[i + 7].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }
            };

            // console.log(e.target);
            // console.log(list)

            // Compare arrays
            let rightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 0];
            let currentArray = [];

            for(let elem of list) {
                currentArray.push(+elem.textContent);
            }

            let winersList = [];

            function saveData () {
                let winnerName = prompt('Enter your name', 'User');
                let winers = localStorage.getItem('winersList');
                
                if(winers === null) {
                    localStorage.setItem('winersList', JSON.stringify(winersList));
                }

                let newUser = {
                    'name': winnerName,
                    'moves': counter.textContent,
                    'time': `${minutes.textContent} : ${secends.textContent}`
                }

                let str = localStorage.getItem('winersList');
                let res = JSON.parse(str);
                res.push(newUser);
                
                localStorage.setItem('winersList', JSON.stringify(res));
            }

            if(JSON.stringify(rightArray) === JSON.stringify(currentArray)) {
                saveData();
                alert(`Hooray! You solved the puzzle in ${minutes.textContent}:${secends.textContent} and ${counter.textContent} moves!`);
                counter.textContent = 0;
                main.removeChild(wrapper);
                createField(createArr());
    
                secends.textContent = '00';
                minutes.textContent = '00';
            }

            // console.log(currentArray);
            // console.log(rightArray);
        });

        window.addEventListener('load', function func () {
            setInterval(() => {
                secends.textContent++;
                if(secends.textContent < 10) {
                    secends.textContent = '0' + secends.textContent++; 
                }
                if(secends.textContent == 60) {
                    secends.textContent = 0;
                    minutes.textContent++;
                }
                if(minutes.textContent < 10) {
                    minutes.textContent = '0' + minutes.textContent++;
                }
            }, 1000);
        })

        reload.addEventListener('click', function () {
            counter.textContent = 0;
            main.removeChild(wrapper);
            createField5(createArr5());

            secends.textContent = '00';
            minutes.textContent = '00';  
        })

        // console.log(list);
    }

    // create random array for 7x7 field
    function createArr5 () {

        let arr = [];
        for(let i = 1; i < 49; i++) {
            arr.push(i);
        }
        arr.push('');
        arr.sort(() => Math.random() - 0.5);

        return arr;
    }

    // Create 8x8 field
    function createField6 (arr) {
        let main = document.querySelector('.main');
        let reload = document.querySelector('.reload');
        let secends = document.querySelector('.sec'); 
        let minutes = document.querySelector('.min');
        let counter = document.querySelector('.counter');        
        let wrapper = document.createElement('div');
        
        main.append(wrapper);
        wrapper.classList.add('table');

        for(let j = 0; j < arr.length; j++) {
            // create TD
            let td = document.createElement('div');
            td.classList.add('td');
            td.classList.add('td6');
            td.textContent = arr[j];
            wrapper.append(td);
        };

        let list = wrapper.childNodes;

        // Painting square
        for(let i = 0; i < list.length; i++) {
            if(list[i].textContent == '') {
                list[i].classList.add('emptySquare');
            }
        }

        wrapper.addEventListener('click', function (e) {
            // Counter
            if(e.target.classList.contains('td')) {
                counter.textContent ++;
            }

            // Active tiles

            for(let i = 0; i < list.length; i++) {

                if((list[i].textContent == '' && e.target == list[i - 1] && i === 8) || (list[i].textContent == '' && e.target == list[i - 1] && i === 16) || (list[i].textContent == '' && e.target == list[i - 1] && i === 24) || (list[i].textContent == '' && e.target == list[i - 1] && i === 32) || (list[i].textContent == '' && e.target == list[i - 1] && i === 40) || (list[i].textContent == '' && e.target == list[i - 1] && i === 48) || (list[i].textContent == '' && e.target == list[i - 1] && i === 56)) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i - 1]) {
                    let arr = [];
                    arr.push(list[i - 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if((list[i].textContent == '' && e.target == list[i + 1] && i === 7) || (list[i].textContent == '' && e.target == list[i + 1] && i === 15) || (list[i].textContent == '' && e.target == list[i + 1] && i === 23) || (list[i].textContent == '' && e.target == list[i + 1] && i === 31) || (list[i].textContent == '' && e.target == list[i + 1] && i === 39) || (list[i].textContent == '' && e.target == list[i + 1] && i === 47) || (list[i].textContent == '' && e.target == list[i + 1] && i === 55)) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = arr[0];
                    list[i].textContent = '';
                    arr.splice(0,1);
                } else if(list[i].textContent == '' && e.target == list[i + 1]) {
                    let arr = [];
                    arr.push(list[i + 1].textContent);
                    e.target.textContent = '';
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    list[i].textContent = arr[0];
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i - 8]) {
                    let arr = [];
                    arr.push(list[i - 8].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }

                if(list[i].textContent == '' && e.target == list[i + 8]) {
                    let arr = [];
                    arr.push(list[i + 8].textContent);
                    e.target.textContent = '';
                    list[i].textContent = arr[0];
                    e.target.classList.add('emptySquare');
                    list[i].classList.remove('emptySquare');
                    arr.splice(0,1);
                }
            };

            // console.log(e.target);
            // console.log(list)

            // Compare arrays
            let rightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 0];
            let currentArray = [];

            for(let elem of list) {
                currentArray.push(+elem.textContent);
            }

            let winersList = [];

            function saveData () {
                let winnerName = prompt('Enter your name', 'User');
                let winers = localStorage.getItem('winersList');
                
                if(winers === null) {
                    localStorage.setItem('winersList', JSON.stringify(winersList));
                }

                let newUser = {
                    'name': winnerName,
                    'moves': counter.textContent,
                    'time': `${minutes.textContent} : ${secends.textContent}`
                }

                let str = localStorage.getItem('winersList');
                let res = JSON.parse(str);
                res.push(newUser);
                
                localStorage.setItem('winersList', JSON.stringify(res));
            }

            if(JSON.stringify(rightArray) === JSON.stringify(currentArray)) {
                saveData();
                alert(`Hooray! You solved the puzzle in ${minutes.textContent}:${secends.textContent} and ${counter.textContent} moves!`);
                counter.textContent = 0;
                main.removeChild(wrapper);
                createField(createArr());
    
                secends.textContent = '00';
                minutes.textContent = '00';
            }

            // console.log(currentArray);
            // console.log(rightArray);
        });

        window.addEventListener('load', function func () {
            setInterval(() => {
                secends.textContent++;
                if(secends.textContent < 10) {
                    secends.textContent = '0' + secends.textContent++; 
                }
                if(secends.textContent == 60) {
                    secends.textContent = 0;
                    minutes.textContent++;
                }
                if(minutes.textContent < 10) {
                    minutes.textContent = '0' + minutes.textContent++;
                }
            }, 1000);
        })

        reload.addEventListener('click', function () {
            counter.textContent = 0;
            main.removeChild(wrapper);
            createField6(createArr6());

            secends.textContent = '00';
            minutes.textContent = '00';  
        })

        // console.log(list);
    }

    // create random array for 8x8 field
    function createArr6 () {

        let arr = [];
        for(let i = 1; i < 64; i++) {
            arr.push(i);
        }
        arr.push('');
        arr.sort(() => Math.random() - 0.5);

        return arr;
    }

})();
