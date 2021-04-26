/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
*/

function birthdayCakeCandles(candles) {
    let max=0;
    let count=0;
    let length=candles.length;
    for(let i=0;i<length;i++){
        if(candles[i]>max){
            max=candles[i];
        }
    }
    for(let i=0;i<length;i++){
        if(max == candles[i]){
            count+=1;
        }
    }
    return count;
}
