/* 
Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function 
call provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.
*/

function sandwichSummary(sandwich){
    console.log("you have ordered following sandwiches")
    for (let index = 0; index < sandwich.length; index++) {        
        console.log("------------------------------------------------------------")
        console.log(`${index+1}:  ${sandwich[index]}`)
    }
      
}

console.log(sandwichSummary(["butter", "egg"]))

// OR we can call as many items and collect them as single array

/* function sandwichSummary(...sandwich){
    console.log("you have ordered following sandwiches")
    for (let index = 0; index < sandwich.length; index++) {        
        console.log("------------------------------------------------------------")
        console.log(`${index+1}:  ${sandwich[index]}`)
    }
      
}

console.log(sandwichSummary("butter", "egg")) */