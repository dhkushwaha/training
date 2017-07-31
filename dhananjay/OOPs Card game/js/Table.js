function Table() {
	this.players = [];
    


	this.playerOnTable = function () {

		this.pName = ['Aman','Badal','Chinmay','Dhananjay'];

		
			players.push(pName);
		  console.log("Player on the table are: " + pName);
	};
	
  playerOnTable();
  
  
  this.addPlayer = function () {

		

		if(players.length > 0 && players.length < 6) {
			   pName.push('Emil','Geeta');

		}
		
	console.log("After player added on table players are: " +pName);
	};
 addPlayer();

  this.removePlayer = function () {

		var removedP;

		if(players.length > 0 && players.length < 6) {
			removedP = pName.pop();

		}
  console.log("Removed Player is:" + removedP);
	console.log("Remaining Players on Table are: " + pName + ".");
	};
 removePlayer();


 // this.getPlayers = function(){
 // 	return this.players;
 // };

}
Table();
	
