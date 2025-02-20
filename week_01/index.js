const crypto = require("crypto")

const  input = "100xdevs"

const output = crypto.createHash("sha256").update(input).digest("hex")

// console.log(output)




// fn() give us the number, who's hash start with 00000 zeros 
function findHashWithPrefix(prefix){
    let num = 0
    while(true){
        let inputStr = num.toString() // if want output with a selected input +  random number who's hash start with 00000 then (inp + num.toString()) 
        const hash = crypto.createHash("sha256").update(inputStr).digest("hex")
        if(hash.startsWith(prefix)){
            return {input:inputStr , hash : hash}
        }
        num++
    }
}

console.log(findHashWithPrefix("00000"))