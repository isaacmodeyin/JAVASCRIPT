var a = 4
let b = "isaac" //my name
const c = 45
let d = "2" // numb
const myArray = ["Isaac", "Name", 23, true]   // ARRAYS
const firstname = "Isaac"
const age = 21
const score = 50
const daysOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// ASSIGNMENT OPERATORS =
// ARITHMETIC OPERATORS + - / % *
// LOGICAL OPERATORS  || && == === ! !=
// INCREMENT OPERATORS ++
// DECREMENT OPERATORS --

// TYPES OF INCREMENTS: Post increments and pre increments
// console.log("2" == 2)
// console.log("2" === 2)
// console.log(true)
// console.log(!true)
// console.log("2" != 2)

// console.log(++a) //PRE INCREMENT
// console.log(a++) // POST INCREMENT
// console.log(a)

// console.log(--a) //PRE DECREMENT
// console.log(a--)

// console.log(a)
// // a = 5
// a += 5     // THIS MEANS  a=a+5
// console.log(a)
// a % 15     // this means 7 % 15 the answer will be 7
// console.log(a)

// if (a == 7) {   // IF STATEMENT
//     console.log(`my name is ${firstname} and my age is: ${age}`)
// }

// if (a == 7 || a == 15 && firstname == "Isaac") {
//     console.log(`my name is ${firstname} and my age is: ${age}`)
// }

     //OR Statement  as long as on condition is met the answer will be true for the OR statement

     
     // AND Statement for the AND Statement a long as on of the condition is false the output is false
       
     //
// console.log(false && false || true || false)    
// console.log(false || false)
// console.log(true | true)
 

// // MONDAY JUNE 5
// if (a == 7 || a == 15 && firstname == "Isaac") {
//     console.log(`my name is ${firstname} and my age is: ${age}`)
// } else {
//     console.log("If Condition wasn't met")
// }


// if (score < 40) {
//     console.log("F")
// } else if (score > 39 && score < 44) {
//     console.log("E")
// } else if (score > 44 && score < 49) {
//     console.log("D")
// } else if (score > 49 && score < 59)

// }



let date = new Date()
let day = 1
console.log(date.getDay())
    

    switch (day) {
        case 0: console.log(daysOfWeek[day]);
            break;
        case 1: console.log(daysOfWeek[day]);
            break;
        case 2: console.log(daysOfWeek[day]);
            break;    
        case 3: console.log(daysOfWeek[day]);
            break;
        case 4: console.log(daysOfWeek[day]);
            break;
        case 5: console.log(daysOfWeek[day]);
            break;
        case 6: console.log(daysOfWeek[day]);
            break;
        default: console.log("No case was met");
            break;   
    }
    
day === 6 || day === 0 ? console.log("Weekend") : console.log("Weekday")
// console.log(false && false || true || false)
