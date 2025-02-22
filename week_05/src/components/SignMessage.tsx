import { useWallet } from "@solana/wallet-adapter-react"
import React, { useRef, useState } from "react"
import { ed25519 } from "@noble/curves/ed25519"
import bs58 from "bs58"

export function SignMessage(){
    const {publicKey,signMessage} =useWallet()
    const [signatureVal,setSignatureVal] = useState<string>()
    const inputSignRef = useRef<HTMLInputElement>(null)

    async function messagSigned(){
        if(!publicKey){
            throw new Error("wallet is not connected")
        }
        if(!signMessage){
            throw new Error("wallet does not support message signing")
            
        }
        
        const message = inputSignRef.current?.value
        const endcodeMessage = new TextEncoder().encode(message)
        const signature = await signMessage(endcodeMessage)
        
        if(!ed25519.verify(signature,endcodeMessage,publicKey.toBytes())){ // this the checking the signature is indeed signed by the same private key that is associated with this public key 
            throw new Error ("Signature invalid")
        }
        alert("message signature "+bs58.encode(signature))
        setSignatureVal(bs58.encode(signature))
        
    }
    
    return <div>
        <input type="text" ref={inputSignRef} />
        <button onClick={messagSigned}>Sign Message</button>
        <div>{signatureVal}</div>
    </div>
}