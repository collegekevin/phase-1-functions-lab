// Code your solution in this file!
function distanceFromHqInBlocks(street){
    // if (street >= 42)
    //    let blocks = street - 42
    // else if (street < 42)
    //    let blocks = 42 - street 
    // return blocks
    return Math.abs(street-42)
}

function distanceFromHqInFeet(street){
    const blocks = Math.abs(street-42)
    const feet = blocks * 264
    return feet;
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    const distance = Math.abs(startBlock-destinationBlock) * 264;
    return distance;
}

function calculatesFarePrice(startBlock, destinationBlock){
        //returns the fare for the customer
    const fareDistance = Math.abs(startBlock-destinationBlock) * 264;
    //console.log (fareDistance)
        if (fareDistance <= 400){
            return 0;    
        }
        else if (fareDistance <= 2000){
            return (fareDistance-400) * .02;
        }
        else if (fareDistance <= 2500){
            return 25;
        }
        else if (fareDistance > 2500){
            return "cannot travel that far";
        }
    //console.log("Hi");
    }
    //console.log (calculatesFarePrice(10, 14))





