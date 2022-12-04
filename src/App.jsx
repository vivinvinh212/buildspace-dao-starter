import { useAddress, ConnectWallet, Web3Button, useNFTBalance, useContract } from "@thirdweb-dev/react";
import { useState, useEffect, useMemo } from 'react';

const App = () => {
  const address = useAddress();
  console.log(address);
  // Initialize our Edition Drop contract
  const editionDropAddress = "0x0043C727F639972502D2c281d3dfB5bD874263d0"
  const { contract: editionDrop } = useContract(editionDropAddress, "edition-drop");
  // Hook to check if the user has our NFT
  const { data: nftBalance } = useNFTBalance(editionDrop, address, "0")

  const hasClaimedNFT = useMemo(() => {
    return nftBalance && nftBalance.gt(0)
  }, [nftBalance])

  // ... include all your other code that was already there below.

  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to My DAO</h1>
        <div class="btn-hero">
          <ConnectWallet />
        </div>
      </div>
    );

  }

  if (hasClaimedNFT) {
    return (
      <div className="member-page">
        <h1>🍪DAO Member Page</h1>
        <p>Congratulations on being a member</p>
      </div>
    );
  };


  return (
    <div className="mint-nft">
      <h1>Mint your free 🍪DAO Membership NFT</h1>
      <div className="btn-hero">
        <Web3Button
          contractAddress={editionDropAddress}
          action={contract => {
            contract.erc1155.claim(0, 1)
          }}
          onSuccess={() => {
            console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
          }}
          onError={error => {
            console.error("Failed to mint NFT", error);
          }}
        >
          Mint your NFT (FREE)
        </Web3Button>
      </div>
    </div>
  );

};

export default App;
