/*
                Challange 
Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.
*/

let favouritePerson = ["zia khan", "zeesha hanif", "danial nagori"]
let alternatePerson = "ahmad"

// danial is unavailable
let reply = {"zia khan":"available", "zeesha hanif":"available", "danial nagori":"not available"}

function invitation(favouritePerson, alternatePerson) {

    for (let i = 0; i < favouritePerson.length; i++) {
        console.log(`Hi ${favouritePerson[i]}! you are invited to dinner, please reply with 'available', or 'not available'`)
        /* if (reply[favouritePerson[i]] === "available") {
            console.log(`${favouritePerson[i]} is avaialble for dinner`)
        } else if (reply[favouritePerson[i]] === "not available")*/
        if (reply[favouritePerson[i]] === "not available") {
            console.log(`${favouritePerson[i]} is not avaialble for dinner`)
            // alternate person is always available
            favouritePerson[i] = alternatePerson
            //console.log(`${alternatePerson} is a guest who is invited in place for not available guest`)
            reply[alternatePerson] = "available"
            invitation(favouritePerson, alternatePerson)
        }
    }
}

invitation(favouritePerson, alternatePerson)

let count = 0;
//console.log(favouritePerson.length)
for (let i = 0; i < favouritePerson.length; i++) {
  count++;
}
console.log(count)