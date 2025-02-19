import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, {  useRef } from "react";

export function Airdrop(){

    const wallet = useWallet() // this hook work only when this component wrap in between <ConnectionProvider> and <WalletProvider?
    const {connection} = useConnection() 
    const inputRef = useRef<HTMLInputElement>(null)
    async function SendAirDrop(){
        if(!wallet.publicKey){
            return
        }
        // if(!inputRef.current){
        //     return 
        // }
        const value = inputRef.current?.value
        await connection.requestAirdrop(wallet.publicKey,Number(value) * 1000000000)
        alert(`sol is sent and value is ${value}`)
    }
    return (
        
        <div>
            your public key is <div style={{fontStyle:"red"}}>{wallet.publicKey?.toString()}<br/></div>
            <input type="text" ref={inputRef} placeholder="enter amount" />
            <button onClick={SendAirDrop}>Send Airdrop</button>
    </div>
    )
}