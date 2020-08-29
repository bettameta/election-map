var presHopeful = function(fullName){ 

    var candidate = {};
    candidate.name = fullName; 
    candidate.electionResults = "null";  
    candidate.totalVotes = 0; 
 
    candidate.announceHopeful = function(){
        console.log(this.name + ", showing election results of " + this.electionResults + " with " + this.totalVotes + " total votes.");
        };
 
    candidate.announceHopeful();
 
    return candidate;
};
 
var candidate1 = presHopeful("Carol Moseley Braun");
var candidate2 = presHopeful("Shirley Chisholm");