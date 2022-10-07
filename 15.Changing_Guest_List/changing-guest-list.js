/* 
                Challange
You just heard that one of your guests can’t make the dinner, so you need to send out a new set of 
invitations. You’ll have to think of someone else to invite.
• Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
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