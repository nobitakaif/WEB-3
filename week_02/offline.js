function arrayToText(byteArr){
    let hexString = ''
    for(let i=0;i<byteArr.length;i++){
        hexString += byteArr[i].toString()
    }
    return hexString
}

const byteArr = new Uint8Array([104,101,108,108,111])
const hexString = arrayToText(byteArr)
console.log(hexString)
