function Player(name) {

    this.name = name;
    this.hand = [];


    this.giveCardToPlayer = function(card) {
        this.hand.push(card);
    };

    this.acceptCardFromPlayer = function() {

        if (this.hand.length > 0)
            return this.hand.pop();
        else
            return 0;
    };

    this.handValue = function() {

        var score = 0;
        var cardValue = 0;
        for (var i = 0; i < this.hand.length; i++) {
            if (this.hand[i] == 0)
                cardValue = 0;
            else{
                cardValue = this.hand[i].getValue();
              }
            score = score + parseInt(cardValue);
        }
        return score;
    };


}