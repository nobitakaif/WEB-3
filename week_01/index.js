const crypto = require("crypto")

const  input = "100xdevs"

const output = crypto.createHash("sha256").update(input).digest("hex")

console.log(output)