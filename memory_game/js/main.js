var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var checkForMatch = function() {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log(alert("You found a match!"));
	}
	else {
		console.log(alert("Sorry, try again."))
	}
}
var flipCard = function() {
	this.getAttribute("data-id", "cardId")
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
var createBoard = for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click", flipcard);
	cardElement.appendChild("game-board");
}

createBoard();
checkForMatch();
