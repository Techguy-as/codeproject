
let cards = []
let sum =0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl= document.getElementById("sum-el")
//let sumEl= document.querySelector("#sum-el")
let cardsEl= document.getElementById("cards-el")

function getRandomCard() {
  let randomNumber= Math.floor(Math.random()* 13 ) + 1
  if(randomNumber>10){
    return 10
  }else if(randomNumber === 1){
return 11
  }else{
    return randomNumber
  }
}
let player = {
   name : "ASG",
   chips : 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
  renderGame()
}
function renderGame() {
 cardsEl.textContent= "Cards: "
  for (let a = 0; a < cards.length; a++) {
    cardsEl.textContent += cards[a] + " "
    
  }
  sumEl.textContent = "Sum:" + sum
  
  if (sum < 21) {
    message ="Would you like to draw a new card 😉"
    }else if (sum === 21){
     message="You've got blackjack "
      hasBlackjack = true
    }else {
        message=" Sorry! you're out of the game "
        isAlive =  false
    }
    messageEl.textContent = message
}
function newCard() {
  if (isAlive === true && hasBlackjack === false) {
      let card = getRandomCard()
   sum += card
   cards.push(card)
   console.log(cards)
    renderGame()
  }

}

