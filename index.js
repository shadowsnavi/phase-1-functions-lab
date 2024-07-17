// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks-42);
}
function distanceFromHqInFeet(blocks) {
    return Math.abs(blocks-42) * 264;
}
function distanceTravelledInFeet(num1, num2) {
    return Math.abs(num1 - num2) * 264;
}
function calculatesFarePrice (num1,num2){

    let feet = ((Math.abs(num1 - num2)) * 264)
    if (feet < 400) {
        return 0
    } 
    else if (feet < 2000) {
        return ((feet -400) * 0.02)
    }
    else if (feet > 2000 && feet < 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}