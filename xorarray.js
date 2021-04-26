/* 
You are given an array arr[], you have to re-construct an array arr[].
The values in arr[] are obtained by doing Xor of consecutive elements in the array.
*/

class Solution {
    game_with_number(arr,n){
       for(let i=0;i<n;i++){
           arr[i]=arr[i]^arr[i+1];
       }
       return arr;
    }
}