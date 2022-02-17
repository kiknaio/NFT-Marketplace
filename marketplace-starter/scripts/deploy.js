// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // write the deploy script here

  const Market = await ethers.getContractFactory("NFTMarket");
  const market = await Market.deploy();
  await market.deployed();
  const marketAddress = market.address;
  console.log("NFT Market deployed to:", marketAddress);

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(marketAddress);
  await nft.deployed();
  const nftContractAddress = nft.address;
  console.log("NFT deployed to:", nftContractAddress);

  // await nft.createToken("a");
  // await nft.createToken("b");
  // await nft.createToken("c");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
