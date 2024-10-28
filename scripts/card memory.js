

let firstGuess = undefined; 
let secondGuess = undefined;
let errorsCount = 20;
let htmlErrorsDiv = "Errors: " + (errorsCount);
let possiblePositions = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"];
let score = 0
let HTMLEndGameWin = "";
document.querySelector('.js-endgame-win').innerHTML = HTMLEndGameWin;
let  HTMLEndGameLost = "";
document.querySelector('.js-endgame-lost').innerHTML = HTMLEndGameLost;



function turnTheCard(indexChoosen){
  
    let position = possiblePositions[indexChoosen];
        if(firstGuess !== undefined && secondGuess !== undefined && cards[firstGuess].foundPair === false && cards[secondGuess].foundPair === false && errorsCount>0){
            document.getElementById(`js-card-${cards[firstGuess].position}`).src ="../imges/back of card.jpg";
            document.getElementById(`js-card-${cards[secondGuess].position}`).src ="../imges/back of card.jpg";
                if (cards[firstGuess].id !== cards[secondGuess].id){
                errorsCount --;
                htmlErrorsDiv = "Errors: " + (errorsCount);
                document.querySelector('.js-errors-div').innerHTML = htmlErrorsDiv;
                }
                firstGuess = undefined; 
                secondGuess = undefined;
                
            if (errorsCount === 0) {
                HTMLEndGameLost = `<h1 class="endGameTitle">You lost!</h1>
                <h2 class="lostStatment">You used all your errors.</h2>`;
                document.querySelector('.js-endgame-lost').innerHTML = HTMLEndGameLost;
            }
        }

        for (let i = 0; i < cards.length; i++){
            if(indexChoosen === i){
                if(cards[i].foundPair){
                    break;
                }
                cards[i].position = position;
                document.getElementById(`js-card-${cards[i].position}`).src =`/imges/${cards[i].name}.jpg`;
                if(firstGuess === undefined){
                    firstGuess = i;
                    break;
                }
                if(secondGuess === undefined){
                    secondGuess = i;
                    if(cards[secondGuess].name === cards[firstGuess].name && cards[secondGuess].id !== cards[firstGuess].id){
                        document.getElementById(`js-card-${cards[firstGuess].position}`).style.border ="3px lightgreen solid";
                            document.getElementById(`js-card-${cards[firstGuess].position}`).style.margin ="0";
                            document.getElementById(`js-card-${cards[firstGuess].position}`).style.cursor ="not-allowed";

                        document.getElementById(`js-card-${cards[secondGuess].position}`).style.border ="3px lightgreen solid";
                            document.getElementById(`js-card-${cards[secondGuess].position}`).style.margin ="0";
                            document.getElementById(`js-card-${cards[secondGuess].position}`).style.cursor ="not-allowed";
                        cards[secondGuess].foundPair = true;
                        cards[firstGuess].foundPair = true;
                        score ++;
                        firstGuess = undefined; 
                        secondGuess = undefined;
                        if(score === 8){
                            HTMLEndGameWin = `<h1 class="endGameTitle">You Win!</h1>
                            <h2>You finnished the game with ${errorsCount} errors left</h2>`;
                            document.querySelector('.js-endgame-win').innerHTML = HTMLEndGameWin;
                        }
                    }
                    break;
                }
            }
        }
}

