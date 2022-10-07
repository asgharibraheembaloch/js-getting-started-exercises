/* 
                                Challange
Start with a copy of your program from Exercise 39. Write a function called make_great() 
that modifies the array of magicians by adding the phrase the Great to each magician’s 
name. Call show_magicians() to see that the list has actually been modified.
*/

let magicianNames = ["Zia", "Asghar", "Shahid", "Zahid"]

function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician)
    });
}


function make_great(magicians){
    for (let index = 0; index < magicians.length; index++) {
        magicians[index] = `Great ${magicians[index]}`
    }
}

make_great(magicianNames)
show_magicians(magicianNames)

