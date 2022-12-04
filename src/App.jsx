import { useAddress, ConnectWallet, useNFTBalance, useContract } from "@thirdweb-dev/react";
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
  return (
    <div className="landing">
      <h1> Welcome dude! </h1>
    </div>
  )

};

export default App;
