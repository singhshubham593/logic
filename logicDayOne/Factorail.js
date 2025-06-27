// write a factorial of given no
// input: A no, positive integer -> 0,1,2,3...
// return: factorial of that no
//Factorial: Multiplication of all +ve integer from 1 to given no

// One Way
function fact(nos){
    let a=1;
    for(let i=1;i<=nos;i++){
        a=a*i;
    }
    return a;
}

// 2nd way
function facts(nos){
    if(nos ===0 || nos ===1){
        return 1;
    }
    return nos*facts(nos-1)
    
}
console.log(facts(4));