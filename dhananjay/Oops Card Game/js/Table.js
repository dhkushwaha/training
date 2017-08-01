function Table() {

    this.players = [];

    this.getPlayer = function() {

        var pName = ['Aman', 'Badal', 'Chinmay', 'Dhananjay'];

        for (var i = 0; i < pName.length; i++) {
            var joiningPlayer = new Player(pName[i]);
            this.players.push(joiningPlayer);
        }
        console.log("players with there hand Value");
        console.log(this.players);

            d.makeDeck();
            d.shuffle();
            console.log("deck is get shuffled");
            this.cardDistribution();
    };


    
    this.removePlayer = function(name) {
        this.players.pop();
        console.log("Player " + name + " left the game ");
    };


   
    

    this.cardDistribution = function() {

        var noOfCards = d.cards.length;
        var noOfPlayers = this.players.length;
        var scoreOfPlayers = [];
        
        // console.log(scoreOfPlayers);

        while (noOfCards > 0) {
                var rcard = d.removeCardFromDeck();
                this.players[noOfCards%noOfPlayers].giveCardToPlayer(rcard);
                noOfCards--;
        }
        console.log("Removed Card is ");
        console.log(rcard);

        console.log("Cards Distributed");
        console.log("score of Players");

        for (var i = 0; i < noOfPlayers; i++) {

            var score = this.players[i].handValue();
            
            console.log(this.players[i].name + ' score is :  ' + score);
            var sc = {
                'Player': this.players[i].name,
                'Handsvalues': score
            };
            // scoreOfPlayers.push(sc);

            // var sortedScore = [];
            // sortedScore.push(sc.Handsvalues);

            // console.log(sortedScore);


           
        }
        
     
    };
var d = new Deck();
}
var t = new Table();
t.getPlayer();