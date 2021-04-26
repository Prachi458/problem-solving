/* Reverse an array of integers. */

function reverseArray(a) {
    let length=a.length;
    let arr=[];
    for(let i=length-1;i>=0;i--){
        arr.push(a[i]);
    }
    return arr;
}