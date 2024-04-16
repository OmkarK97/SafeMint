import { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  useAccount,
  useTransactionReceipt,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import './App.css'
import abi from './NftAbi.json';

function App() {
  const { address } = useAccount();

  const {
    data,
    writeContract,
    isPending,
  } = useWriteContract();

  const handleMint = (e) => {
    e.preventDefault();
    try {
      writeContract({
        abi,
        address: "0xD8C448dD8A4785835da7af461ebB015dD83d4a12",
        functionName: "safeMint",
        args: [address],
      });
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <>
      <div>
        <ConnectButton />
      </div>
      <div className="card">
        <button disabled={isPending} onClick={handleMint}>
          {isPending ? 'Minting' : 'Mint'}
        </button>
      </div>
    </>
  )
}

export default App
