/*
Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array
 and return it. In other words, arrange the elements into a sequence such that a1 
 >= a2 <= a3 >= a4 <= a5..... (considering the increasing lexicographical order).
*/

class Solution {
    //Function to sort the array into a wave-like array.
    convertToWave(arr, n){
        let temp,i;
        for(i=0;i<n-1;i++){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            i++;
        }
        return arr;
    }
}