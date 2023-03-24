// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    const hq = 42;
    return Math.abs(blocks - hq)
}

function distanceFromHqInFeet(blocks){
  const feet = distanceFromHqInBlocks(Math.abs((blocks - 42) * 264)+ 42);
  return feet;
}
function distanceTravelledInFeet(start, destination){
    const block = 264;
    return Math.abs((start - destination) * block)
}
function calculatesFarePrice(start, destination) {
     const distance = distanceTravelledInFeet(start, destination);
     const freeRide = 400;
        let price;
        if (distance <= freeRide){
            price = 0;
        } else if (distance > 400 && distance < 2000){
            price = (distance - freeRide) * 0.02;
        } else if (distance > 2000 && distance < 2500){
            price = 25;
        } else 
            price = "cannot travel that far"
        
        return price;
    }
