// const fdsfdsx = require("./module");

// const obj = {
//     name: "asguds",
//     age: 12
// }
// const {name} = obj // = const name = obj.name
// const sample = "A name"

// // console.log(sample)
// console.log(fdsfdsx)
// // console.log(text.age)
// // console.log(text.text)


const fs = require("fs")

// fs.writeFileSync("data.txt","Sample")

try{
    fs.writeFileSync("data.txt","Extra Data")
}catch(err){
    console.log(err)
}
fs.appendFileSync("data.txt","Extra Data")

const content = fs.readFileSync("data.txt","utf-8")
console.log(content)

fs.writeFile("./sadhvadyasd/async.txt","Written Asynchronously",(err)=>{
    if(err){
        console.log("Failed to write File")
        return
    }
    console.log("File written successfully")
})

fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Failed to read file")
        return
    }
    console.log(data)
})