import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import React, { useRef } from "react"

export function SendToken(){
    const wallet = useWallet()
    const {connection} = useConnection()

    const publickRef = useRef<HTMLInputElement>(null)
    const valueRef = useRef<HTMLInputElement>(null)

    async function sendToken(){
        const publicKey = publickRef.current?.value
        const ammount = valueRef.current?.value

        console.log(publicKey)
        if (!wallet.publicKey) {
            console.error("Wallet not connected")
            return
        }
        if(!publicKey){
            return 
        }
        const transaction = new Transaction() // this is the making the transaction 
        transaction.add(SystemProgram.transfer({ // this is the instruction, a transaction has multiple instruction after one by one 
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(publicKey) ,
            lamports: Number(ammount)* LAMPORTS_PER_SOL
        }))
        await wallet.sendTransaction(transaction,connection) // this is the actual trasaction 
        alert("solana has been sent")

    }

    return <div>
        <input type="text" ref={publickRef}/>
        <input type="text" ref={valueRef} />
        <button onClick={sendToken}>send Token</button>
    </div>
}