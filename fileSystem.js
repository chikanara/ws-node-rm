const fs = require("fs")
// console.log("start reading file .........")
// fs.readFile("./mathlib.js","utf-8",(err,data) => {
//     if (err) {
//         console.error("err",err)
//     }
//     else {
//         console.log(data)
//     }
      
// })

// console.log("end reading file")



console.log("start reading file .........")
const data = fs.readFileSync("./localModule.js","utf-8")
console.log(data)
console.log("end reading file")