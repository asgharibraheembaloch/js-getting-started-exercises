/* 
    code comment challange
Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, 
just add your name and the current date at the top of each program file. 
Then write one sentence describing what the program does.
*/


/*
this is multine comment
multline comments are used to describe purpose of whole module written, we can also use to describe purpose of 
function or class written on next lines, we can write them inside function or class body but better way is to write
before function or class
*/

// this is single line comment

// single line comments are used to describe purpose of code written on next line or on may be they apear on same line

let x = 5
let y = 4

// add x and y to calculate total
let total = x + 5

console.log(total) // print out the total

// single line comments can also be written inside function or class body in order to describe function or class exection context

function getValue(price, tax, discount = 10) {
    // add price tax togetther in order to get actual price
    let val = price + tax;
    
    // offer dicount on where value is greater than 50 rupee
    if (val > 50) {
        val - discount
    }
    return val;
}

// javascript ignore any type of comment written in module or file in its execution context


/*  comments are just for code developers who write the code are those who read the code after written, 
in order to better understand what next line do or purpose of whole module function or class maybe */

