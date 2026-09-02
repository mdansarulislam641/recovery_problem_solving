
// Question 1: Value Detective:

function describeValue (value){

    if(Boolean(value)){
        return `"${typeof(value)}" | "truthy"`;
    }
   
    return `"${typeof(value)} | falsy"`;

}

// console.log(describeValue(NaN))


// Question 2: Bangladesh Weekend Machine

function getDayType(userInput){

    let day = userInput.toLowerCase();

    switch (day) {
        case day = "friday":
        case day = "satarday":
            return("Weekend");

        case day = "sunday":
        case day = "monday":
        case day = "tuesday":
        case day = "wednesday":
        case day = "thrusday":
            return("Workding Day");

        default:
            return("Invalide Day")
    }
}

// console.log(getDayType("MONDAY"))



// Question 3: Username Gatekeeper

function validateUsername(username){

    if(username.length < 4) return "Too Short";
    else if(username.includes(" ")) return "No Space Allowed";
    else if(username.toLowerCase().includes("admin")) return "Reserved Word";
    else return "Available";
}

// console.log(validateUsername("abcddsfsd"))



// Question 4: Dhaka CNG Fare Meter 

function getCngFare(distance, isNight = false, waitingMinutes = 0){
       
    let totalFair = 50;

    if(distance > 2){
        if(!isNight){

            totalFair = (((distance - 2) * 15) + 50) + (waitingMinutes * 2);
            return totalFair;
        }
        else{
            let fairWithWaitingMinute = (((distance - 2) * 15) + 50) + (waitingMinutes * 2);

            return totalFair = (fairWithWaitingMinute * 20)/100 + fairWithWaitingMinute;
        }

    }

    return totalFair;

};

// console.log(getCngFare(5, true, 10));


// Question 5: Run Chase Commentator

const getChaseVerdict = (target, scored, ballsLeft)=>{
    const runsNeeded = target - scored;
    let verdict = "";

    if(runsNeeded <=0){
        return `"Won"`
    }
    else if (ballsLeft <= 0){
        return `"Lost"`;
    }
    else{
        const requiredRate = (runsNeeded / ballsLeft) * 6;

        verdict = requiredRate <=6 ? "Comfortable" : requiredRate <=12 ? "Tough" : "Almost Impossible";

        const result = `"Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}"`
        return result;
    }

}

console.log(getChaseVerdict(200, 200, 12))