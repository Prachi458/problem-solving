/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

function diagonalDifference(arr) {
    let n=arr.length;
    let diagonal1=0;
    let diagonal2=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i==j){
                diagonal1+=arr[i][j];
            }
            if(i+j == n-1){
                diagonal2+=arr[i][j];
            }
        }
    }
    return Math.abs(diagonal1 - diagonal2);

}
