/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const concatenatedString = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
// Print out the concatenated string
console.log(concatenatedString);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const lastChar1 = part1.charAt(part1.length - 1).toUpperCase();
const lastChar2 = part2.charAt(part2.length - 1).toUpperCase();

const concatenatedCamelTails = part1.substring(0, part1.length - 1) + lastChar1 + part2.substring(0, part2.length - 1) + lastChar2;

// Print the cameLtaiL-formatted string
console.log(concatenatedCamelTails);





/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = Number(billTotal * 15 / 100).toFixed(2);

// Print out the tipAmount
console.log(`The 15% tip on the bill total is €${tip}`);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomInteger = Math.floor(Math.random() * 11);

// Print the generated random number
console.log(randomInteger);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR */

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false

const expression2 = a || b; // true

const expression3 = !a && b; // false

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true

const expression6 = !(a || b); // false

const expression7 = a && a; // true

