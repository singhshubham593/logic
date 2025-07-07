// write a fun that give prime no in range of no
// input: A no, B no
// return: all print no in this range
// Prime no: A no that can only be divided by itself and 1 without remainders.
// example: 3,20 -> 5,7,11,13,17,19

function prime(n,m){
    let a=0;
    for(let i=n;i<=m;i++){
        if(i/1===0 && i/i===0){
            console.log(i);
            a=i;

        }
    }
    return a;
}
prime(3,20);