// write a function that calculates and print the sum of digits of a given num
// Input: A no,+ve integer->12,34,123
// return: sum of all digits 12:1+2=3

//1st way - with String
function sums(no){
    let sum=0;
    let strconvert=no.toString(); // toString= use to convert no into stingh
    let sp=strconvert.split('');  // split('')= use to split stringh
    sp.forEach(num => {           // forEach= use to itterate on each element
        sum= sum+parseInt(num);  // parseInt= use to convert String into Integer
    });
    return sum;
     
}
//console.log(parseInt(sums(23)));
 
// 2nd way-without String- with %
function s(no){
    let n = no;
    let su=0;
    while(n > 0){
        let ne=n%10; // here % use to get last digit of no
        n=Math.floor(n/10); //Math.floor=use to renove decimal point and make it no like 1.2 will become 1
        su=su + ne;
    }
    return su;
}
console.log(s(123));