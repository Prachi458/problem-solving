/*
Given an array, rotate the array by one position in clock-wise direction.
*/

class Solution{
    rotate(arr,n){
        arr.unshift(arr.pop());
        let newArray=[];
        for(let i=0;i< n;i++){
             newArray.push(arr[i]);
        }
        return newArray;
    }
}