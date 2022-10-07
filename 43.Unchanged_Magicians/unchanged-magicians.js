/* 
Start with your work from Exercise 40. Call the function make_great() with a copy of 
the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() 
with each array to show that you have one array of the original names and one 
array with the Great added to each magician’s name.
*/

let magicianNames = ["Zia", "Asghar", "Shahid", "Zahid"]
let greatMagicianNames = []

function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician)
    });
}


function make_great(magicians){
    for (let index = 0; index < magicians.length; index++) {
        greatMagicianNames.push(`Great ${magicians[index]}`)
    }
}

make_great(magicianNames)

show_magicians(magicianNames)

console.log("--------------------------------------------------------------------------")

show_magicians(greatMagicianNames)

