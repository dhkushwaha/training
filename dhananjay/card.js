function table(){
  noOfPlayer = 4;
  var p = noOfPlayer;
  
  if(p <= 6)
    {
      function Card(values, suites){
    this.value = values;
    this.suites = suites;
    this.name = suites +' '+ values ;
        
       // return name;
        console.log(this.name);
}

function deck(){

      this.deck= [];
      this.newDeck = makeDeck();
      this.shuffleDeck = Shuffle(deck);
      this.removeCard = rCard();
      this.addCard = addCard(deck);
       

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

deck();

    }
     else{
       console.log("Sorry !!! No of player is more than 6");
     }
  
}
table();
