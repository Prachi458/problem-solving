/*
Staircase detail

This is a staircase of size n=4:

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/

function staircase(n) {
    let string="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i;j++){
            string += " ";
        }
        for(let k=1;k<=i;k++){
            string+= "#";
        }
        string += "\n";
    }
    console.log(string);
}
