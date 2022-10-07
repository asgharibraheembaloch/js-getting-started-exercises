/* 
                              Challange
Write a series of conditional tests. Print a statement describing each test and your 
prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

function testCar(car) {
  if (car === "Subaru") {
    console.log("Subaru have boxer engine");
  } else if (car === "Porsche") {
    console.log("Porsche have boxer engine");
  } else if (car === "Ferrari 512 Testarossa") {
    console.log("Ferrari 512 Testarossa have boxer engine");
  } else if (car === "Toyota") {
    console.log("Toyota have inline engine");
  } else if (car === "Land Rover Defender") {
    console.log("Land Rover Defender have inline engine");
  } else if (car === " TVR Typhon") {
    console.log("TVR Typhon Defender have inline engine");
  } else if (car === "Mercedes") {
    console.log("Mercedes have v engine");
  } else if (car === "Cabriolet") {
    console.log("Cabriolet have v engine");
  } else if (car === "BMW") {
    console.log("BMW have v engine");
  } else {
    console.log("please select car between Suburu, Toyota, Mercedes, Porsche, Land Rover Defender,Ferrari 512 Testarossa, Cabriolet, BMW ");
  }
}

// these five evaluate to true contion
testCar('Subaru')
testCar('Porsche')
testCar('Ferrari 512 Testarossa')
testCar('Toyota')
testCar('Land Rover Defender')

console.log('---------------------------------------------------------------------------------------------')

// these five evalute to false condition turn to else statement
testCar('other')
testCar('BAIC')
testCar('KIA')
testCar('Hyundai')
testCar('Haval')
