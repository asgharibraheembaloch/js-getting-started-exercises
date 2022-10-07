/* 
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of 
  your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/

let favouritePerson = ["zia khan", "zeesha hanif", "danial nagori"]
let alternatePerson = "ahmad"
let dinnerTable = "bigger"

// danial is unavailable
let reply = {"zia khan":"available", "zeesha hanif":"available", "danial nagori":"not available"}

function invitation(favouritePerson, alternatePerson) {
    for (let i = 0; i < favouritePerson.length; i++) {
        console.log(`Hi ${favouritePerson[i]}! you are invited to dinner, please reply with 'available', or 'not available'`)
        /* if (reply[favouritePerson[i]] === "available"){
            console.log(`${favouritePerson[i]} is avaialble for dinner`)
        } else if (reply[favouritePerson[i]] === "not available")*/
        if (reply[favouritePerson[i]] === "not available") {
            console.log(`${favouritePerson[i]} is not avaialble for dinner`)
            // alternate person is always available
            favouritePerson[i] = alternatePerson
            //console.log(`${alternatePerson} is a guest who is invited in place for not available guest`)
            reply[alternatePerson] = "available"
            
        }
    }

    if (dinnerTable === "bigger") {
        for (let i = 0; i < favouritePerson.length; i++) {
            console.log(`${favouritePerson[i]} wow! we have found bigger dinning table, i will invite more quests`)
        };

        //add person at the beggining of an array
        let startPerson = "shahid"
        favouritePerson.unshift = (startPerson)
        reply[startPerson] = "available"

        // add person in middle of an array
        let middlePerson = "masood"
        let middle = Math.ceil(favouritePerson.length / 2)
        favouritePerson.splice(middle, 0, middlePerson)
        reply[middlePerson] = "available"


        // add person at the end of an array
        let lastPerson = "habib"
        favouritePerson.push(lastPerson)
        reply[lastPerson] = "available"
    }
    favouritePerson.forEach(person => {
        console.log(`${person} is available for dinner`)
    });
}

invitation(favouritePerson, alternatePerson)