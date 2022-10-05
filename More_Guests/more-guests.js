let favouritePerson = ["zia khan", "zeesha hanif", "danial nagori"]
let alternatePerson = "ahmad"
let dinnerTable = "bigger"

// danial is unavailable
let reply = {"zia khan":"available", "zeesha hanif":"available", "danial nagori":"not available"}

for (let i = 0; i < favouritePerson.length; i++){
    console.log(`Hi ${favouritePerson[i]}! you are invited to dinner, please reply with 'available', or 'not available'`)
    if (reply[favouritePerson[i]] === "available"){
        console.log(`${favouritePerson[i]} is avaialble for dinner`)
    }
    else if (reply[favouritePerson[i]] === "not available"){        
        console.log(`${favouritePerson[i]} is not avaialble for dinner`)
        // ahmad is always available
        favouritePerson[i] = alternatePerson
        console.log(`${alternatePerson} is a guest who is invited in place for not available guest`)

        if (dinnerTable === "bigger") {
            favouritePerson.forEach(person => {
                console.log(`${person} wow! we have found bigger dinning table, i will invite more quests`)
            });

            //add person at the beggining of an array
            let startPerson = "shahid"
            favouritePerson.unshift = (startPerson)

            // add person in middle of an array
            let middlePerson = "masood"
            let middle = Math.ceil(favouritePerson.length/2)
            favouritePerson.splice(middle,0,middlePerson)

            // add person at the end of an array
            let lastPerson = "habib"
            favouritePerson.append(lastPerson)
        }
    }
    favouritePerson.forEach(person => {
        console.log(`${person} you are invited to dinner`)
    });  
}