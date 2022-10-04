/*
                     #Challange#
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.
*/

personName = "Asghar ibraheem Baloch"

// lower case challange
console.log("name is in lower cases:", personName.toLowerCase())

// upper case challange
console.log("name is in upper cases:", personName.toUpperCase())

// title case challange
/*  
Note: in javascript there is no method available to title case variable directly, so we have to create function
that will take variable string as input and convert it into title case
*/
function titleCase(str) {
    // Step 1. Lowercase the string
    str = str.toLowerCase();
    
    // Step 2. Split the string into an array of strings
    str = str.split(' ');
        
    // Step 3. Create the FOR loop
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }    
    // Step 4. Return the output
    return str.join(' ');
  }
  
  console.log(titleCase(personName));
