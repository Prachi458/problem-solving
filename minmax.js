/*
Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.
*/

class Solution{
    getMinMax(arr,n){
        let min=10000000000000000000;
        let max=0;
        for(let i=0;i<n;i++){
            if(arr[i]>max){
                max=arr[i];
            }
            if(arr[i]<min){
                min=arr[i];
            }
        }
        console.log(min,max);
    }
}