// Problem Statement -5
// Write a function that return the reverse of string.
// input="Shubham"
// output="mahbuhS"

/*
//way one
function reverses(strname){
    let re=""; // empty string to store reverse valve
  for(let i=strname.length-1;i>=0;i--){ // move to every string from back 
    re +=strname[i];
  }
  return re;
}
*/
function reverses(strname){
    let re=strname.split('').reverse() ;
    // split:use splite string - [ 'S', 'h', 'u','b', 'h', 'a','m' ]
    // reverse:use to reverse splited string - [ 'm', 'a', 'h', 'b', 'u', 'h', 'S' ]
    // join: use to join string -m,a,h,b,u,h,S
    return re;
}
console.log(reverses("Shubham"));