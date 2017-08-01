function Card(value, suite) {
    this.value = value;
    this.suite = suite;
    this.name = suite + ' ' + value;

    console.log(this.name);
     
    this.getValue = function() {
        
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
	        return parseInt(this.value);
	    }

        
    };
}
