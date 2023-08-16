// // A function are prewritten statement defined to execute a particilar task

// // in JavaScript, a function is a block of code designed to perform a particular task. It is similar to a procedure—a set of statements that performs a task or calculates a value. However, for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output1.

// // A JavaScript function is executed when “something” invokes it (calls it). The function is defined with the function keyword, followed by a name, followed by parentheses (). Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)2.

// // Here’s an example of how to define a function in JavaScript:

// // function myFunction(p1

// //  WRITE A JavaScript code that get the age range of candidates that are eligible to cat vote in nigeria

// const select = document.getElementById("sel")
// const age = document.getElementById("age")
// const candidate = [
//     {
//         name: "Princewill Obi"
//         id:1
//     },
//     {
//         name: "Joseph Jagaban",
//         id:2
//     }
// ]

// candidate.forEach((e)=>)
// function sample(){
//     console.log("Sample function running")
// }

// sample()
// sample()

// const candidate

// function castvote(age, candidateNo) {
    
// }

// sub.addEventListener()


function checkVotingAge(dateOfBirth) {
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  
  if (currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

// Usage example:
const dateOfBirth = "2000-07-15"; // Format: YYYY-MM-DD
const result = checkVotingAge(dateOfBirth);
console.log(result);
