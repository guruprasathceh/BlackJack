// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard 

// if(sum == 21){
//     console.log("Wohooo! You've got BlackJack!")

// }
// else if(sum < 21){

//     console.log("Do you want to draw a new card")
// }
// else{
//     console.log("You are out of the game!!")
// }

// let age = 22  




let cards = [] //array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")

//object creation
let player = {
    name :"per",
    chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+ player.chips



function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "Wohoo! you have got BlackJack!"
        hasBlackJack = true

    }
    else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for(let i = 0;i < cards.length; i++){
        cardsEl.textContent +=  cards[i]+" "
    }
    sumEl.textContent = "Sum: " + sum
}

function newCard(){
    if( isAlive && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        message = "Drawing a new card from deck!"
        messageEl.textContent = message
        sum = sum + card
        sumEl.textContent = "Sum: " + sum
        renderGame()
    }
    
    
}

function getRandomCard(){

    let random = Math.floor(Math.random() * 13)+1
    if(random === 1){
        return 11
    }
    else if(random > 10)
    {
        return 10
    }
    else{
        return random
    }
}