function newGame(){

    let htmlCardsTable = `<img id="js-card-a1" class="backCard" onclick="turnTheCard(0)" src="/imges/back of card.jpg">
        <img id="js-card-a2" class="backCard" onclick="turnTheCard(1)" src="../imges/back of card.jpg">
        <img id="js-card-a3" class="backCard" onclick="turnTheCard(2)" src="../imges/back of card.jpg">
        <img id="js-card-a4" class="backCard" onclick="turnTheCard(3)" src="../imges/back of card.jpg">
        <img id="js-card-b1" class="backCard" onclick="turnTheCard(4)" src="../imges/back of card.jpg">
        <img id="js-card-b2" class="backCard" onclick="turnTheCard(5)" src="../imges/back of card.jpg">
        <img id="js-card-b3" class="backCard" onclick="turnTheCard(6)" src="../imges/back of card.jpg">
        <img id="js-card-b4" class="backCard" onclick="turnTheCard(7)" src="../imges/back of card.jpg">
        <img id="js-card-c1" class="backCard" onclick="turnTheCard(8)" src="../imges/back of card.jpg">
        <img id="js-card-c2" class="backCard" onclick="turnTheCard(9)" src="../imges/back of card.jpg">
        <img id="js-card-c3" class="backCard" onclick="turnTheCard(10)" src="../imges/back of card.jpg">
        <img id="js-card-c4" class="backCard" onclick="turnTheCard(11)" src="../imges/back of card.jpg">
        <img id="js-card-d1" class="backCard" onclick="turnTheCard(12)" src="../imges/back of card.jpg">
        <img id="js-card-d2" class="backCard" onclick="turnTheCard(13)" src="../imges/back of card.jpg">
        <img id="js-card-d3" class="backCard" onclick="turnTheCard(14)" src="../imges/back of card.jpg">
        <img id="js-card-d4" class="backCard" onclick="turnTheCard(15)" src="../imges/back of card.jpg">`

       document.querySelector('.js-cards-div').innerHTML = htmlCardsTable;
       HTMLEndGameWin = "";
       document.querySelector('.js-endgame-win').innerHTML = HTMLEndGameWin;
       HTMLEndGameLost = "";
       document.querySelector('.js-endgame-lost').innerHTML = HTMLEndGameLost;
       


    for (let i = 0; i < cards.length; i++){
        cards[i].position = possiblePositions[i];
        document.getElementById(`js-card-${cards[i].position}`).src ="/imges/back of card.jpg";
        document.getElementById(`js-card-${cards[i].position}`).style="styles/card memory.css";
        cards[i].position = undefined;
        cards[i].foundPair = false;
    };
        firstGuess = undefined; 
        secondGuess = undefined;
        position = undefined;
        score=0;
        errorsCount = 20;
        htmlErrorsDiv = "Errors: " + (errorsCount);
        document.querySelector('.js-errors-div').innerHTML = "";
       shuffleCards();
}

function shuffleCards(){
    cards.sort(function(){return 0.5 - Math.random()});
}

let cards = [
    {
        name : "ace",
        position: undefined,
        foundPair: false,
        id: 11
    },
    {
        name : "two",
        position: undefined,
        foundPair: false,
        id: 21
    },
    {
        name : "three",
        position: undefined,
        foundPair: false,
        id: 31
    },
    {
        name : "four",
        position: undefined,
        foundPair: false,
        id: 41
    },
    {
        name : "five",
        position: undefined,
        foundPair: false,
        id: 51
    },
    {
        name : "six",
        position: undefined,
        foundPair: false,
        id: 61
    },
    {
        name : "seven",
        position: undefined,
        foundPair: false,
        id: 71
    },
    {
        name : "eight",
        position: undefined,
        foundPair: false,
        id: 81
    },
    {
        name : "ace",
        position: undefined,
        foundPair: false,
        id: 12
    },
    {
        name : "two",
        position: undefined,
        foundPair: false,
        id: 22
    },
    {
        name : "three",
        position: undefined,
        foundPair: false,
        id: 32
    },
    {
        name : "four",
        position: undefined,
        foundPair: false,
        id: 42
    },
    {
        name : "five",
        position: undefined,
        foundPair: false,
        id: 52
    },
    {
        name : "six",
        position: undefined,
        foundPair: false,
        id: 62
    },
    {
        name : "seven",
        position: undefined,
        foundPair: false,
        id: 72
    },
    {
        name : "eight",
        position: undefined,
        foundPair: false,
        id: 82
    },
];
