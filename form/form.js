const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const dropDown = document.getElementById("drop-down");
const dial = document.getElementById("dial");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
const passwordError = document.getElementById("passError");
const confirmPasswordError = document.getElementById("conPassError");
const countryCodes = ["+234", "+233", "+44", "+1", "+77"];
const submitButton = document.getElementById("btn-sub");
const form = document.getElementById("parent");
const postDivs = document.getElementById("posts");

// countryCodes.forEach((data,index)=>{
//     dropDown.innerHTML += `<option id=${index} >${data}</option>`
// })

countryCodes.forEach((data, index) => {
    dropDown.innerHTML += `
    <option id=${index} value=${data} > ${data} </option>
    `
})

firstname.addEventListener("keyup", function (e) {
  validateName(firstname)
})

surname.addEventListener("keyup", function (e) {
  validateName(surname)
})

function validateName(element) {
      const name = element.value
    console.log(name)

// match is a method
    if (!name.match(/^[a-zA-z][a-zA-z]{2,40}$/)) {
        updateElementStyle(element, "invalid")
        return false
    } 
    updateElementStyle(element, "valid")
    return true
    
}

dial.addEventListener("keyup", (e) => {
 validatePhone()
})

function validatePhone() {
       const telephone = dial.value
    console.log(telephone)
    if (telephone.match(/^[0-9]{10}$/)) {
        updateElementStyle(dial, "valid")
        return true
    }
        updateElementStyle(dial, "invalid")
        return false
}

function validateCountryCode() {
    const cc = dropDown.value
    if (!countryCodes.includes(cc)) {
        return false
    } 
    return true
}

function updateElementStyle(element, value) {
    if (value == "valid") {
        element.style.borderColor = "green"
        element.style.borderWidth = "5px"
        return 
    }
    if (value == "invalid") {
        element.style.borderColor = "red"
        element.style.borderWidth = "5px"
        return
    }
}

email.addEventListener("keyup", (e) => {
   validateEmail()
    
})

function validateEmail() {
     const mail = email.value
    if (!mail.match(/^[a-zA-Z][a-zA-Z0-9\.\-_]+@[a-z]+\.[a-z]{2,5}$/)) {
        updateElementStyle(email, "invalid")
        return false
    }
    updateElementStyle(email, "valid" );
    return true
}

password.addEventListener("keyup", (e) => {
    validatePassword(password, passwordError)
})

confirmPassword.addEventListener("keyup", (e) => {
    const valid = validatePassword(confirmPassword, confirmPasswordError)
    if (valid == true) {
        passwordMatches()
    }
})

