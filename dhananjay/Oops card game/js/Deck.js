function Deck() {

    this.cards = [];

    this.makeDeck = function() {
        var suite = [ "hearts", "diamond", "clubs", "spades" ];
        var value = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
        //for each type of suit
        for (var i = 0; i < suite.length; i++) {
            //and for each value
              for (var j = 0; j < value.length; j++) {
            //make a card
              this.cards.push(new Card(value[j], suite[i]));
            }
        }
       
    };

 

    this.shuffle = function() {

        var i, temp, j;

        for (i = this.cards.length - 1; i > 0; i--) {

            j = Math.floor(Math.random() * (i + 1));
            temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;

        }
    };

    this.addCardInDeck = function(card) {
        this.cards.push(card);
    };

    this.removeCardFromDeck = function() {
        if (this.cards.length > 0)
            return this.cards.pop();
    };

}