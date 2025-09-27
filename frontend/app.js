//Replace CONTRACT_ADDRESS with your locally deployed MintEasy contract.

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const CONTRACT_ABI = [
    // Minimal ABI for ERC20 + mint
    "function mint() public",
    "function balanceOf(address) view returns (uint256)"
];

let provider, signer, contract;
const connectBtn = document.getElementById("connectBtn");
const mintBtn = document.getElementById("mintBtn");
const accountSpan = document.getElementById("account");
const balanceSpan = document.getElementById("balance");

connectBtn.onclick = async () => {
    if (window.ethereum) {
        provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();
        contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        accountSpan.innerText = accounts[0];

        const bal = await contract.balanceOf(accounts[0]);
        balanceSpan.innerText = bal.toString();
    } else {
        alert("Please install MetaMask!");
    }
};

mintBtn.onclick = async () => {
    if (!contract) return alert("Connect wallet first");
    const tx = await contract.mint();
    await tx.wait();
    const bal = await contract.balanceOf(await signer.getAddress());
    balanceSpan.innerText = bal.toString();
};
