// FACTORY FUNCTION TO ANNOUNCE EACH CANDIDATE //
var presHopeful = function(fullName, partyColor){ 
// CANDIDATE OBJECTS //
    var candidate = {};
    candidate.name = fullName; 
    candidate.party = partyColor;
    candidate.electionResults = "null";          
    candidate.totalVotes = 0;                   
    

    candidate.announceHopeful = function(){
        console.log(this.name + ", showing election results of " + this.electionResults + " with " + this.totalVotes + 
        " total votes.");
        };
    
    candidate.announceHopeful();
// IDENTIFY CANDIDATE BY NAME (ADDED PARTYCOLOR), RESULTS, AND TOTAL VOTES //
    return candidate;
};
// HERE ARE THE NAMED CANDIDATES (AND ADDED PARTYCOLOR) //
var candidate1 = presHopeful("Margaret Chase Smith", [126, 31, 14]);   // RED //
var candidate2 = presHopeful("Shirley Anita Chisholm", [14, 62, 126]); // BLUE //

console.log(candidate1.party);
console.log(candidate2.party);

// ELECTION RESULTS FOR CAROL //
candidate1.electionResults = [5, 1, 7 ,2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0 ,5 ,3, 3, 3, 7, 4, 8, 9, 3, 7, 
2 , 2 , 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

// ELECTION RESULTS FOR SHIRLEY //
candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 
    3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// ELECTION UPDATES FOR CAROL //
candidate1.electionResults[9] = 1;
candidate1.electionResults[4] = 17;
candidate1.electionResults[43] = 11;

// ELECTION UPDATES FOR SHIRLEY //
candidate2.electionResults[9] = 28;
candidate2.electionResults[4] = 38;
candidate2.electionResults[43] = 27;

console.log (candidate1.electionResults);
console.log (candidate2.electionResults);

// FUNCTION FOR CAROL'S TOTAL VOTES //
candidate1.totalVotes = function(){
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){
    
        this.totalVotes = this.totalVotes + this.electionResults[i];
    } 
};  

candidate1.totalVotes();
console.log("Candidate Margaret Chase Smith's total votes are " + candidate1.totalVotes);


// FUNCTION FOR SHIRLEY'S TOTAL VOTES //
candidate2.totalVotes = function(){
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){
    
        this.totalVotes = this.totalVotes + this.electionResults[i];
    } 
};  
candidate2.totalVotes();
console.log("Candidate Shirley Anita Chisholm's total votes are " + candidate2.totalVotes);

// DECLARE A WINNER //
var winner = "";
if (candidate1.totalVotes > candidate2.totalVotes){
    winner = candidate1.name;
}
else if (candidate1.totalVotes == candidate2.totalVotes){
    winner = "undetermined!  The election is a draw. The House of Representatives will immediately go into session.";
}
else {
    winner = candidate2.name;
}
console.log("Our new President elect is, " + winner);


    
    
    
    
    