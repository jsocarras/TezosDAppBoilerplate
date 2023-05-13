import React from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

type GenerateRandomProps = {
  contract: any;
  setUserBalance: any;
  Tezos: TezosToolkit;
  userAddress: string;
};

const GenerateRandom: React.FC<GenerateRandomProps> = ({
  contract,
  setUserBalance,
  Tezos,
  userAddress,
}) => {
  const generateRandom = async () => {
    try {
      const op = await contract.methods.generate().send();
      await op.confirmation();
      const newBalance = await Tezos.tz.getBalance(userAddress);
      setUserBalance(newBalance.toNumber());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={generateRandom}>Generate random value</button>
  );
};

export default GenerateRandom;
