import Yourartoflove from './classes.js';

let diceoflove = {
    first: 'Love everyone',
    second: 'Be the first to love',
    third: 'Love Jesus in the other',
    fourth: 'Love the other as yourself',
    fifth: 'love one another',
    sixth: 'Love your enemy'
};


const loadingBar = "<div class='lds-heart'><div></div></div>"
// const loadingBar = "<div id='loading-bar'>Loading...</div>"

   




let isWaiting = true;
function setaolContent() {
    document.getElementById("dice-container").innerHTML =  loadingBar 
    setTimeout(() => {
        document.getElementById("dice-container").textContent = aoltoday.rollDice()
        console.log("get roll dice")     
    }, 800)  
   
}

function getrollDice() {
  
    if ( isWaiting) {
        setaolContent();
    }   
        
    
}


const aoltoday = new Yourartoflove(diceoflove)

document.getElementById("btn-roll-dice").addEventListener('click', getrollDice)