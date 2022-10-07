/* 
                        Challange
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you 
  can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. 
  Each time you pop a name from your list, print a message to that person letting them know you’re 
  sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
  actually have an empty list at the end of your program.
*/

let favouritePerson = ["zia khan", "zeesha hanif", "danial nagori"]
let alternatePerson = "ahmad"
let dinnerTable = "2 person"

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
    else if (dinnerTable === "2 person"){
        console.log("I can invite only two people for dinner")
        for (let i = favouritePerson.length-1; i >= 2; i--) {
            removedPerson = favouritePerson.pop()
            console.log(`sorry ${removedPerson}, I can’t invite you to dinner`)
        };
    }
    favouritePerson.forEach(person => {
        console.log(`${person} is available for dinner`)
    });
    for (var i = favouritePerson.length - 1; i >= 0; i--) {
        favouritePerson.splice(i, 1)
    }
}

invitation(favouritePerson, alternatePerson)

console.log(favouritePerson)