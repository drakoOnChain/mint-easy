# MintEasy DApp

A simple beginner-friendly Ethereum ERC20 token project built with **Hardhat** and a **local frontend**, demonstrating the journey from zero Solidity experience to a full-stack DApp.  

## **Why This Project Was Made**

This project is a **milestone in my blockchain learning journey**, showing:

- This simple project shows the Progress from zero Solidity knowledge 
- Understanding of smart contract deployment
- Basic frontend integration with Web3

---

## **Project Overview**

- **Smart Contract:** `MintEasy.sol` — ERC20 token with a simple `mint()` function.
- **Testing:** Basic tests using **Mocha** and **Chai**.
- **Deployment:** Script using Hardhat for local network and testnets (Sepolia, Mumbai).
- **Frontend:** Simple HTML + JS app to connect wallet and mint tokens.
- **Goal:** Showcase progress on GitHub from a beginner to building full-stack blockchain projects.

---

## **Features**

1. Mint 50 tokens at a time to your wallet.  
2. - **Local frontend**:
  - Connect wallet (MetaMask)
  - Mint tokens with a click
  - Show wallet address and balance
3. Unit test verifying contract functionality.  
4. Configured for **Hardhat localhost** and Ethereum testnets.

---

## **Tech Stack**

- **Solidity 0.8.28**  
- **Hardhat 3**  
- **Ethers.js v6**  
- **Mocha + Chai**  
- **HTML/CSS/JS** frontend  
- **Testnets:** Sepolia 

---

## **Setup**

1. **Clone the repo:**

git clone https://github.com/drakoOnChain/mint-easy.git
cd mint-easy

2. Install dependencies

npm install

3. **Set environment variables in a .env file:**
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
SEPOLIA_PRIVATE_KEY=0xYOUR_PRIVATE_KEY

4. Compile contracts
npx hardhat compile

5. Run a local blockchain
npx hardhat node

6. Deploy contract locally

Open a new terminal:
npx hardhat run scripts/deploy.js --network localhost

**Save the deployed contract address – you’ll need it for the frontend (app.js)**

7. Run tests
npx hardhat test

8. Run frontend

Open frontend/index.html in your browser.

Connect MetaMask (make sure it’s on localhost:8545)

Click “Mint” to get tokens

---

## **⚠️ Common Issues & Fixes**

I faced many issues while setting this up, here are the key ones:

Hardhat v3 dropped built-in Ethers v5

Old tutorials use ethers.getSigners() → not available anymore.

Solution: Install @nomicfoundation/hardhat-ethers and use the v6 syntax.

TypeScript configs were confusing

Solution: Restarted project in JavaScript mode to keep it simple.

Deploy script errors

.deployed() not a function in Ethers v6.

Solution: Removed .deployed() and used waitForDeployment().

Frontend issues

Needed correct ABI + deployed contract address.

Solution: Copy MintEasy.json ABI after compiling and update app.js.


##🤝 Contributing

This is mainly a learning project, but feel free to fork, open issues, or suggest improvements.

##License

MIT
