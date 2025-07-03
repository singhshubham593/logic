// write a function that finds and prints the maximum element in an array of numbers.
// input: Array of numbers
// Return:Biggest number
//example: [3,6,9,7,1,8] =>9

//One way
function long(){
    const a=[3,5,9,8,7,4,2];
     let b=a[0];
     for(let i=1;i<a.length;i++){
        if(a[i]>b){
            b=a[i];
        }
     }
     console.log(b);
}
long()

//Two way
function largest(){
    const c=Math.max(2,6,9,8,7,6,3,1); //max will pick max no from gven data
    console.log(c);
}
 
largest()