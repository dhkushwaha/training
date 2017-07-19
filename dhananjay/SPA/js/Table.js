function Table() {

    this.Players = [];
    


    function addPlayer() {
        _.each(playerName, function(name, key) {
            var newPlayer = new Player(name, key);
            Players.push(newPlayer);
        });
    }
    addPlayer();

    

    var playersCount = this.Players.length;
    var maxPlayers = 0;

  
        startGame(8);
        function startGame(maxPlayers) {

        if (playersCount <= maxPlayers) {

            console.log("Game Started");


            var D = new Deck();
            D.makeDeck();
            var shuffledCards = D.shuffle(this.cards);

            console.log("Cards Shuffled");
            distributeCard(shuffledCards);



        } else {
            document.getElementById('displayPlayers').innerHTML = '<h3>Sorry! only ' + maxPlayers + ' are allowed</h3>';
        }

       }
    
}
