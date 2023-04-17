// // ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// // a) Create a test with expect statements using the variables provided.

// describe("encription", () => {
//     const secretCodeWord1 = "Lackadaisical"
//     // Expected output: "L4ck4d41s1c4l"
//     const secretCodeWord2 = "Gobbledygook"
//     // Expected output: "G0bbl3dyg00k"
//     const secretCodeWord3 = "Eccentric"
//     // Expected output: "3cc3ntr1c"  
//     it("take in a string and returns a string with a coded message", () => {
//         expect(encription(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(encription(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(encription(secretCodeWord3)).toEqual("3cc3ntr1c")

//     })
// })

// /*

// FAIL  ./code-challenges.test.js
// encription
//   ✕ take in a string and returns a string with a coded message (1 ms)

// ● encription › take in a string and returns a string with a coded message

// ReferenceError: encription is not defined

// */

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // b) Create the function that makes the test pass.

// /*

// Pseudocode: 1.) Create a function called encription
// 2.) encription will take in a string as an argument
// 3.) use .split("") to change the argument into an array
// 4.) use .map() to iterate over the array
// 5.) use conditional statment and equality ===  operator and logical || operator to evaluate value at index and change the element accordingly: "a" to 4, "e" to 3, "i" to 1, and "o" to 0
// 6.) use .join("") to return the array back to a string

// First Attempt
// const encription = (string) => {
    
//     return string.split("").map((value) => {
//         if (value === "a") {
//             return "4"
//         } else if (value === "e" || value === "E") {
//             return "3"
//         } else if (value === "i") {
//             return "1"
//         } else if (value === "o") {
//             return "0"
//         } else return value
//     }).join("")
// }

// Refactor
// Pseudocode: 1.) Create a function called encription
// 2.) encription will take in a string as an argument
// 3.) use .replaceAll to change every time the  condition is met,  first argument in .replaceAll is the value check, the second argument is the replacement value.
// 4.) return the string

// */

// const encription = (string) => {

//     return string.replaceAll("a", "4")
//     .replaceAll("e", "3")
//     .replaceAll("E", "3")
//     .replaceAll("i", "1")
//     .replaceAll("i", "1")
//     .replaceAll("i", "1")
//     .replaceAll("o", "0")
// }

// /*

//  PASS  ./code-challenges.test.jsaq10p=-p[]
//   encription
//     ✓ take in a string and returns a string with a coded message (1 ms)

// */

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// // a) Create a test with expects statement using the variable provided.

// describe("containsLetter", () => {
//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

//     const letterA = "a"
//     // Expected output: ["Mango", "Apricot", "Peach"]
//     const letterE = "e"
//     // Expected output: ["Cherry", "Blueberry", "Peach"] 
//     it("take in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
//         expect(containsLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(containsLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

// /*

// FAIL  ./code-challenges.test.js
//   encription
//     ✓ take in a string and returns a string with a coded message (1 ms)
//   containsLetter
//     ✕ take in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ● containsLetter › take in an array of words and a single letter and returns an array of all the words containing that particular letter

//     ReferenceError: containsLetter is not defined

// */

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // b) Create the function that makes the test pass.

// /*

// Pseudocode: 1.) Create a function called containsLetter
// 2.) containsLetter will take in an array and a string as two arguments
// 3.) create a variable called filteredArray to store the values from .filter() method
// 4.) use .filter() to iterate over the array and filter elements containing string argument
// 5.) use a conditional statment and .include() method to evaluate if string element includes argument value
// 5.) use logical || operator to check for capitalized argument value
// 6.) return filteredArray.

// First Attempt
// const containsLetter = (array, string) => {
//     let filteredArray = array.filter((value) => {
//         if (value.includes(string) || value.includes(string.toUpperCase()))
//             return value
//     })
//     return filteredArray
// }

// Pseudocode: 1.) Create a function called containsLetter
// 2.) containsLetter will take in an array and a string as two arguments
// 3.) use .filter() to iterate over the array and filter elements containing string argument
// 4.) use .include() method to evaluate if string element includes argument value
// 5.) use logical || operator to check for capitalized argument value
// 6.) return array
// */

// // Refactor
// const containsLetter = (array, string) => {
//     return array.filter(value => value.includes(string) || value.includes(string.toUpperCase()))
// }

// /* 

//  PASS  ./code-challenges.test.js
//   encription
//     ✓ take in a string and returns a string with a coded message (2 ms)
//   containsLetter
//     ✓ take in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)

// */

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullHouse(hand1).toEqual(true))
        expect(fullHouse(hand2).toEqual(false))
        expect(fullHouse(hand3).toEqual(false))
        expect(fullHouse(hand4).toEqual(true))
    })
})

// /*

//  FAIL  ./code-challenges.test.js
//   encription
//     ✓ take in a string and returns a string with a coded message (2 ms)
//   containsLetter
//     ✓ take in an array of words and a single letter and returns an array of all the words containing that particular letter
//   fullHouse
//     ✕ takes in an array of 5 numbers and determines whether or not the array is a full house

//   ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house

//     ReferenceError: fullHouse is not defined

// */

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // b) Create the function that makes the test pass.

// /*

// I didnt have time to post my Blockers on slack over the weekend, so I went online to find help solving this problem,  I made sure to thoroughly pseudocode so that I understand what was learned using the online resource

// Pseudocode: 1.) Create a function called fullHouse
// 2.) fullHouse will take in an array as a argument
// 3.) Create a variable called uniqueNumbers
// 4.) use spread operator to get a subset of the array argument.
// 5.) use new set() method to get individual integers provided from the argument
// 6.) use .map() method to iterate over uniqueNumbers and .filter() method. When .filter()'s value at index matches .map()'s value at index the value is filtered out.
// 7.) use the .length method to evaluate the length of the returned array
// 8.) use .includes() and a logical && to evaluate if count's length is 2 & 3 and return a boolean value

// */
// const hand1 = [5, 5, 5, 3, 3]
//     // Expected output: true
//     const hand2 = [5, 5, 3, 3, 4]
//     // Expected output: false
//     const hand3 = [5, 5, 5, 5, 4]
//     // Expected output: false
//     const hand4 = [7, 2, 7, 2, 7]
//     // Expected output: true

const fullHouse = (array) => {
    const uniqueNumbers = [...new Set(array)]
    const counts = uniqueNumbers.map(value1 => array.filter(value2 => value2 === value1).length)
    return counts.includes(2) && counts.includes(3)
}

// console.log(fullHouse(hand1)) // output: true
// console.log(fullHouse(hand2)) // output: false
// console.log(fullHouse(hand3)) // output: false
// console.log(fullHouse(hand4)) // output: true

/*

Im having a hard time looking for a yarn Matcher to get a passing test.  When I run function the return is true, false, false, true.  Theres an issue with me using the spread operator, on the argument.

FAIL  ./code-challenges.test.js
  encription
    ✓ take in a string and returns a string with a coded message (1 ms)
  containsLetter
    ✓ take in an array of words and a single letter and returns an array of all the words containing that particular letter
  fullHouse
    ✕ takes in an array of 5 numbers and determines whether or not the array is a full house (1 ms)

  ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house

    TypeError: fullHouse(...).toEqual is not a function

      195 |     // Expected output: true
      196 |     it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    > 197 |         expect(fullHouse(hand1).toEqual(true))
          |                                 ^
      198 |         expect(fullHouse(hand2).toEqual(false))
      199 |         expect(fullHouse(hand3).toEqual(false))
      200 |         expect(fullHouse(hand4).toEqual(true))

      at Object.toEqual (code-challenges.test.js:197:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total

*/