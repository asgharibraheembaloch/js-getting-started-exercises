/* You just heard that one of your guests can’t make the dinner, so you need to send out a new set of 
invitations. You’ll have to think of someone else to invite.
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
        // ahmad is always available
        invitation.push("ahmad")
    }
}

console.log(invitation)
