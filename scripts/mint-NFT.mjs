const CONTRACT_ADDRESS = "0xd73527fd72Ce34F09B8308AAc8BAa3Cf3e25bdA4"
const META_DATA_URL = "ipfs://bafyreifxwteb4tb6akv5ledsns7ahareyzmdozmk2wq73clpizv2s26evi"

async function mintNFT(contractAddress, metaDataURL) {
   const NFT = await ethers.getContractFactory("NFT")
   const [owner] = await ethers.getSigners()
   await NFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT cunhado para: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });