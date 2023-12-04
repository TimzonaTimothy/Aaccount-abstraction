require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");


const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		version: "0.8.19",
		settings: {
			optimizer: {
				enabled: true,
				runs: 100,
			},
			viaIR: true,
		},
	},
	networks: {
		hardhat: {
			chainId: 1337,
			allowUnlimitedContractSize: true,
			gasPrice: 10,
			gasLimit: 6e6,
		},
		mumbai: {
			url: ALCHEMY_API_KEY_URL,
			accounts: [MUMBAI_PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: {
		  polygonMumbai: POLYGONSCAN_KEY,
		},
	  },
};
