/* 
                        Challange
Store the names of a few of your friends in a array called names. Print each person’s name by accessing each 
element in the list, one at a time.
*/

names = ["rauman, zain, haris, fahad, laraib"]

// using js normal sequence based for loop
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log("----------------------------------------------------------")

// using es6 for of loop on iterable objects
for (const name of names){
    console.log(name);
}

console.log("----------------------------------------------------------")

// using array foreach method
names.forEach(function (item) {
    console.log(item);
  });