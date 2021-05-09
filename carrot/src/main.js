'use strict';
import Popup from './popup.js'
import Field from './field.js'

//const CARROT_SIZE = 80;
const CARROT_COUNT =15;
const BUG_COUNT =15;
const GAME_DURATION_SEC = 20;


/*const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();*/

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

/*const popup = document.querySelector('.pop-up');
const popupText = document.querySelector('.pop-up__message');
const popupRefresh = document.querySelector('.pop-up__refresh');*/

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new Popup();
gameFinishBanner.setClickListener(() => {
    startGame();
});


const gameField = new Field(CARROT_COUNT,BUG_COUNT );
gameField.setClickListener(onItemClick);

function onItemClick(item){

    if(!started) {
        return;
    }    
    if (item === 'carrot') {        
        score++;        
        updateScoreBoard();
        if(score === CARROT_COUNT) {            
            finishGame(true);
        }
    }else if (item === 'bug') {        
        finishGame(false);
    }
    
}


//field.addEventListener('click',onFieldClick);

gameBtn.addEventListener('click', () => {
    debugger;
    if(started){
        stopGame();
    }else {
        startGame();
    }    
});

/*popupRefresh.addEventListener('click',()=>{
    startGame();
    //hidePopup();
});*/


function startGame(){
    started = true;    
    initGame();
    showStopButton();
    showTimerAndScore();
    startGametimer();
    playSound(bgSound);
}

function stopGame(){
    started = false;  
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showWithText('REPLAY?');    
    playSound(alertSound);
    stopSound(bgSound);
}

function finishGame(win){
    started = false;
    hideGameButton();
    if(win){
        playSound(winSound);
    }else{
        playSound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);    
    gameFinishBanner.showWithText(win ? 'YOU WON' : 'YOU LOST');
    //showPopupWithText(win ? 'YOU WON' : 'YOU LOST');
}


function showStopButton (){
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
}

function hideGameButton (){
    gameBtn.style.visibility = 'hidden';
}


function showTimerAndScore(){
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGametimer (){
    let remaningTimesec = GAME_DURATION_SEC;
    updateTimerText(remaningTimesec);

    timer = setInterval(()=>{
        if(remaningTimesec <= 0){
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remaningTimesec);
    },1000);
}


function stopGameTimer(){
    clearInterval(timer);
}


function updateTimerText (time){
    const minutes = Math.floor(time/ 60); // 5초나누기 60은 0
    const seconds = time % 60;
    gameTimer.innerText = `${minutes} : ${seconds}`
}

/*function showPopupWithText(text){   
    popupText.innerText = text;
    popup.classList.remove('pop-up--hide');

}*/

/*function hidePopup(){
    popup.classList.add('pop-up--hide');
}*/


function initGame(){    
    score = 0;
    gameScore.innerText = CARROT_COUNT;
    gameField.init();

    /*field.innerHTML = '';    
    addItem('carrot',CARROT_COUNT,'img/carrot.png');
    addItem('bug',BUG_COUNT, 'img/bug.png');*/
}



function playSound (sound){
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}

function updateScoreBoard (){
    gameScore.innerText = CARROT_COUNT - score;
}


/*function addItem(className , count, imgPath){

    const x1=0;
    const y1=0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2= fieldRect.height - CARROT_SIZE;
    for(let i=0; i < count; i++){
        const item = document.createElement('img');
        item.setAttribute('class',className);
        item.setAttribute('src',imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1,x2);
        const y = randomNumber(y1,y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}*/

/*function randomNumber(min, max){
    return Math.random() * (max - min) + min; 
}*/


