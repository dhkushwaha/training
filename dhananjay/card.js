function Table() {
  
  this.deck= [];
  
  function Deck(){
    
      this.newDeck = makeDeck();
      this.shuffleDeck = Shuffle(deck);
      // this.removeCard = rCard();
      // this.addCard = addCard(deck);
       
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
                  2, 
                  3, 
                  4, 
                  5, 
                  6, 
                  7, 
                  8, 
                  9, 
                  10, 
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
    
   /*function rCard(){
    if (this.deck.length > 0)
    return this.deck.shift();
   
  else
    return null;
}

function addCard(deck){
  this.deck.push(deck);
    }  */
    
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
    console.log("No of Players on the table is " + noOfP + " And players are");
    console.log(playerName);
    
    
    if(noOfP <= 6){
      console.log("lets distribute the card among the above players");
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
          deck.splice(cardTaken, 1);
          
          return cardTaken;
        }
          
        console.log(this.Players);
        console.log("lets calculate the score of the each players");
          
        for (var j = 0; j < noOfP; j++){
              
               for (var i = 0; i < cardToDist; i++) {
                
               Players[j].hand[i].value;
                   
                switch (Players[j].hand[i].value) {
                        
                    case "A":
                        Players[j].hand[i].value =  14;

                        break;
                        
                    case 2:
                      Players[j].hand[i].value =  2;
 
                        break;
                    case 3:
                        Players[j].hand[i].value =  3;

                        break;
                    case 4:
                        Players[j].hand[i].value = 4;

                        break;
                    case 5:
                        Players[j].hand[i].value = 5;

                        break;
                    case 6:
                        Players[j].hand[i].value =  6;

                        break;
                    case 7:
                        Players[j].hand[i].value =  7;

                        break;
                    case 8:
                        Players[j].hand[i].value =  8;

                        break;
                    case 9:
                        Players[j].hand[i].value =  9;

                        break;
                    case 10:
                        Players[j].hand[i].value =  10;

                        break;
                    case "J":
                        Players[j].hand[i].value =  11;

                        break;
                    case "Q":
                        Players[j].hand[i].value =  12;

                        break;
                    case "K":
                        Players[j].hand[i].value =  13;

                        break;
                    

                   
                }
               /*console.log(Players[j].hand[0].value);  */                 
              
                   
                  
                }
            
               for (var i = 0; i < cardToDist; i++) {
               var scoresOfPlayers = [Players[j].hand[0].value, Players[j].hand[1].value, Players[j].hand[2].value,
                                      Players[j].hand[3].value, Players[j].hand[4].value, Players[j].hand[5].value, 
                                      Players[j].hand[6].value, Players[j].hand[7].value, Players[j].hand[8].value, 
                                      Players[j].hand[9].value].reduce(add, 0);
                   
      
               function add(a, b) {
                 
               return a + b;
                   
                 }
               }
               console.log(scoresOfPlayers);
               function sum(scoresOfPlayers) {
                   
               var scoresOfPlayers = [Players[j].hand[0].value, Players[j].hand[1].value, Players[j].hand[2].value,
                                      Players[j].hand[3].value, Players[j].hand[4].value, Players[j].hand[5].value, 
                                      Players[j].hand[6].value, Players[j].hand[7].value, Players[j].hand[8].value, 
                                      Players[j].hand[9].value];
            
               scoresOfPlayers.sort(function(a, b){return a-b});
            
               console.log(scoresOfPlayers);
               
               var s = 0;
                   for(var i = 0; i < scoresOfPlayers.length; i++) {
                       s = s + scoresOfPlayers[i];
                   }
                   console.log(s)
              
                  
              }
              sum(scoresOfPlayers);
             }
             
             
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
