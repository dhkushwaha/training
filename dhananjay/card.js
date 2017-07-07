function Table() {
  
  this.deck= [];
  
  function Deck(){
    
      this.newDeck = makeDeck();
      this.shuffleDeck = Shuffle(deck);
      this.removeCard = rCard();
      this.addCard = addCard(deck);
       
      function Card(values, suites){
      this.value = values;
      this.suites = suites;
      this.name = suites +' '+ values ;
      console.log(this.name);
      }
      
      function makeDeck(){
      var suites = ['Heart',
                  'Diamonds',
                  'Spades',
                  'Clubs'];
          
      var values = ['A', 
                  '2', 
                  '3', 
                  '4', 
                  '5', 
                  '6', 
                  '7', 
                  '8', 
                  '9', 
                  '10', 
                  'J',
                  'Q', 
                  'K'];
       deck = [];
    
       for(var i=0; i < suites.length; i++)
         {
            for (var j=0; j < values.length;j++){

            var newcard = new Card(values[j],suites[i]);
            deck.push(newcard);
             
           }
        }
   return deck;      
    
   }
    
   function Shuffle(){
    
      var i, j, temp;

       for (i = this.deck.length - 1;  i > 0;  i--){

       j = Math.floor(Math.random() * (i+1));
         
       temp = this.deck[i];
       this.deck[i] = this.deck[j];
       this.deck[j] = temp;
     }

      console.log(deck);
    }
    
    function rCard(){
    if (this.deck.length > 0)
    return this.deck.shift();
   
  else
    return null;
}

function addCard(deck){
  this.deck.push(deck);
    }   
  }
  Deck();
    
  function Letsplay(){
      
  this.Players = [];
  this.noOfPlayers = Players.length;
    
  function addPlayer() {
    
       function Player(name, id) {
        this.id = id;
        this.name = name;
        this.hand = [];
        }

        var playerName = ['A', 'B','C','D','E'];

        for (var i = 0; i < playerName.length; i++) {
            var newPlayer = new Player(playerName[i], i);
            Players.push(newPlayer);

        }
    
    var noOfP = playerName.length;
    console.log("No of Players on the table is " + noOfP);
    console.log(this.Players);
    
    
    if(noOfP <= 6){
      console.log("lets distribute the card ");
      //console.log(deck.length);
      
      function cardDistribution(){
        
        var remainingCard = (deck.length % noOfP );
        var cardToDist = ((deck.length - remainingCard) / noOfP );
        for (var i = 0; i < cardToDist; i++){
          
          for (var j = 0; j < noOfP; j++){
            
            var cardTaken = cardAccepted();
            Players[j].hand.push(cardTaken);
          }
        }
        
        function cardAccepted() {
          
          var randCard = Math.floor(Math.random() * deck.length);
          var cardTaken = deck[randCard];
          deck.splice(randCard, 1);
          
          return cardTaken;
        }
        console.log(Players);
      }
      cardDistribution();
        

    
    } else {
        console.log("Sorry!! we can have maximum of 6 players on table");
    }
    
  }
    addPlayer();
    
  }
  Letsplay();  
  
}
Table();

