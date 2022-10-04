/* 
        #Challange#
Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/

const Quote = {author:'Mother Teresa', Quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."}
function famousQuote(quote){
    const {author, Quote} = quote
    return (`${author} once said, "${Quote}"`)
}

console.log(famousQuote(Quote))