/* 
                    Challange
If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.
*/

let itemArray = []

/* function storeInArray(item, ...rest){
    itemArray.push(item, ...rest)
}

storeInArray("K2", "indus river", "pakistan", "karachi", "urdu")
 */

itemArray[0] = "k2"
itemArray[1] = "indus river"
itemArray[2] = "pakistan"
itemArray[3] = "karachi"
itemArray[4] = "urdu"


console.log(itemArray[5]) // return undefined because 5 index doesn't exist on itemArray