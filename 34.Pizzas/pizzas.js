/* 
                                Challange
Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name 
  of the pizza. For each pizza you should have one line of output containing a simple statement like I 
  like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
  The output should consist of three or more lines about the kinds of pizza you like and then an additional 
  sentence, such as I really love pizza!
*/

let pizza = ["Bacon", "Chilli Pepper", "Mushrooms", "Vegeterian", "Pepperoni", "italian"]

for (let index = 0; index < pizza.length; index++) {
    console.log(pizza[index])
}

for (let index = 0; index < pizza.length; index++) {
    console.log(`i like ${pizza[index]} pizza`)
}

// template letteral statment to print multiline statment 
let pizza_statment1 = `i very much like pizza.Pizza has a long history. Flatbreads with toppings were consumed by the
            ancient Egyptians, Romans and Greeks. (The latter ate a version with herbs and oil, similar to
            today's focaccia.) But the modern birthplace of pizza is southwestern Italy's Campania region,
            home to the city of Naples`

console.log(pizza_statment1)

console.log("-----------------------------------------------------------------------------------------------")

// using + to print multiline statment 
let pizza_statment2 = "i very much like pizza.Pizza has a long history. Flatbreads with toppings were consumed by the" +
            "ancient Egyptians, Romans and Greeks. (The latter ate a version with herbs and oil, similar to" +
            "today's focaccia.) But the modern birthplace of pizza is southwestern Italy's Campania region," +
            "home to the city of Naples"

console.log(pizza_statment2)

console.log("-----------------------------------------------------------------------------------------------")

// include the \n newline character to make sentences appear on a new line

let pizza_statment3 = "i very much like pizza.Pizza has a long history. Flatbreads with toppings were consumed by the\n" +
            "ancient Egyptians, Romans and Greeks. (The latter ate a version with herbs and oil, similar to\n" +
            "today's focaccia.) But the modern birthplace of pizza is southwestern Italy's Campania region,\n" +
            "home to the city of Naples"

console.log(pizza_statment3)

console.log("-----------------------------------------------------------------------------------------------")

// \ operator, can be used to multiline commment remove + and " at the end of line
let pizza_statment4 = "i very much like pizza.Pizza has a long history. Flatbreads with toppings were consumed by the\n \
            ancient Egyptians, Romans and Greeks. (The latter ate a version with herbs and oil, similar to\n \
            today's focaccia.) But the modern birthplace of pizza is southwestern Italy's Campania region,\n \
            home to the city of Naples"

console.log(pizza_statment4)