function validatePassword(element, errorField) {
    const pass = element.value
    if (pass.length < 8) {
        updateElementStyle(element, "invalid")
        updatePasswordMessage ("Must be at 8 least digits", "invalid", errorField)
        return false
    }
    if (pass.match(/["'():<>\[\]^`{-~]/)) {
        updateElementStyle(element, "invalid");
        updatePasswordMessage("must contain the special character in  the bracket:<br/> (\?@=;*-/! #-&) ", "invalid", errorField)
        return false
    }
    if (!pass.match(/[A-Z]/)) {
        updateElementStyle(element, "invalid");
        updatePasswordMessage ("Must contain 1 uppercase character" , "invalid",errorField)
        return false
    }
    if (!pass.match(/[a-z]/)) {
        updateElementStyle(element, "invalid");
        updatePasswordMessage ("Must contain 1 lowercase character", "invalid",errorField)
        return false
    }
    if (!pass.match(/[0-9]/)) {
        updateElementStyle(element, "invalid");
        updatePasswordMessage ("Must contain 1 digit", "invalid", errorField)
        return false
    }
    if (!pass.match(/[_\\?@=;\*-\/! #-&]/)) {
        updateElementStyle(element, "invalid");
        updatePasswordMessage ("Must contain special character:<br/> (\?@=;*-/! #-&)", "invalid", errorField)
        return false
    }
    
    updateElementStyle(element, "valid");
    updatePasswordMessage ("", "valid", errorField)
    return true
   
}

function passwordMatches() {
    const pass = password.value
    const conPass = confirmPassword.value
    if (pass != conPass) {
        updateElementStyle(confirmPassword, "invalid")
        confirmPasswordError.style.display = "block"
        confirmPasswordError.innerHTML= "password does not match"

        return false
    }
    updateElementStyle(confirmPassword, "valid")
    confirmPasswordError.style.display = "none"
    confirmPasswordError.innerHTML= ""
    return true
}

function updatePasswordMessage(message, status, field) {
    if (status == "valid") {
        field.style.display = "none"
        field.innerHTML=""
        return
    }
    field.style.display = "flex",
    field.innerHTML= message 
}

submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    if (
        !validateName(firstname) ||
        !validateName(surname) ||
        !validateCountryCode() ||
        !validatePhone() ||
        !validateEmail() ||
        !validatePassword(password, passwordError) ||
        !validatePassword(confirmPassword, confirmPasswordError) ||
        !passwordMatches()
    
    ) {
        alert("form validation failed")
        return
    } 
    alert ("valid")
    fetch("http://localhost:8000/register",{
        method: "POST",
        headers: {
            "Content-type":"application.json; "
        },
        body: JSON.stringify({
            title: firstname.value,
            body: surname.value,
            userId: dial.value,
        }),
    })
        .then((e) => {

            console.log(e.status)
            e.json().then(e=>console.log(e))
        })
        console.log("After Fetch")
        // form.submit()


    // if (validateName(firstname)== true && validateName(surname)== true) {
    //     alert("valid")
    // } else {
    //     alert("invalid")
    // }
})






// for (let index = 0; index < countryCodes.length; index++) {
//     dropDown.innerHTML += `<option id=${index} >${countryCodes[index]}</option>`
// }

// firstname.addEventListener("keyup",function(e){
//     validateName(firstname)
// })

// function validateName(field){
//     const name = field.value
//     if(name.length<2){
//         console.log("can't be less than 2 chars")
//         updateElementStyle(field,"invalid")
//         return
//     }
//     updateElementStyle(field,"valid")
// }

// function updateElementStyle(field,action){
//     if(action=="valid"){
//         field.style.borderWidth = "3px"
//         field.style.borderColor = "green"
//         console.log("valid")
//         return
//     }
//     field.style.borderWidth = "3px"
//     field.style.borderColor = "red"

// }

// surname.addEventListener("keyup",function(e){
//     validateName(surname)
// })

// dial.addEventListener("keyup",function(e){
//     const phone = dial.value
//     if(phone.length==10){
//         updateElementStyle(dial,"valid")
//         return
//     }
//     updateElementStyle(dial,"invalid")
// })



// const firstname = document.getElementById("firstname");
// const surname = document.getElementById("surname");
// const dropDown = document.getElementById("drop-down");
// const dial = document.getElementById("dial")
// const countryCodes = ["+234","+233","+44","+1","+77"]

// // countryCodes.forEach((data,index)=>{
// //     dropDown.innerHTML += `<option id=${index} >${data}</option>`
// // })

// for (let index = 0; index < countryCodes.length; index++) {
//     dropDown.innerHTML += `<option id=${index} >${countryCodes[index]}</option>`
// }

// firstname.addEventListener("keyup",function(e){
//     validateName(firstname)
// })

// function validateName(field){
//     const name = field.value
//     if(name.length<2){
//         console.log("can't be less than 2 chars")
//         updateElementStyle(field,"invalid")
//         return
//     }
//     updateElementStyle(field,"valid")                     /* TAKE NOTE  JULY 10 2023      10:59AM*/
// }

// function updateElementStyle(field,action){
//     if(action=="valid"){
//         field.style.borderWidth = "3px"
//         field.style.borderColor = "green"
//         console.log("valid")
//         return
//     }
//     field.style.borderWidth = "3px"
//     field.style.borderColor = "red"

// }

// surname.addEventListener("keyup",function(e){
//     validateName(surname)
// })

// dial.addEventListener("keyup",function(e){
//     const phone = dial.value
//     if(phone.length==10){
//         updateElementStyle(dial,"valid")
//         return
//     }
//     updateElementStyle(dial,"invalid")
// })


// // STARTED HERE

// function validate(element){
//     const name = element.value
//     console.log(name)
//     if(name.length<3){
//         element.style.borderColor = "red"
//         element.style.borderWidth = "5px"
//     }
// }

//                                                    // EXAMPLE 
// validaateName(surname)

// console.log("my name is"+name+. you can call me \"isaac\")
// console.log(name+ "isn/'t feeling too good")
// console.log("my name is"+name+". you can call me \*isaac\*")
// console.log($"name" isn't feeling too good)


// // if phone number.10=


// dial.addEventListener("Keyup",function(e)){
//     const phone = dial.value
//     if(PHONE.LENGTH==10){
//         dial.style.borderColor = "green"
//         dial.style.borderwidth = "5px"
//     }
// })

// function updateElementStyle(element, value){
//     if(value=="valid"){
//         element.get
//     }
// }

// function updateElementStyle(element,value){
//     if(value=="valid"){
//         element.style.borderColor ="green"
//         element.style.borderwidth = "5px"

//     }else if 
// }

// // ADD: EMAIL PASSWORD AND CONFIRM PASSWORD

// // 17th JULY 2O23
// // I WILL BE GOOD AS BACKEND DEVELOPEMNT BY JEHOVAH'S GRACE 🙏🏻

// LEARN HOW TO SET TIME OUT WITH JAVASCRIPT

// computer can be defined as an electronic machine that has the capability to accept dataa and being out a raw face wicuh is known as information 

// if(!PaymentResponse.match(/[A-Z]))


//                                                                 // JULE 24 2023
//                                                                 FORM VALIDATION WITH JAVASCRIPT

//      function updatePasswordMessage(message,status,field){

//      }  

//      submitButton.addEventListener("click", function(e)){
//         e.preventDefault()


//      if(
    
//         validateName(firstname)==false ||
//         validateName(surname)==false ||
//      )
//      {
//         alert("Form validation failed")
//         return
//      }
//     }
