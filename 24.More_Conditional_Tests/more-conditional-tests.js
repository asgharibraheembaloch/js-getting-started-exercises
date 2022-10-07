/* 
                                  Challange
More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False 
result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array 
*/

school = "PIAIC";
institute = "PIAIC";
university = "Air Uninversity";
tuition_center = "piaic";

// loose equality test
console.log("this is equality test:", school == institute);

// strict equality test
console.log("this is equality test:", school === institute);

// strict equality test
console.log("this is equality test:", school === university);

// inequality test
console.log("this is inequality test:", institute !== university);

// inequality test
console.log("this is inequality test:", school !== institute);

// tests using the lower case function
console.log(
  "this is equality test using lower case method:",
  school.toLowerCase() === tuition_center
);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
a = 10;
b = "10";
c = 5;
d = 30;
e = 2;
f = 35;

// loose equality test produces true because js tries to convert b like a and successful
console.log(a == b);

// strict equality test produces false because js compares both variable type and it's value
console.log(a === b);

// greater than test case
console.log(a > c);

// less than test case
console.log(e < c);

// greater than equal ro test case
console.log(f >= d);

// less than equal to test case
console.log(f <= d);

// Tests using "and" and "or" operators
// and represented by double &&
console.log(a === 10 && b == 10); // true and true result into true
console.log(a === 10 && d < 30); // true and false result into false

// or represented by double pipe symbol (||)
console.log(a === 10 || b == 10); // true or true result into true
console.log(a === 10 || d < 30); // true or false result into true
console.log(d < 30 || a === 10); // false or true result into true
console.log(d < 30 || a > 10); // false or false result into false

names = ["zia", "danial", "zeeshan", "feroze"];

// Test whether an item is in a array
console.log("feroze is found:", names.includes("feroze"));

// using for loop
for (var i = 0; i < names.length; i++) {
  var person = "feroze";
  if (person === names[i]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
