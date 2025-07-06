// write a function that calculates and return avg of a set of no
//Input: Array of Positive integer no
//Return: Average of no
//Avg:Calculated by diviiding total ao all the value by the no of values.
//[1,2,3]:(1+2+3)/3=2

function a(b){
    let c=0;
    for(let i=0;i<b.length;i++){
        c+=b[i];
    }
    const d=c/b.length;
    console.log(d);
}
a([1,2,4])