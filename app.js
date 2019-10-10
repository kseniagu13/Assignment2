document.addEventListener("DOMContentLoaded", function() {
    /*console.log("Tere!");
    let hello = "Hello World";
    console.log(hello);

    let rangeStart = 1;
    let rangeEnd = 100;
    let numberToCheck = 102;
    let inRange = false;

    for(let i = rangeStart; i <= rangeEnd; i++) {

     if (i === numberToCheck) {
     inRange = true;
     break;

     }
    } 
    /*if (inRange) {

        console.log("The number is in range");
    } else {

        console.log("The number is  out of range.");
    }*/

    //Ternary Operator

    /*let result = inRange ? "In Range" : "Out Of Range"; // ? esimene kas true või false
    console.log(result); */

    //Write a program to display the multiplication table of a given number
    // Test data
// number: 5
//Expected Output
//5 x 1= 5;
//5 x 2 = 10;
//...

/*let number = 5;

for ( let i = 1; i <=10; i++) {
    let string = `${number} X ${i} = ${number * i}`;
    console.log(string);
    

    //console.log(number, " X ", i, " = ", number*i);

}*/

let stringLength;
let muutuja = "Hello World!";

stringLength = muutuja.length;
console.log(stringLength);

/*for (let i = 0; i < 12; i++) {

    console.log(muutuja[i]);

} */

/*for (let i = muutuja.length-1; i>=0; i--){ // string.length-1 sest 12-1 muidu sõna kukub välja vahemikust

    console.log(muutuja[i]);
}*/

for (let i = 0; i < 12; i++) {
    
    if (muutuja[i] === "o") {
        console.log ("*");
    } else {
        console.log(muutuja[i]);
    }
}

console.log(muutuja);




});