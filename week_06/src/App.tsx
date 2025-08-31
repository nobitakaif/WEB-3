
import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchPad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  

  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]}>
          <WalletModalProvider>
            <div style={{
              display:"flex",
              justifyContent:"space-between",
              padding:"20px"
            }}>
              <WalletMultiButton/>
              <WalletDisconnectButton/>
            </div>
            
            <TokenLaunchpad/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      
    </>
  )
}

export default App
