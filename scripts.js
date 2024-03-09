/* 2 players
   1 deck of cards = 52 cards
   4 suits = 13 in each
   need to deal 26 cards to each player
   iterate through the cards randomly for each player
   highest card earns a point
   ties get 0 points
   need to calculate values to determine winner*/

 /* A=1, J=11, Q=12, K=13*/
let suits = ['spades', 'diamonds', 'clubs', 'hearts']
let values = ['1','2','3','4','5','6','7','8','9','10','11','12','13']

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }
}
         /*each card must have a suit and value*/
class Card { 
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}
         /* use flatMap to combine into one array rather than 4 separate arrays*/
function newDeck () { 
    return suits.flatMap(suit => {
    return values.map(value => {
       return new Card(suit, value)
     })
   })   
}

class Deck { 
    constructor(cards = newDeck()) {
        this.cards = cards
    }
   shuffle() {          /* swapping old index with new placement to randomize*/
        for (let i = this.cards.length - 1; i > 0; i--) {
           let newIndex = Math.floor(Math.random() * (i + 1))
           let oldIndex = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldIndex
        }
    }
}

class Game {
    constructor () {
        this.player = [new Player(), new Player()];
    }
    startGame() {
        this.player.push(new Player(), new Player());
        console.log('Lets play War!')
        this.playGame();
        this.endGame();
     }
     playGame() {
        let player1 = this.player[0];
        let player2 = this.player[1];
        
/*this loop will run while each player still has a card in their hand*/
        while (player1.hand.length !==0 && player2.hand.length !==0){
          let player1Card = player1.hand.pop();
          let player2Card = player2.hand.pop();
          if (player1Card.value > player2Card.value) { 
            player1.points += 1;
            console.log(player1.name + ' gets the point');
          }
          else if (player2Card.value > player1Card.value) {
            player2.points += 1;
            console.log(player2.name + ' gets the point');
          }
          else {
            player1.points + 0 && player2.points + 0;
            console.log ('no one gets a point')
          }
        }
    } 
 /* will compare player points at end of game to determine winner*/
      endGame() {                 
       
        let player1 = this.player[0];
        let player2 = this.player[1];
        let points = 0;

        if (player1.points > player2.points) {
            console.log(player1.name + ' wins the game!');
        }
        else if (player2.points > player1.points) {
            console.log (player2.name + ' wins the game!');
        }
        else {
            console.log ('You are both winners!')
        }
    }
}


let deck = new Deck();
deck.shuffle();

player1Hand = new Deck(deck.cards.slice(0, 26))
player2Hand =  new Deck(deck.cards.slice(26, 52))

let game = new Game();
game.startGame();