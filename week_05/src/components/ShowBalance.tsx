import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import React, { useEffect, useState } from "react"

export function ShowBalance(){
    const wallet = useWallet()
    const [sol,useSol] =useState<any>(0)
    const {connection} = useConnection()

    async function BalReq(){
        if(!wallet.publicKey){
            return 
        }
        const balance = await connection.getBalance(wallet.publicKey)
        await useSol(balance/LAMPORTS_PER_SOL)
    }

    useEffect(()=>{
        BalReq()
    },[wallet])

    return <div>
        balance: <span>{sol}</span> SOL
    </div>
}