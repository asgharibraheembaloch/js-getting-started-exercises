/* 
Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let username = []

if (username.length === 0){
    console.log('We need to find some users!')
}

/* if (Array.isArray(username)){
    console.log('We need to find some users!')
}
 */
for (let index = 0; index < username.length; index++) {
    if (username[index] === 'admin'){
        console.log(`Hello ${username[index]}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${username[index]}, thank you for logging in again.`)
    }
}