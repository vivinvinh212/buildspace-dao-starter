import { useAddress, ConnectWallet } from "@thirdweb-dev/react";

const App = () => {
  const address = useAddress();

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
