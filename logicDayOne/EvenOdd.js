//Problem Statement - 4
// Write a function that tells if a given no is even or odd.

function check(a){
     
    if(a%2==0){
        console.log("even no");
    }else{
        console.log("odd no");
    }
}
function Check2(a){
    return a%2===0 ? "Even no h" : "Odd no h";

}  

check(9)  //Odd no
check(12)  //even no
check(0)  //even no
check(-3)  //Odd no
check(-4)  //Even

console.log(Check2(9))  //Odd no h
console.log(Check2(12))  //even no h
console.log(Check2(0))  //even no h
console.log(Check2(-3))  //Odd no h
console.log(Check2(-4))  //Even no h