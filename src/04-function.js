/**
 * This function generates a birthday message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Message for the user in this format: Hey NAME, happy YEAR birthday!
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // "Hey Jack, happy 25 birthday!"
 */
function generateMessage(name, age) {
return `Hey ${name}, happy ${age} birthday!`
}

/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
// From https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
function titleCase(sentence) {
    let splitStr = sentence.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
function sumOfRange(start, end) {

}


/**
 * This function generates an acronym from the first letter of each word in a sentence, ignoring words with numbers.
 *
 * @param {string} sentence - The sentence to create an acronym from.
 * @returns {string} - The generated acronym.
 *
 * Usage:
 * const acronym = generateAcronym("Open 24 Hours a Day"); // acronym will be "OHAD"
 * const anotherAcronym = generateAcronym("Federal Bureau Investigation"); // anotherAcronym will be "FBI"
 */
// From https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
function generateAcronym(sentence) {
    let matches = sentence.match(/\b(\w)/g); // ['J','S','O','N']
    let acronym = matches.join(''); // JSON
    return acronym;
}


/**
 * This function counts consonants in a string, with lowercase counting as 1 and uppercase as 2.
 *
 * @param {string} str - The input string.
 * @returns {number} - The calculated "weighted" consonant count.
 *
 * Usage:
 * const consonantCount = countConsonantsWeighted("Hello World!"); // consonantCount will be 9
 * const anotherCount = countConsonantsWeighted("JavaScript"); // anotherCount will be 9
 */
// From https://stackoverflow.com/questions/46908449/how-to-count-how-many-consonants-are-in-a-string
function countConsonantsWeighted(str) {
    let countConsonants = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== "a" || str[i] !== "e" || str[i] !== "i" ||
            str[i] !== "o" || str[i] !== "u" || str[i] !== " ") {
            countConsonants++;

        }
        if (str[i] !== "A" || str[i] !== "E" || str[i] !== "I" ||
            str[i] !== "O" || str[i] !== "U" || str[i] !== " ") {
            countConsonants += 2;
        }
        return (countConsonants);
    }}
