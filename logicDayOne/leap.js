// write a function that tells if provided year is a leap year or not
// input:A no,+v Integer->1900,2023,2033
// Leap Year: Every 4th year is a Leap Year
/*
problem Statement-7
->Example:
    2000-leap year - true
    2001-not aleap year - false
    2021-not aleap year - false
*/

//!st way
function lea(no){
    if(no%4===0){
        return true;
    } else{
        return false;
    }
}

//2nd way
function leap(no){
    return no%4===0;
}
console.log(leap(2000));