/* You just heard that one of your guests can’t make the dinner, so you need to send out a new set of 
invitations. You’ll have to think of someone else to invite.
• Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
 */

let favouritePerson = ["zia khan", "zeesha hanif", "danial nagori"]
let invitation = []

// danial is unavailable
let reply = {"zia khan":"available", "zeesha hanif":"available", "danial nagori":"not available"}

for (let i = 0; i < favouritePerson.length; i++){
    console.log(`Hi ${favouritePerson[i]}! you are invited to dinner, please reply with 'available', or 'not available'`)
    if (reply[favouritePerson[i]] === "available"){
        invitation.push(favouritePerson[i])
    }
    else if (reply[favouritePerson[i]] === "not available"){        
        console.log(`${favouritePerson[i]} is not avaialble for dinner`)
        // ahmad is always available
        favouritePerson[i] = "ahmad"
    }
}

console.log(favouritePerson)
