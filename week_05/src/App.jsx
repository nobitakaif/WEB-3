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
import { Airdrop } from './components/Airdrop';
import { ShowBalance } from './components/ShowBalance';


function App() {
  

  return (
    <>
    {/* endpoint is the own RPC url server https://alchemy.com  */}
       <ConnectionProvider endpoint={"https://api.devnet.solana.com"}> { /* this provide you connection object (url) that we got from alchemy.com*/}
            <WalletProvider wallets={[]} >  { /* this provide you wallet object like phantom, backpack*/}
                <WalletModalProvider>
                  <div style={{
                    height:"100vh",
                    width:"100vw",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column"
                  }}>
                    <div  style={{
                        width:"100vw",
                        display:"flex",
                        justifyContent:"center"
                      }}>
                      <div>
                        <WalletMultiButton/>
                        </div>
                        <WalletDisconnectButton/>
                      </div>
                      <div>
                        <Airdrop/>
                        <ShowBalance/>
                      </div>
                  </div>
                    
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </>
  )
}

export default App
