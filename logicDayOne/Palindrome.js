//write a fun that checks if a string is palindrome or not
// input: A string
// return:boolean,true if Palindrome snd false if not palindrome
// A palindrome is a word that reads the same backward or forward
// Example: madam,level,abba

function a(b){
    let c=b.split("");
    const d=c.length -1; //c.length-1 will give last index
    for(let i=0;i<d/2;i++){
        if(c[i]===c[d-i]){  //d-i will reduce 1 from last vale like i=0:d=5 ,i=1:d=5-i(1)=4,i=2:d=5-i(2)=3 
             return true;
        }else{
            return false;
        }
         
    }

}
console.log(a("amadama"));