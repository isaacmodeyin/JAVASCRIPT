// learn about date objects
// learn array methods : pulp,shift..............
// pass int

function multiplyByTwo(number) {
    console.log("addTwo function running")
    console.log(number*2)
    
}




function addTwoNumbers (first, second) {
    console.log("addTwo function running")
    console.log(first+second)
}



// A JavaScript CODE TO CALCULATE YOUR AGE
// date of birth "dob"     

function calculateAge(dob){      
    const clientYob = dob.getFullYear()
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    let year = currentYear - clientYob
    // console.log((currentDate.getTime()-dob.getTime)
    const month = currentDate.getMonth() - dob.getMonth()
    if(month<0){
        year--;
    }
    console.log(year)
    // return;
}

multiplyByTwo(24)
addTwoNumbers(23, 5)

// console.log(as,ans)

calculateAge(new Date("1992-05-21"))