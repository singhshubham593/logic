//Problem Statement - 3
// Write a function that calculatess and print the area of a rectangle given its length and width.

function rect(length,width){
    //edge cases
    if(length <=0|| width <=0 ){ // OR Used here
        throw new Error("Length should be a positive number.");
    }
    /*
    if(length <=0){
        throw new Error("Length should be a positive number.");
    }
    if(width <=0){
        throw new Error("Width should be a positive numner.");
    }*/
    const area = length * width;
    console.log( "Area of the Rectangle is ",area);
}

rect(2,4);     //8
rect(200,400)  //80000
//rect(2,-4)     //Error: Width should be a positive numner.
//react(-5,6     //Error: Length should be a positive numner.