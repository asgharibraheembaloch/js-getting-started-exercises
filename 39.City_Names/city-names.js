/* 
                        Challange
Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s 
returned.
*/

cityCountryPairs = [{"City": "Lahore", "Country": "Pakistan"}, 
                    {"City": "Karachi", "Country": "Pakistan"}, 
                    {"City": "Islamabad", "Country": "Pakistan"}]

function city_country(citycountrypairs){
    
    for (let index = 0; index < citycountrypairs.length; index++) {
        console.log(citycountrypairs[index]["City"], citycountrypairs[index]["Country"])  
    }
}

city_country(cityCountryPairs)