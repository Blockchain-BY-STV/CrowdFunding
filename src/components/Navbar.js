import React,{ useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";

const Navbar = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const activeAccount = await getAccount();
        setAccount(activeAccount);
      } catch (error) {
        console.error("Error retrieving account:", error);
      }
    })();
  }, []);
      // TODO 5.b - Get the active account
  //     const activeAccount = await getAccount();
  //     setAccount(activeAccount); 
  //   })();
  // }, []);

  // TODO 4.a - Complete onConnectWallet function
  const onConnectWallet = async () => {
    await connectWallet();
    const account=await getAccount();
    setAccount(account);
  };

  return (
    <div className="navbar navbar-dark bg-dark fixed-top">
      <div className="container py-2">
        <a href="/" className="navbar-brand">
          Tezos Lottery
        </a>
        <div className="d-flex">
          {/* TODO 4.b - Call connectWallet function onClick  */}
          <button onClick={onConnectWallet} className="btn btn-outline-info" >
            {/* TODO 5.a - Show account address if wallet is connected */}
            {/* {account?account:"Connected Wallet"} */}
            {account!==""?account:"Connect Wallet "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
