/* 
                    challange
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
several examples. Use your list to print a series of statements about these items, such as “I would like to 
own a Honda motorcycle.”
*/

let favouriteMotorcycle = ["Honda","Yamaha", "Suzuki", "unique", "toyo"]

for (let index = 0; index < favouriteMotorcycle.length; index++) {
    if (favouriteMotorcycle[index] === "Honda"){
        console.log(`${favouriteMotorcycle[index]} is economic bike`)
    }
    else if (favouriteMotorcycle[index] === "Suzuki"){
        console.log(`${favouriteMotorcycle[index]} is comfortable bike`)
    }
    else if (favouriteMotorcycle[index] === "Yamaha"){
        console.log(`${favouriteMotorcycle[index]} is stylish bike`)
    }
    else {
        console.log(`${favouriteMotorcycle[index]} is other bike than my favourite bike`)
    }
}