function Deck() {
  this.suits = [ "hearts", "diams", "clubs", "spades" ];
  this.value = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];

  this.deck = [];



this.makeDeck = function () {
  
  deck = [];
  //for each type of suit
  for( var i = 0; i < suits.length; i++ ) {
    //and for each rank
    for( var j = 0; j < value.length; j++ ) {
      
      //make a card
      var card = {};
      card.suit = suits[i];
      card.value = value[j];
      
      deck.push(card);
    }
  }
  
  console.log( "Create a new Deck of ", deck.length, " CARDS" );
  console.log( deck );
    
 this.removeCard = function () {
  
  var card;
  
  if( deck.length > 0 ) {
    
    this.randIndex = Math.floor( Math.random() * deck.length );
    card = deck.splice( randIndex, 1 )[0];
  }
  
  return card;
};

console.log("The remove Card is");
console.log(card);
removeCard();
  
console.log("Remaining Card in Deck");
console.log(deck);
  
  this.addCard = function (card) {
      deck.push(card);
      
  };
  
  console.log("The Card to be added is");
  console.log(card);
  addCard();
  
  this.shuffle = function (){
    
      var i, j, temp;

       for (i = deck.length - this.randIndex;  i > 0;  i--){

       j = Math.floor(Math.random() * (i+1));
         
       temp = deck[i];
       deck[i] = deck[j];
       deck[j] = temp;
     }
      console.log("Shuffled Deck is");
      console.log(deck);
    };
  shuffle();
  
    }
    makeDeck();

    this.getsuits = function () {
    	return this.suits;
    };

}
Deck();
