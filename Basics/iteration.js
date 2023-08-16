// NOTE: After any arguement in JavaScript you need to add a SEMICOLON ;
// NOTE: IT is optional to add a semicolon ; after every state in JavaScript

// for (var i = 1; i < 8; i++){
//     console.log(i);
//     //loop
// }
// console.log("done")


// // WHILE LOOP
// let j = 1

// while (j < 8) {
//     console.log(j);
//     j++;
// }


// let g = 67

// while (g > 10) {
//     console.log(g);
//     g--;
// }

let h = 1
do {
    console.log(h);
    h--;
} while (h >= 11)


// the do while loop
let f =1
let credit = 0
do {
    console.log(f);
    console.log("before", credit)
    credit++
    console.log("after", credit)
    f--;
} while (f >= 11)

 

for (var i = 1; i< 21; i++){
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);  
    //stmt
    //loop
}
console.log("done");



for (var i = 1; i< 21; i++){
    if (i % 2 != 0) {
        continue;
    }
    
    if (i > 10) {
        break
    }
    console.log(i);  
    //stmt
    //loop
}
console.log("done");
