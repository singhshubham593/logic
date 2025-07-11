// write a fun that generate and print a multiplication table for a given no to a specific range
//Input: 2 +ve no
//  -Table of
//  - Table till
//Return:Nothing only print the result
// Example: 4,8=> 4,8,12,16....32

function mul(no,re){
     let n=0;
    for(let i=1;i<=re;i++){
        n=no*i;
        console.log(`${no}*${i}=${n}`); // `` this is String litteral,,${} this is for string represention
    }
}

console.log(mul(4,8))