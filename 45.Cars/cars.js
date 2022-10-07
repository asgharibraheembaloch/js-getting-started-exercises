/* 
                            Challange
Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make 
sure all the information was stored correctly.
*/

let carInfoStore = {}

function car({manufacturer, model, color='', optional_feature=''}){
    Object.assign(carInfoStore,{manufacturer, model, color, optional_feature})
    carInfo = {manufacturer, model, color, optional_feature}
    return carInfo
}

console.log(car({"manufacturer":"toyota", "model":"2007", "color":"grey", "optional_feature":"cruise control"}))
console.log("-------------------------------------------------------------------------------------------------")
console.log(car({"manufacturer":"toyota", "model":"2007"}))
console.log("-------------------------------------------------------------------------------------------------")
console.log("car info store:", carInfoStore)