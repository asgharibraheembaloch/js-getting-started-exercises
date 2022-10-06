/* 
Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/


function make_shirt(size="large", text="I love Javascript"){
    console.log(`the size of the shirt will be "${size}" and the message written on the shirt will be '${text}'`)
}

make_shirt()
make_shirt("medium", "web 3.0 will create metaverse")