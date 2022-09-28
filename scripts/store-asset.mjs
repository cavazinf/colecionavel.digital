import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.NFT_STORAGE_API_KEY

async function storeAsset() {
   const client = new NFTStorage({ token: API_KEY })
   const metadata = await client.store({
       name: 'NFT',
       description: 'Primeiro NFT na IPFS da colecionavel.digital',
       image: new File(
           [await fs.promises.readFile('assets/colecionavel.digital.png')],
           'colecionavel.digital.png',
           { type: 'image/png' }
       ),
   })
   console.log("Metadados armazenados no Filecoin e IPFS na URL:", metadata.url)
}

storeAsset()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });