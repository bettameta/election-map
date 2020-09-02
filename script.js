// FACTORY FUNCTION TO ANNOUNCE EACH CANDIDATE //
var presHopeful = function(name, partyColor){ 
    // CANDIDATE OBJECTS //
    var candidate = {};
    // CALLED OUT PARAMETERS //
    candidate.name = name; 
    candidate.partyColor = partyColor;
    // DECLAIRING EMPTY | [ANY] VALUE //
    candidate.electionResults = "null";          
    candidate.totalVotes = 0;                   
    
    // ANNOUNCE FUNCTION TO RETURN INDIVIDUAL CANDIDATES //
    candidate.announceHopeful = function(){
/*
console.log(this.name + ", showing election results of " + this.electionResults + " with " + this.totalVotes + " total votes.");
*/
    };
    
    candidate.announceHopeful();
    // IDENTIFY EACH CANDIDATE BY NAME (ADDED PARTYCOLOR), RESULTS, AND TOTAL VOTES //
    return candidate;
};
// HERE ARE THE NAMED CANDIDATES (AND ADDED PARTYCOLOR) //
var candidate1 = presHopeful("Margaret Smith", [168,42,19]);   // RED //
var candidate2 = presHopeful("Shirley Chisholm", [18,79,158]); // BLUE //

/*
console.log("Margaret Chase Smith's party color is " + candidate1.partyColor);
console.log("Shirley Anita Chisholm' party color is " + candidate2.partyColor);
*/

// ELECTION RESULTS FOR MARGARET CHASE SMITH //
candidate1.electionResults = [5, 1, 7 ,2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0 ,5 ,3, 3, 3, 7, 4, 8, 9, 3, 7, 2 , 2 , 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

// ELECTION RESULTS FOR SHIRLEY ANITA CHISHOLM //
candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// ELECTION **UPDATES FOR MARGARET CHASE SMITH //
candidate1.electionResults[9] = 1;
candidate1.electionResults[4] = 17;
candidate1.electionResults[43] = 11;

// ELECTION **UPDATES FOR SHIRLEY ANITA CHISHOLM //
candidate2.electionResults[9] = 28;
candidate2.electionResults[4] = 38;
candidate2.electionResults[43] = 27;

/*
console.log (candidate1.electionResults);
console.log (candidate2.electionResults);
*/

// --- *** STATE RESULTS TO DECLARE WINNER BY INDIVIDUAL STATE *** ---//   
var setStateResults = function (state){
    // DECLARING EMPTY | [ANY] VALUE AS BASE FOR theStates[state].winner //
    theStates[state].winner = null;
    // IF SMITH HAS MORE VOTES THAN CHISHOLM //
    if (candidate1.electionResults[state] > candidate2.electionResults[state]){
        
        theStates[state].winner = candidate1;
    }
    // IF CHISHOLM HAS MORE VOTES THAN SMITH //
    else if (candidate2.electionResults[state] > candidate1.electionResults[state]){

        theStates[state].winner = candidate2;
    }
    // ESTABLISH COLORS ALOCATED TO STATES BY WINNER OR DRAW //
    var stateWinner = theStates[state].winner;
    if (stateWinner !== null){
        theStates[state].rgbColor = stateWinner.partyColor;
    }
    else theStates[state].rgbColor = [11, 32, 57];  

    // BOTTOM TABLE WILL DISPLAY STATE NAME AND ABR | TOTAL STATE VOTES PER CANDIDATE | WINNER OF THE STATE //
    var statesInfoTable = document.getElementById("stateResults");
    // TOP ROW VARIABLES //
    var header = statesInfoTable.children[0];
        var stateName = header.children[0].children[0];
        var abbrev = header.children[0].children[1];
    // NAME1 ROW VARIABLES = 0 //
    var body = statesInfoTable.children[1];
        var names1Name = body.children[0].children[0];
        var names1Results = body.children[0].children[1];
    //NAME2 ROW VARIABLES = 1 //
        var names2Name = body.children[1].children[0];
        var names2Results = body.children[1].children[1];
    // WINNER ROW LAST VARIABLE = 2 //
        var winnersName = body.children[2].children[2];
    
    // --- innerText VALUES FOR ABOVE VARIABLES ---//
    // HEADER //
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = theStates[state].nameAbbrev;
    //  NAME 1 //
    names1Name.innerText = candidate1.name;
    names1Results.innerText = candidate1.electionResults[state];
    // NAME 2 //
    names2Name.innerText = candidate2.name;
    names2Results.innerText = candidate2.electionResults[state];
    // IF THEN FOR WINNER RESULTS IN SPOT 2 OF CHART OH BOY, OH BOY...//
   if (theStates[state].winner !== null){
       winnersName.innertext = theStates[state].winner.name;
   }
   else {
        theStates.innerText = "Draw"
   }
};

// FUNCTION FOR CAROL'S TOTAL VOTES //
candidate1.totalVotes = function(){
    this.totalVotes = 0;
    // FORMULA TO ADD ARRAY //
    for (var i = 0; i < this.electionResults.length; i++){        
        this.totalVotes = this.totalVotes + this.electionResults[i];
    } 
};  

candidate1.totalVotes();
/*
console.log("Candidate Margaret Chase Smith's total votes are " + candidate1.totalVotes);
*/

// FUNCTION FOR SHIRLEY'S TOTAL VOTES //
candidate2.totalVotes = function(){
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){

        this.totalVotes = this.totalVotes + this.electionResults[i];
    } 
};  
candidate2.totalVotes();
/*
console.log("Candidate Shirley Anita Chisholm's total votes are " + candidate2.totalVotes);
*/

// DECLARE A WINNER //
var winner = "";
    if (candidate1.totalVotes > candidate2.totalVotes){
    winner = candidate1.name;
    }
    else if (candidate1.totalVotes == candidate2.totalVotes){
    winner = "Undetermined!  The US election is a DRAW. The House of Representatives will immediately go into session.";
    }
    else {
    winner = candidate2.name;
}
/*
console.log("Our New President Is... " + winner);
*/

// TOP TABLE WITH NATIONAL RESULTS //
var nationTable = document.getElementById("countryResults");
// CLASS IDs = TD = 3RD CHILD ---------- [] = Y PLACEMENT //
nationTable.children[0].children[0].children[0].innerText = candidate1.name;
nationTable.children[0].children[0].children[1].innerText = candidate1.totalVotes;
nationTable.children[0].children[0].children[2].innerText = candidate2.name;
nationTable.children[0].children[0].children[3].innerText = candidate2.totalVotes;
nationTable.children[0].children[0].children[5].innerText = winner;


/* ------------------------------
FICTICIOUS PRESIDENTIAL RACE BASED ON HISTORICAL FACTS:
-Margaret Chase Smith (1964) (REP)- Smith was the first woman to have her name placed in nomination for President by a major party. She received Republican primary votes in New Hampshire, Illinois, Massachusetts, Texas, and Oregon, among others, and had twenty-seven first ballot votes at the Republican National Convention. 
-Shirley Anita Chisholm (1972) (DEM)- Chisholm was the first African American woman to seek a major party’s nomination for U.S. President. She campaigned throughout the country and was on the ballot in twelve primaries in what was largely an educational campaign. She received 151.95 delegate votes at the Democratic National Convention.
---------------------------------*/




