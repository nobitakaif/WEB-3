const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
// console.log(Buffer(uint8Array))
const base64Encoded = Buffer.from(uint8Array).toString("base64");

console.log(base64Encoded);