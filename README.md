# Smart Contract Wallet - Account Abstraction

This is a Smart Contract Wallet app which allows users to use a smart contract as their wallet instead of an EOA to send and recieve funds and view balance. This also use EIP-4337 for Account Abstraction.


## Contract Address

EntryPoint Address https://mumbai.polygonscan.com/address/0xA7ADB3EB913429052208d6C7BBCc65dCA2d96C4f#code

Factory address https://mumbai.polygonscan.com/address/0x580F3F30Fc36FB0346eB3Ee73942dcA8021f43e6#code


## Getting Started

### Installation & Testing

- Clone the repository on your local machine

```
git clone https://github.com/Varun-Patkar/ETHPROOF-Advanced-Varun-Ass4.git
```

- Install all node dependencies

```
npm install
```

- Deploy the test blockchain using hardhat

```
npx hardhat node
```

- Deploy the contract on the blockchain using the deploy.js script

```
npx hardhat run scripts/deploy.js --network localhost
```

- Finally, Start the next.js development live server

```
npm run dev
```

