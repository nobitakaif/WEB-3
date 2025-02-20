import * as ed from "@noble/ed25519"

async function main(){
    const privateKey = ed.utils.randomPrivateKey() // generating the private key aosifnawfh8803wfnaowfiwe0foweifn9430
    
    console.log(privateKey)

    const msg = new TextEncoder().encode("nobtia") //this is msg

    const sign = await ed.signAsync(msg,privateKey) // signing the msg using the private key and msg

    const publicKey = await ed.getPublicKeyAsync(privateKey) // generating the public-key corresponding to private key
    console.log(publicKey)
    const isValid = await ed.verifyAsync(sign, msg, publicKey) // checking the msg is indeed signing by this user's public-key or not if true that mean msg-signature is indeed sign by this user who has public key
    console.log(isValid)
}
main()
