/*
Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
*/

function aVeryBigSum(ar) {
    let sum=0;
    let result;
    for(let i=0;i<ar.length;i++){
        sum=sum+ar[i];
    }
    result = sum;
    return result;
}