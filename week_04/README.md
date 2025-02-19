# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

all web3 slide link
    <!-- https://petal-estimate-4e9.notion.site/Web-3-Cohort-d1b49c992dbf4648b185f974523d127c -->

slide link
    <!-- https://petal-estimate-4e9.notion.site/Wallet-adapter-860feade9cb940cea696eedf4fc61251 -->

DApp ---
    a website which is connected to the wallet and it can debit the money from the your wallet panthom, backpack like this, it can not directly debit the money from your wallet, first of all we have to connect to the website to our walledt, then whenever we want to debit the money through the wallet adapter then it will send the request to the wallet and if we give permission to them it can debit money   

Wallet --- 
    a website that hold our public/private key or like credential thing thats called wallet

Wallet Adapter ---
    any webite that want to


dependencies
    npm install @solana/wallet-adapter-base \
    @solana/wallet-adapter-react \
    @solana/wallet-adapter-react-ui \
    @solana/wallet-adapter-wallets \
    @solana/web3.js 

# Things to do
    Once a user connects to your `dapp`, you usually ask the user to do a few things with their wallet balance - 

    1. Request Airdrop
    2. Show SOL balances (GET data from the blockchain)
    3. Send a transaction (Send a transaction to the blockchain)
    4. Sign a message (Verify the ownership of the wallet)
