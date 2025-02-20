import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';


function App() {
  

  return (
    <>
    {/* endpoint is the own RPC url server https://alchemy.com  */}
       <ConnectionProvider endpoint={"https://worldchain-sepolia.g.alchemy.com/v2/63wqFPA5hH3RYwsr6NpBfu0W-bDMC3nZ"}> { /* this provide you connection object (url) that we got from alchemy.com*/}
            <WalletProvider wallets={[]} >  { /* this provide you wallet object like phantom, backpack*/}
                <WalletModalProvider>
                    <WalletMultiButton/>
                    <WalletDisconnectButton/>
                    <Airdrop/>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </>
  )
}

export default App
