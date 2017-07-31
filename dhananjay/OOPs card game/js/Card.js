function Card(suits, value) {
    this.suits = suits;
    this.value = value;
    this.name = suits +' '+ value ;


    console.log(this.name);

    this.getValue = function () {

	    if (this.value == 'J') {
	        return [11];

	    } else if (this.value == 'K') {
	        return [12];

	    } else if (this.value == 'Q') {
	        return [13];

	    }
	    else if (this.value == 'A') {
	        return [14];

	    }else {
	        return parseInt(this.value, this.value);
	    }
    };

}
Card(this.suits, this.value);
var s = new Deck();
console.log(s.this.getsuits);