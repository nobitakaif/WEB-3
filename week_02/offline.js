//  hex -> 1 character = 4 bits
function arrayToText(byteArr){
    let hexString = ''
    for(let i=0;i<byteArr.length;i++){
        hexString += byteArr[i].toString(16).padStart(2,'0') // padStart -> we know we pick 4 bit from the 1 byte (8 bits) and if the any number converted into 00001101 and if first 4 bits are 0 then add 0+d atleast 2 char just like (0d)   
    }
    return hexString
}


const str = "hello"
const strByte = new TextEncoder().encode(str)
console.log(strByte)
const byteArr = new Uint8Array([104,101,108,108,111]) // "hello"
const hexString = arrayToText(byteArr)
console.log(hexString)


// Base64 -> 1 character = 6 bits

const byteArr1 = new Uint8Array([104,101,108])
const base64Encoded = Buffer.from(byteArr1).toString("base64")
console.log("base64",base64Encoded)