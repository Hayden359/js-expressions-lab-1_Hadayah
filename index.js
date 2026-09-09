//! Start by creating the variables for the data recorded
    //tempratures
const day1TempF = 32;
const day1TempC = 25;

const day2TempF = 70;
const day2TempC = 18;

const day3TempF = 80;
const day3TempC = 15;

const day4TempF = 72;
const day4TempC = 28;

const day5TempF = 68;
const day5TempC = 20;

const day6TempF = 75;
const day6TempC = 23;

const day7TempF = 82;
const day7TempC = 30;

const day8TempF = 65;
const day8TempC = 22;

const day9TempF = 77;
const day9TempC = 26;

const day10TempF = 78;
const day10TempC = 24;

const day11TempF = 73;
const day11TempC = 21;

const day12TempF = 79;
const day12TempC = 27;

const day13TempF = 71;
const day13TempC = 19;

const day14TempF = 74;
const day14TempC = 17;

const day15TempF = 76;
const day15TempC = 29;

//functions to convert fahrenheit to celsius and vice versa

   // Fahrenheit to Celsius
   function fahrenheitToCelsius(tempInFahrenheit) {
       return (tempInFahrenheit - 32) * 5 / 9;
   }

   // Celsius to Fahrenheit
   function celsiusToFahrenheit(tempInCelsius) {
       return (tempInCelsius * 9 / 5) + 32;
   }



//math variables
    //Variables to hold the total temperatures in both units of measurement
const tot_temperature_in_fahrenheit = day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF;
const tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC;
    //Variables to calculate the average temperatures in both units of measurement
   const avg_temperature_in_fahrenheit = parseFloat(tot_temperature_in_fahrenheit / 15);
   const avg_temperature_in_celsius = parseFloat(tot_temperature_in_celsius / 15);

//! Console.log display
console.log("Total Temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius);
//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};