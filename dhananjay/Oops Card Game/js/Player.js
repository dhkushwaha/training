function Player(pname) {
	this.pname = pname;
	this.cards = [];
	
	var score = 0;
    console.log(this.pname);

    this.cardDistribution = function () {
    	var hand = [];

    var cardInDeck = (deck.length % this.players.length);


    var cardInHand = (deck.length - cardInDeck) / this.players.length;
    // this.takeCardFromDeck = function () {
    	var randCard = Math.floor(Math.random() * deck.length);
    	var pickedCard = deck[randCard];
    	
    	var a = deck.splice(pickedCard, 1);

    	console.log(a);
    	for(var i = 0; i < this.pName.length ; i++) {
    		console.log(players[0][i]);
    	}
    	

    // };

    // takeCardFromDeck();

    for(var i = 0; i < cardInHand; i++) {

    		for(var j = 0; j < this.pName.length; j++) {
    			// var pickedCard = takeCardFromDeck();
    			players[0][j].hand.push(pickedCard);
    		}
    	}
    };
    console.log(this.players);
    cardDistribution();
    
    
   
    
	// this.pscore = function () {

		
	// 	var hand = [];

	// 	for(var i = 0; i < this.cards.length; i++) {

	// 		var cvalue = this.cards[i].value();

	// 		if( cvalue.length == 1) {

	// 			score += value[0];
	// 		} else {
	// 			hand.push(value);
	// 		}
	// 	}

	// 	return score;
 //    };

 //    console.log(score);


// var t = new Table();
// var recievedPlayers = t.getPlayers();
// console.log(recievedPlayers);


}
console.log(this.pName.length);
Player(this.players);


