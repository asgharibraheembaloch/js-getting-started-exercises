/* 
                        Challange
Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print 
out the name of each animal. 
• Modify your program to print a statement about each animal, 
  such as A dog would make a great pet. 
• Add a line at the end of your program stating what these 
  animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

let commonAnimals = ["dog", "cat", "goat"]

for (let index = 0; index < commonAnimals.length; index++) {
    console.log(commonAnimals[index])
}

for (let index = 0; index < commonAnimals.length; index++) {
    if (commonAnimals[index] === "dog"){
        console.log(`a ${commonAnimals[index]} would make faithful pet.`)
    } else if (commonAnimals[index] === "cat"){
        console.log(`a ${commonAnimals[index]} would make loving pet.`)
    } else if (commonAnimals[index] === "goat"){
        console.log(`a ${commonAnimals[index]} would make peacful pet.`)
    }
    console.log("these animal have great characteristics to make home pets")
}