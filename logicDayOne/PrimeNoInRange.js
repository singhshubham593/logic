// write a fun that give prime no in range of no
// input: A no, B no
// return: all print no in this range
// Prime no: A no that can only be divided by itself and 1 without remainders.
// example: 3,20 -> 5,7,11,13,17,19

function prime(n,m){
    //let a=n;
    for(let i=1;i<=m;i++){
        if(m%i!=0){
            console.log(i +" "+ "Non - Prime")
        }else{
            console.log(i + " "+"Prime")
        }
         
    }
   // return a;
}
prime(3,9);