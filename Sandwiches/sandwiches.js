/* 
Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function 
call provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.
*/

let sandwich = {}

function sandwichSummary(...ingrediants){
    for (let index = 0; index < ingrediants.length; index++) {
        Object.assign(sandwich, {"ingrediant": ingrediants[index]})
    }
    console.log(`Summary of sandwich ordered: ${sandwich}`)   
}

sandwichSummary("beef", "butter")
console.log(sandwich)