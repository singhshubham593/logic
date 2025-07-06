//Write a function that counts and prints the no of vowels and consonants in a given String
//Input: String
//Return: Vowel and Consonant Count
//Vowel: a e i o u
//Consonant: All other than Character
//Example: "Hello World" => 3 Vowels & 7 Consonants

function ad(InputString){
    const c="aeiou";
    const d="bcdfghjklmnpqrstuvwxyz";
    InputString.toLowerCase();// To Convert in small case
    InputString.replace(' ','');//To replace Space ' ' with empty space'' This will replace space only First one;
    InputString.replace(/ /g,'');//To replace Space / /g with empty space'' This will replace all space;
    let Consonants=0;
    let Vowels=0;
    for(let i=0;i<InputString.length;i++){
        if(c.includes(InputString[i])){
            Vowels+=1;
             
        }else if (d.includes(InputString[i])) {
             Consonants+=1;
         } 
    }
     return {Consonants,Vowels}
}

console.log(ad("Hello World 123"));