import { ethers } from "hardhat";

async function main() {
  console.log("Deploying StratScrollsSecure contract...");

  const StratScrollsSecure = await ethers.getContractFactory("StratScrollsSecure");
  const stratScrollsSecure = await StratScrollsSecure.deploy();

  await stratScrollsSecure.waitForDeployment();

  const contractAddress = await stratScrollsSecure.getAddress();
  console.log("StratScrollsSecure deployed to:", contractAddress);

  // Verify contract on Etherscan
  console.log("Waiting for block confirmations...");
  await stratScrollsSecure.deploymentTransaction()?.wait(6);

  console.log("Contract deployed successfully!");
  console.log("Contract address:", contractAddress);
  console.log("Network:", await ethers.provider.getNetwork());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
