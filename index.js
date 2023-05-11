let StartGame = document.getElementById("startbtn");
let Newbtn = document.getElementById("newbtn");
let Card = document.getElementById("card-el");
let Sum = document.getElementById("sum-el");
let Message = document.getElementById("message-el");
let Paragraph = document.getElementById("paragraph");
let sumCards = 0;
let hasBlackJack = true;
let isAlive = true;

let player = {
  name: "Per",
  chips: 200,
};

Paragraph.textContent = player.name + " :$" + player.chips;
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 12);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
function render() {
  let newMessage = "";
  if (sumCards < 21) {
    newMessage = "Do you want to draw a new card?";
  } else if (sumCards === 21) {
    newMessage = "You've got a BlackJack!";
    hasBlackJack = true;
  } else {
    newMessage = "You are out of the game!";
    isAlive = false;
  }
  Message.textContent = newMessage;
}

Newbtn.addEventListener("click", function () {
  if (sumCards < 21) {
    let newCard = getRandomNumber();
    Card.textContent += " " + newCard;
    sumCards += newCard;
    Sum.textContent = "Sum: " + sumCards;
    render();
  }
});

StartGame.addEventListener("click", function () {
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();

  sumCards = firstCard + secondCard;

  Card.textContent = "Card: " + firstCard + " " + secondCard;
  Sum.textContent = "Sum: " + sumCards;

  render();
});
