console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = {
  rank: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'],
  suit: ['clubs', 'diamonds', 'hearts', 'spades']
};

function createPlayers(players) {
  var playerArray = [];
  for (var i = 1; i <= players; i++) {
    var singlePlayer = {};
    singlePlayer.name = 'Player ' + i;
    playerArray.push(singlePlayer);
  }
  return playerArray;
}

function dealCards(players, numOfCards) {
  var cardsShuffled = shuffleCards();
  for (var k = 0; k < players.length; k++) {
    var cards = [];
    for (var a = 0; a < numOfCards; a++) {
      cards.push(cardsShuffled[a]);
    }
    players[k].hand = cards;
    cardsShuffled.splice(0, numOfCards);
  }
  return players;
}

function shuffleCards() {
  var cardDeck = [];
  for (var i = 0; i < deck.suit.length; i++) {
    for (var j = 0; j < deck.rank.length; j++) {
      var card = {};
      card.rank = deck.rank[j];
      card.suit = deck.suit[i];
      cardDeck.push(card);
    }
  }
  cardDeck = _.shuffle(cardDeck);
  return cardDeck;
}
function calculateWinner(playerArr) {
  var winnerScore = [];
  var bestScore = 0;
  for (var i = 0; i < playerArr.length; i++) {
    var value = 0;
    for (var a = 0; a < playerArr[i].hand.length; a++) {
      if (playerArr[i].hand[a].rank === 'jack' || playerArr[i].hand[a].rank === 'queen' || playerArr[i].hand[a].rank === 'king') {
        value += 10;
      } else if (playerArr[i].hand[a].rank === 'ace') {
        value += 11;
      } else {
        value += playerArr[i].hand[a].rank;
      }
    }
    console.log(playerArr[i].name, 'Score:', value);
    playerArr[i].value = value;
    if (playerArr[i].value > bestScore) {
      winnerScore.push(playerArr[i].value);
      bestScore = playerArr[i].value;
    }
  }
  var winners = [];
  for (var z = 0; z < playerArr.length; z++) {
    if (playerArr[z].value === winnerScore[winnerScore.length - 1]) {
      winners.push(playerArr[z]);
    }
  }
  if (winners.length > 1) {
    console.log('There was a tie!');
    console.log('Redrawing!');
    var playersWithCards = dealCards(winners, winners[0].hand.length);
    calculateWinner(playersWithCards);
  } else {
    console.log(winners[0].name, 'won the game with', winners[0].value + '!');
  }
}

function handleGame(amountOfPlayers, numOfCards) {
  var players = createPlayers(amountOfPlayers);
  var playersWithCards = dealCards(players, numOfCards);
  calculateWinner(playersWithCards);
}
