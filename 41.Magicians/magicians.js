/* 
                                Challange
Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array
*/

let magicianNames = ["Zia", "Asghar", "Shahid", "Zahid"]

function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician)
    });
}

show_magicians(magicianNames)