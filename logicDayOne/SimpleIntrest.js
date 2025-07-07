// Write a fun that calculates and print the simple interest on a loan amount.
// input:
//     -principle amount -p 
//     -interest rate(yearly) -i
//     -Time duration -t
// Return:Interest amount
// Simple Interest:-(principle amount * interest rate * Time duration)/100

function a(p,i,t){
    let b=(p*i*t)/100;
    b=b.toFixed(2)//tofixed is to get fixed digit after dot
    return b;
}
console.log(a(20000,8.755,5))