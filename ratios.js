/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
*/

function plusMinus(arr) {
    let arrayLength = arr.length;
    let positiveNumber=0;
    let negativeNumber=0;
    let zeroNumber=0;
    for(let i of arr){
        if(i>0){
            positiveNumber=positiveNumber+1;
        }
        else if(i<0){
            negativeNumber=negativeNumber+1;
        }
        else{
            zeroNumber=zeroNumber+1;
        }
    }
    console.log((positiveNumber/arrayLength).toFixed(6));
    console.log((negativeNumber/arrayLength).toFixed(6));
    console.log((zeroNumber/arrayLength).toFixed(6));
}
