const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
async function main() {
  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: "0x580F3F30Fc36FB0346eB3Ee73942dcA8021f43e6",
    constructorArguments: ["0xA7ADB3EB913429052208d6C7BBCc65dCA2d96C4f"],
  });
}
// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

