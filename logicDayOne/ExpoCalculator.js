// write  a function that returns the result of raising a given no to a specified power.
//input: Two no
//  Base
//  Exponent
// Return:Base to the power of exponent
// Example: 2 ,3: 2*2*2=8

//One way
function b(c,a){

    let d=1;
    for(let i=1;i<=a;i++){
      d=d*c;
    }
    return d;
    console.log(d);
}
console.log(b(2,3));

// Two way
