//Find all factor of given no
// input: A no, positive integer -> 24
// return: factor of a no
//Factor: a no that divides the Given no evenly or exactly ,leaving no remainder
//24: 1,2,3,4,6,8,12,24

function a(b){
    for(let i=1;i<=b;i++){
        if(b%i===0){
            console.log(i);
        }
    }
}
a(35);