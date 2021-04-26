/* Given an array A[] of size n. The task is to find the largest element in it. */

class Solution{
    largest (arr,n){
     let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return ("the largest element of given array is",max); 
}
}
