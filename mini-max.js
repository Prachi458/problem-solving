/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly 
four of the five integers. Then print the respective minimum and maximum values as a single line of two 
space-separated long integers.
*/

function miniMaxSum(arr) {
    let min=10000000;
    let max=0;
    let sum=0;
    let length=arr.length;
    for(let i=0;i<length;i++){
        sum+=arr[i];
        if(min>arr[i]){
            min=arr[i];
        }
        if(max<arr[i]){
            max=arr[i];
        }
    }
    console.log((sum-max),(sum-min));
}
